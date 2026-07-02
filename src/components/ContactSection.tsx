import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ScrollReveal, SectionHeader } from './CyberBackground'
import { CyberButton } from './ProjectCard'
import { SOCIAL_LINKS } from '../types'

export function ContactSection() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SOCIAL_LINKS.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
      label: t('contact.instagram'),
      href: SOCIAL_LINKS.instagram,
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.227-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`glass glass-hover group flex items-center gap-4 rounded-xl p-6 ${
                link.accent === 'warm' ? 'hover:border-warm/40' : 'hover:border-accent/40'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`rounded-lg p-3 ${
                  link.accent === 'warm'
                    ? 'bg-warm/10 text-warm group-hover:shadow-[0_0_16px_rgba(255,149,0,0.3)]'
                    : 'bg-accent/10 text-accent group-hover:shadow-[0_0_16px_rgba(255,214,10,0.3)]'
                }`}
              >
                {link.icon}
              </div>
              <span className="font-mono text-sm">{link.label}</span>
            </motion.a>
          ))}
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
