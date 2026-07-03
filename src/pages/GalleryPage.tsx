import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { PageHero } from '../components/Hero'
import { ScrollReveal } from '../components/CyberBackground'
import { MediaSlot } from '../components/MediaSlot'
import { ContactSection } from '../components/ContactSection'
import { GALLERY_ITEMS } from '../data/content'

export function GalleryPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        label={t('galleryPage.label')}
        title={t('galleryPage.hero')}
        description={t('galleryPage.description')}
      />

      <section className="section-padding pt-0">
        <div className="container-main">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.04}>
                <motion.article
                  className="glass glass-hover group overflow-hidden rounded-xl"
                  whileHover={{ y: -4 }}
                >
                  <MediaSlot media={item.media} aspect="aspect-video" className="rounded-none" />
                  {item.media.alt && (
                    <p className="p-4 font-mono text-xs text-text-muted transition-colors group-hover:text-accent">
                      {item.media.alt}
                    </p>
                  )}
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
