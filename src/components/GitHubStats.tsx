import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ScrollReveal, SectionHeader } from './CyberBackground'
import { useGitHubStats } from '../hooks/useGitHubStats'
import { TECH_STACK, GITHUB_USERNAME } from '../types'
import { GITHUB_PROFILE_FALLBACK } from '../services/githubApi'
import { asset } from '../utils/asset'

export function GitHubStatsSection() {
  const { t } = useTranslation()
  const { data, loading, error } = useGitHubStats()
  const user = data?.user ?? GITHUB_PROFILE_FALLBACK

  const memberSince = user.created_at
    ? new Date(user.created_at).getFullYear()
    : '—'

  return (
    <section id="stack" className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader label={t('github.label')} title={t('github.title')} />
          <p className="mb-10 max-w-2xl text-text-muted">{t('github.description')}</p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-1">
            <div className="glass glass-hover h-full rounded-xl p-6">
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar_url}
                  alt={GITHUB_USERNAME}
                  className="h-16 w-16 rounded-full border-2 border-accent/40"
                />
                <div>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg font-semibold text-accent hover:text-warm"
                  >
                    @{user.login}
                  </a>
                  <p className="mt-1 text-sm text-text-muted">
                    {loading ? '…' : user.bio ?? t('github.fallbackBio')}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { label: t('github.repos'), value: loading && !data ? '—' : user.public_repos },
                  { label: t('github.followers'), value: loading && !data ? '—' : user.followers },
                  { label: t('github.since'), value: memberSince },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border bg-void-light/50 p-3">
                    <p className="font-display text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {t('github.viewProfile')}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="glass h-full rounded-xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {t('github.languages')}
              </h3>

              {loading && (
                <div className="mt-6 space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 animate-pulse rounded-lg bg-void-light" />
                  ))}
                </div>
              )}

              {!loading && error && (
                <p className="mt-6 text-sm text-text-muted">{t('github.error')}</p>
              )}

              {!loading && !error && data && data.languages.length > 0 && (
                <div className="mt-6 space-y-4">
                  {data.languages.map((lang, i) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div className="mb-1.5 flex justify-between font-mono text-xs">
                        <span className="text-text">{lang.name}</span>
                        <span className="text-text-muted">{lang.percent}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-void-light">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: lang.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {!loading && !error && data && data.languages.length === 0 && (
                <p className="mt-6 text-sm text-text-muted">{t('github.noLanguages')}</p>
              )}

              <div className="mt-8 flex flex-wrap gap-1 overflow-hidden rounded-lg">
                {!loading &&
                  data?.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="h-2 flex-1 min-w-[40px]"
                      style={{ backgroundColor: lang.color, opacity: 0.85 }}
                      title={`${lang.name} ${lang.percent}%`}
                    />
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-6" delay={0.15}>
          <div className="glass rounded-xl p-6">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {t('github.techStack')}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {TECH_STACK.map((tech, i) => (
                <motion.a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover group flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-accent/40"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/5">
                    <img src={asset(tech.icon)} alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold group-hover:text-accent">{tech.name}</p>
                    <p className="font-mono text-[10px] uppercase text-text-muted">{tech.category}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
