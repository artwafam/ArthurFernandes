import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { scrollToTop } from '../hooks/useScrollRestoration'

interface NavLinkProps {
  pathname: string
  hash?: string
  labelKey: string
  className?: string
  onNavigate?: () => void
}

export function NavLink({ pathname, hash, labelKey, className = '', onNavigate }: NavLinkProps) {
  const { t } = useTranslation()
  const location = useLocation()

  const isActive =
    location.pathname === pathname &&
    (hash ? location.hash === `#${hash}` : !location.hash)

  const handleClick = () => {
    onNavigate?.()
    if (location.pathname === pathname && location.hash === (hash ? `#${hash}` : '')) {
      scrollToTop()
    }
  }

  return (
    <Link
      to={{ pathname, hash: hash ? `#${hash}` : undefined }}
      onClick={handleClick}
      className={`rounded-lg px-3 py-2 font-mono text-sm transition-colors hover:text-accent ${
        isActive ? 'text-accent' : 'text-text-muted'
      } ${className}`}
    >
      {t(labelKey)}
    </Link>
  )
}
