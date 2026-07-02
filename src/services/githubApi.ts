import { GITHUB_USERNAME, LANGUAGE_COLORS } from '../types'

const CACHE_KEY = 'github-portfolio-cache-v1'
const CACHE_TTL_MS = 60 * 60 * 1000
const MAX_REPO_LANG_FETCHES = 5

export interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  bio: string | null
  avatar_url: string
  html_url: string
  name: string | null
  login: string
  created_at: string
}

export interface LanguageStat {
  name: string
  bytes: number
  percent: number
  color: string
}

export interface GitHubStatsData {
  user: GitHubUser
  languages: LanguageStat[]
}

interface CacheEntry {
  fetchedAt: number
  data: GitHubStatsData
}

const profileAvatar = `https://github.com/${GITHUB_USERNAME}.png?size=200`
const profileUrl = `https://github.com/${GITHUB_USERNAME}`

export const GITHUB_PROFILE_FALLBACK: GitHubUser = {
  login: GITHUB_USERNAME,
  name: 'Arthur Fernandes',
  html_url: profileUrl,
  avatar_url: profileAvatar,
  bio: null,
  public_repos: 0,
  followers: 0,
  following: 0,
  created_at: '',
}

let inflight: Promise<GitHubStatsData> | null = null

function readCache(allowStale = false): GitHubStatsData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const entry = JSON.parse(raw) as CacheEntry
    if (!allowStale && Date.now() - entry.fetchedAt > CACHE_TTL_MS) return null
    return entry.data
  } catch {
    return null
  }
}

function writeCache(data: GitHubStatsData) {
  try {
    const entry: CacheEntry = { fetchedAt: Date.now(), data }
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry))
  } catch {
    // ignore quota / private mode
  }
}

async function githubFetch(url: string): Promise<Response> {
  return fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  })
}

async function fetchFromNetwork(): Promise<GitHubStatsData> {
  const userRes = await githubFetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
  if (!userRes.ok) throw new Error(`GitHub user fetch failed: ${userRes.status}`)
  const userJson = (await userRes.json()) as GitHubUser

  const user: GitHubUser = {
    ...userJson,
    avatar_url: userJson.avatar_url || profileAvatar,
    html_url: userJson.html_url || profileUrl,
  }

  const reposRes = await githubFetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
  )
  if (!reposRes.ok) throw new Error(`GitHub repos fetch failed: ${reposRes.status}`)
  const repos = (await reposRes.json()) as { languages_url: string; fork: boolean }[]

  const langTotals: Record<string, number> = {}
  const ownRepos = repos.filter((r) => !r.fork).slice(0, MAX_REPO_LANG_FETCHES)

  await Promise.all(
    ownRepos.map(async (repo) => {
      const langRes = await githubFetch(repo.languages_url)
      if (!langRes.ok) return
      const langs = (await langRes.json()) as Record<string, number>
      for (const [name, bytes] of Object.entries(langs)) {
        langTotals[name] = (langTotals[name] ?? 0) + bytes
      }
    }),
  )

  const total = Object.values(langTotals).reduce((a, b) => a + b, 0) || 1
  const languages = Object.entries(langTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percent: Math.round((bytes / total) * 100),
      color: LANGUAGE_COLORS[name] ?? '#ffd60a',
    }))

  return { user, languages }
}

function withFallback(partial: GitHubStatsData | null): GitHubStatsData {
  if (partial?.user) {
    return {
      user: { ...GITHUB_PROFILE_FALLBACK, ...partial.user },
      languages: partial.languages ?? [],
    }
  }
  return { user: GITHUB_PROFILE_FALLBACK, languages: [] }
}

export async function loadGitHubData(): Promise<{
  data: GitHubStatsData
  fromCache: boolean
  fromFallback: boolean
}> {
  const freshCache = readCache(false)
  if (freshCache) {
    return { data: freshCache, fromCache: true, fromFallback: false }
  }

  if (!inflight) {
    inflight = fetchFromNetwork()
      .then((data) => {
        writeCache(data)
        return data
      })
      .finally(() => {
        inflight = null
      })
  }

  try {
    const data = await inflight
    return { data, fromCache: false, fromFallback: false }
  } catch {
    const staleCache = readCache(true)
    if (staleCache) {
      return { data: staleCache, fromCache: true, fromFallback: false }
    }
    return { data: withFallback(null), fromCache: false, fromFallback: true }
  }
}
