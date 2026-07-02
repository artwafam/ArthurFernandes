import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/Hero'
import { ScrollReveal, SectionHeader } from '../components/CyberBackground'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import { GAMES } from '../data/content'

export function GamesPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        label={t('games.label')}
        title={t('gamesPage.hero')}
        description={t('gamesPage.description')}
      />

      <section className="section-padding pt-0">
        <div className="container-main">
          <ScrollReveal>
            <SectionHeader label="Godot" title={t('gamesPage.gridTitle')} />
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GAMES.map((game, i) => (
              <ProjectCard key={game.id} project={game} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
