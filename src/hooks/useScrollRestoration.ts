import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  window.scrollTo({ top: 0, left: 0, behavior })
}

export function useScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
      return () => window.clearTimeout(timer)
    }

    scrollToTop('instant')
  }, [pathname, hash])
}
