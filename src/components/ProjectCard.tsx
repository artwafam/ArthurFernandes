import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ProjectItem } from '../types'
import { MediaSlot } from './MediaSlot'

interface ProjectCardProps {
  project: ProjectItem
  index?: number
}

const sizeClasses = {
  sm: 'md:col-span-1',
  md: 'md:col-span-1',
  lg: 'md:col-span-2 md:row-span-1',
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useTranslation()
  const isYoutube = project.media.type === 'youtube'
  const hasLinks = project.links && project.links.length > 0
  const isClickable = project.href && !isYoutube && !hasLinks

  const content = (
    <motion.article
      className={`glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-xl ${sizeClasses[project.size ?? 'md']}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative overflow-hidden">
        <MediaSlot
          media={project.media}
          aspect={project.size === 'lg' ? 'aspect-[16/9]' : 'aspect-video'}
          className={isYoutube ? '' : 'transition-transform duration-500 group-hover:scale-105'}
        />
        {!isYoutube && (
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
        )}
        {project.status && (
          <span className="absolute top-3 right-3 rounded-full border border-accent/30 bg-void/80 px-3 py-1 font-mono text-xs text-accent backdrop-blur-sm">
            {t(`games.status.${project.status}`)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-text transition-colors group-hover:text-accent">
          {t(project.titleKey)}
        </h3>
        {project.subtitleKey && (
          <p className="mt-1 font-mono text-xs text-warm">{t(project.subtitleKey)}</p>
        )}
        <p className="mt-2 flex-1 text-sm text-text-muted">{t(project.descriptionKey)}</p>
        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}

        {hasLinks && (
          <div className="relative z-20 mt-4 flex flex-wrap gap-2">
            {project.links!.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent/15 hover:text-warm"
              >
                {t(link.labelKey)} →
              </a>
            ))}
          </div>
        )}

        {project.href && isYoutube && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 mt-4 inline-flex font-mono text-xs text-accent hover:text-warm"
          >
            {t('games.watchYoutube')} →
          </a>
        )}
      </div>

      {isClickable && (
        <div className="absolute inset-0 z-10" aria-hidden>
          <span className="sr-only">{t(project.titleKey)}</span>
        </div>
      )}
    </motion.article>
  )

  if (isClickable) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    )
  }

  return content
}

interface ModelCardProps {
  titleKey: string
  statsKey: string
  media: ProjectItem['media']
  palette: string[]
  index?: number
}

export function ModelCard({ titleKey, statsKey, media, palette, index = 0 }: ModelCardProps) {
  const { t } = useTranslation()

  return (
    <motion.article
      className="glass glass-hover group overflow-hidden rounded-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <MediaSlot media={media} aspect="aspect-square" className="rounded-none" />
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
          {t(titleKey)}
        </h3>
        <p className="mt-1 font-mono text-xs text-accent">{t(statsKey)}</p>
        {palette.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-text-muted">
              {t('models.palette')}
            </p>
            <div className="flex gap-2">
              {palette.map((color) => (
                <div
                  key={color}
                  className="h-6 w-6 rounded border border-white/10 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  )
}

interface CyberButtonProps {
  children: React.ReactNode
  href?: string
  to?: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
}

export function CyberButton({ children, href, to, variant = 'primary', onClick }: CyberButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-mono text-sm font-medium tracking-wide transition-all duration-300'
  const styles =
    variant === 'primary'
      ? 'border border-accent/50 bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-[0_0_24px_rgba(255,214,10,0.3)]'
      : 'border border-border text-text-muted hover:border-warm/50 hover:text-warm'

  const className = `${base} ${styles}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}
