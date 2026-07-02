import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { loadGitHubData, type GitHubStatsData } from '../services/githubApi'

interface GitHubContextValue {
  data: GitHubStatsData | null
  loading: boolean
  stale: boolean
}

const GitHubContext = createContext<GitHubContextValue>({
  data: null,
  loading: true,
  stale: false,
})

function readInitialCache(): GitHubStatsData | null {
  try {
    const raw = localStorage.getItem('github-portfolio-cache-v1')
    if (!raw) return null
    return (JSON.parse(raw) as { data: GitHubStatsData }).data
  } catch {
    return null
  }
}

export function GitHubProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GitHubStatsData | null>(readInitialCache)
  const [loading, setLoading] = useState(!readInitialCache())
  const [stale, setStale] = useState(false)

  useEffect(() => {
    let cancelled = false

    loadGitHubData().then((result) => {
      if (cancelled) return
      setData(result.data)
      setStale(result.fromFallback && !result.fromCache)
      setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <GitHubContext.Provider value={{ data, loading, stale }}>{children}</GitHubContext.Provider>
  )
}

export function useGitHubData() {
  return useContext(GitHubContext)
}
