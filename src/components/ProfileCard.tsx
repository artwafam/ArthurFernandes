import { useTranslation } from 'react-i18next'
import { useGitHubUser } from '../hooks/useGitHubUser'

export function ProfileCard() {
  const { t } = useTranslation()
  const user = useGitHubUser()

  return (
    <div className="flex justify-center lg:justify-stretch">
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass glass-hover group flex w-full flex-col items-center gap-4 rounded-2xl p-4 text-center transition-transform hover:-translate-y-1 sm:flex-row sm:gap-5 sm:p-5 sm:text-left"
      >
        <div className="relative shrink-0">
          <img
            src={user.avatar_url}
            alt={user.name ?? 'Arthur Fernandes'}
            className="h-20 w-20 rounded-full border-2 border-accent/30 object-cover transition-colors group-hover:border-accent/60 sm:h-24 sm:w-24"
          />
          <span className="absolute -right-1 -bottom-1 rounded-full border border-void bg-void p-1">
            <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </span>
        </div>

        <div className="min-w-0">
          <p className="font-display text-lg font-semibold text-text group-hover:text-accent">
            {user.name ?? 'Arthur Fernandes'}
          </p>
          <p className="font-mono text-sm text-accent">@{user.login}</p>
          <p className="mt-2 text-sm text-text-muted">{t('profile.tagline')}</p>
        </div>
      </a>
    </div>
  )
}
