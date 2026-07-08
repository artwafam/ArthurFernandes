import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SOCIAL_LINKS } from '../types'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const [discordCopied, setDiscordCopied] = useState(false)

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(SOCIAL_LINKS.discord)
    setDiscordCopied(true)
    setTimeout(() => setDiscordCopied(false), 2000)
  }

  return (
    <footer className="border-t border-border py-10 text-center">
      <div className="container-main">
        <div className="mb-4 flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="font-mono text-sm text-text-muted transition-colors hover:text-accent"
          >
            {SOCIAL_LINKS.email}
          </a>
          <button
            type="button"
            onClick={copyDiscord}
            className="font-mono text-sm text-text-muted transition-colors hover:text-warm"
          >
            {discordCopied ? t('contact.copied') : `Discord · ${SOCIAL_LINKS.discord}`}
          </button>
          <a
            href={SOCIAL_LINKS.itch}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-muted transition-colors hover:text-accent"
          >
            itch.io
          </a>
        </div>
        <p className="text-small text-sm sm:text-base">
          {year} · {t('footer.rights')}
        </p>
        <Link to="/crocotile" className="mt-2 inline-block font-mono text-xs text-text-muted/50 hover:text-accent">
          3D Services
        </Link>
      </div>
    </footer>
  )
}
