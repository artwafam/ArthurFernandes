import { useGitHubData } from '../context/GitHubContext'

export function useGitHubStats() {
  const { data, loading, stale } = useGitHubData()
  return { data, loading, error: stale }
}
