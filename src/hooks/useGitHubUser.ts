import { GITHUB_PROFILE_FALLBACK } from '../services/githubApi'
import { useGitHubData } from '../context/GitHubContext'

export function useGitHubUser() {
  const { data } = useGitHubData()
  return data?.user ?? GITHUB_PROFILE_FALLBACK
}
