import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CyberButton } from './ProjectCard'
import { ProfileCard } from './ProfileCard'
import { TECH_STACK } from '../types'
import { asset } from '../utils/asset'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="relative flex min-h-screen items-center section-padding pt-28">
      <div className="container-main grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t('hero.badge')}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-wide md:text-5xl lg:text-6xl">
            {t('hero.title')}
            <br />
            <span className="gradient-text">{t('hero.titleAccent')}</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-text-muted">{t('hero.subtitle')}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CyberButton to="/games">{t('hero.ctaGames')}</CyberButton>
            <CyberButton to="/crocotile" variant="ghost">{t('hero.ctaModels')}</CyberButton>
            <CyberButton href="#contact" variant="ghost">{t('hero.ctaContact')}</CyberButton>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileCard />
          <div className="glass rounded-xl p-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{t('about.label')}</span>
            <h2 className="mt-2 font-display text-xl font-semibold">{t('about.title')}</h2>
            <p className="mt-4 text-sm text-text-muted">{t('about.p1')}</p>
            <p className="mt-3 text-sm text-text-muted">{t('about.p2')}</p>
            <div className="mt-5 border-t border-border pt-5">
              <LanguageFlags />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-8 w-5 rounded-full border border-accent/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  )
}

export function TechStrip() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-wider text-text-muted">{t('about.technologies')}</span>
      {TECH_STACK.map((tech) => (
        <a
          key={tech.name}
          href={tech.href}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-hover rounded-lg p-2 transition-transform hover:scale-110"
          title={tech.name}
        >
          <img src={asset(tech.icon)} alt={tech.name} className="h-8 w-auto" />
        </a>
      ))}
    </div>
  )
}

export function LanguageFlags() {
  const { t } = useTranslation()
  const flags = [
    { src: 'images/brasil.png', alt: 'Português' },
    { src: 'images/reino-unido.png', alt: 'English' },
    { src: 'images/suecia.png', alt: 'Svenska' },
    { src: 'images/japan-flag-icon-32.png', alt: '日本語' },
  ]

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs uppercase tracking-wider text-text-muted">{t('about.languages')}</span>
      <div className="flex gap-2">
        {flags.map((f) => (
          <img key={f.alt} src={asset(f.src)} alt={f.alt} className="h-7 rounded-sm border border-border object-cover" />
        ))}
      </div>
    </div>
  )
}

interface ShowcaseCarouselProps {
  items: { src: string; alt: string }[]
}

export function ShowcaseCarousel({ items }: ShowcaseCarouselProps) {
  return (
    <div className="glass overflow-hidden rounded-xl">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto p-4">
        {items.map((item) => (
          <img
            key={item.src}
            src={asset(item.src)}
            alt={item.alt}
            className="h-48 w-auto shrink-0 snap-center rounded-lg object-cover transition-transform hover:scale-105 md:h-56"
            loading="lazy"
          />
        ))}
        <div className="flex h-48 w-48 shrink-0 snap-center items-center justify-center rounded-lg border border-dashed border-accent/20 bg-void-light/50 md:h-56">
          <span className="font-mono text-xs text-text-muted">+</span>
        </div>
      </div>
    </div>
  )
}

export function PageHero({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="section-padding pt-32 pb-16">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{label}</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">{description}</p>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-accent to-warm" />
        </motion.div>
      </div>
    </section>
  )
}
