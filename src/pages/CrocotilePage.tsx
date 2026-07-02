import { useTranslation } from 'react-i18next'
import { PageHero } from '../components/Hero'
import { ScrollReveal, SectionHeader } from '../components/CyberBackground'
import { ModelCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import { MODELS, WORKFLOW_STEPS } from '../data/content'

export function CrocotilePage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        label={t('modeling.label')}
        title={t('crocotilePage.hero')}
        description={t('crocotilePage.description')}
      />

      <section className="section-padding pt-0">
        <div className="container-main">
          <ScrollReveal>
            <SectionHeader label="Crocotile3D" title={t('crocotilePage.gallery')} />
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODELS.map((model, i) => (
              <ModelCard
                key={model.id}
                titleKey={model.titleKey}
                statsKey={model.statsKey}
                media={model.media}
                palette={model.palette}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <SectionHeader label="Pipeline" title={t('crocotilePage.workflow')} />
          </ScrollReveal>
          <div className="space-y-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.05}>
                <div className="glass glass-hover flex flex-col gap-2 rounded-xl p-6 md:flex-row md:items-center md:gap-8">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="min-w-[140px] font-display text-lg font-semibold">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-text-muted">{t(step.descriptionKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <SectionHeader label="$" title={t('crocotilePage.pricing')} />
            <div className="glass max-w-lg rounded-xl p-8">
              <p className="font-mono text-lg text-accent">{t('crocotilePage.pricingText')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
