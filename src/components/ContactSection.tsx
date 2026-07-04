import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ScrollReveal, SectionHeader } from './CyberBackground'
import { CyberButton } from './ProjectCard'
import { SOCIAL_LINKS } from '../types'

export function ContactSection() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const [discordCopied, setDiscordCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SOCIAL_LINKS.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(SOCIAL_LINKS.discord)
    setDiscordCopied(true)
    setTimeout(() => setDiscordCopied(false), 2000)
  }

  const links = [
    {
      label: t('contact.email'),
      href: `mailto:${SOCIAL_LINKS.email}`,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      accent: 'accent' as const,
    },
    {
      label: discordCopied ? t('contact.copied') : t('contact.discord'),
      handle: SOCIAL_LINKS.discord,
      onClick: copyDiscord,
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.029a.077.077 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.301 12.301 0 0 1-1.873.891.076.076 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.077.077 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
        </svg>
      ),
      accent: 'warm' as const,
    },
    {
      label: t('contact.itch'),
      href: SOCIAL_LINKS.itch,
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 6v12h2V8h2l3 8h2l3-8h2v10h2V6h-3.5l-2.5 6.5L8.5 6H2z" />
        </svg>
      ),
      accent: 'accent' as const,
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader label={t('contact.label')} title={t('contact.title')} />
          <p className="mb-10 max-w-xl text-text-muted">{t('contact.subtitle')}</p>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link, i) => {
            const className = `glass glass-hover group flex w-full items-center gap-4 rounded-xl p-6 text-left ${
              link.accent === 'warm' ? 'hover:border-warm/40' : 'hover:border-accent/40'
            }`

            const inner = (
              <>
                <div
                  className={`rounded-lg p-3 ${
                    link.accent === 'warm'
                      ? 'bg-warm/10 text-warm group-hover:shadow-[0_0_16px_rgba(255,149,0,0.3)]'
                      : 'bg-accent/10 text-accent group-hover:shadow-[0_0_16px_rgba(255,214,10,0.3)]'
                  }`}
                >
                  {link.icon}
                </div>
                <div>
                  <span className="font-mono text-sm">{link.label}</span>
                  {link.handle && (
                    <span className="mt-1 block font-mono text-xs text-text-muted">{link.handle}</span>
                  )}
                </div>
              </>
            )

            if (link.onClick) {
              return (
                <motion.button
                  key={link.label}
                  type="button"
                  onClick={link.onClick}
                  className={className}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {inner}
                </motion.button>
              )
            }

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href?.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={className}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {inner}
              </motion.a>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CyberButton variant="ghost" onClick={copyEmail}>
            {copied ? t('contact.copied') : t('contact.copy')}
          </CyberButton>
          <span className="font-mono text-sm text-text-muted">{SOCIAL_LINKS.email}</span>
        </div>
      </div>
    </section>
  )
}
