import { useTranslation } from 'react-i18next'
import { Hero } from '../components/Hero'
import { ScrollReveal, SectionHeader } from '../components/CyberBackground'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import { GitHubStatsSection } from '../components/GitHubStats'
import { CyberButton } from '../components/ProjectCard'
import { MediaSlot } from '../components/MediaSlot'
import { HOME_GAME_PREVIEWS, ANIMATIONS } from '../data/content'
import { asset } from '../utils/asset'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />

      <GitHubStatsSection />

      <section id="game" className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <SectionHeader label={t('games.label')} title={t('games.title')} className="mb-0" />
              <div className="flex flex-wrap gap-3">
                <CyberButton to="/gallery" variant="ghost">{t('games.galleryCta')}</CyberButton>
                <CyberButton to="/games">{t('games.cta')}</CyberButton>
              </div>
            </div>
            <p className="mb-8 max-w-2xl text-text-muted">{t('games.description')}</p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_GAME_PREVIEWS.map((game, i) => (
              <ProjectCard key={game.id} project={game} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="animation" className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <SectionHeader label={t('animation.label')} title={t('animation.title')} />
            <p className="mb-8 max-w-2xl text-text-muted">{t('animation.description')}</p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ANIMATIONS.map((item, i) => (
              <ProjectCard key={item.id} project={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="modeling" className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <SectionHeader label={t('modeling.label')} title={t('modeling.title')} />
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <p className="text-text-muted">{t('modeling.description')}</p>
              <div className="glass glass-hover overflow-hidden rounded-xl">
                <MediaSlot
                  media={{ type: 'gif', src: 'images/Panana.gif', alt: 'Banana Duck' }}
                  aspect="aspect-video"
                />
                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-display font-semibold">{t('modeling.featured')}</p>
                    <p className="font-mono text-xs text-accent">{t('modeling.tiles')}</p>
                  </div>
                  <CyberButton to="/crocotile">{t('modeling.cta')}</CyberButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="web" className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <SectionHeader label={t('web.label')} title={t('web.title')} />
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-text-muted">{t('web.description')}</p>
                <p className="mt-4 text-text-muted">{t('web.experience')}</p>
                <div className="mt-6 space-y-3">
                  {(['web', 'design', 'video'] as const).map((key) => (
                    <div key={key} className="glass rounded-lg p-4">
                      <p className="text-sm text-text-muted">{t(`web.activities.${key}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={asset('images/htmlEditor.png')}
                  alt="Web development"
                  className="glass max-w-xs rounded-xl p-4 transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
