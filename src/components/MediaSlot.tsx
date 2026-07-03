import { useTranslation } from 'react-i18next'
import type { MediaAsset } from '../types'
import { asset } from '../utils/asset'

interface MediaSlotProps {
  media: MediaAsset
  className?: string
  aspect?: string
}

export function MediaSlot({ media, className = '', aspect = 'aspect-video' }: MediaSlotProps) {
  const { t } = useTranslation()

  if (media.type === 'placeholder' || !media.src) {
    return (
      <div
        className={`${aspect} ${className} flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-accent/20 bg-void-light/50`}
      >
        <svg className="h-8 w-8 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
        <span className="font-mono text-xs text-text-muted">{t('media.addSoon')}</span>
      </div>
    )
  }

  if (media.type === 'youtube') {
    return (
      <div className={`${aspect} ${className} relative w-full overflow-hidden rounded-lg bg-void`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${media.src}`}
          title={media.alt ?? 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    )
  }

  if (media.type === 'video') {
    return (
      <video
        className={`${aspect} ${className} w-full rounded-lg object-cover`}
        src={asset(media.src)}
        poster={media.poster ? asset(media.poster) : undefined}
        autoPlay
        loop
        muted
        playsInline
        aria-label={media.alt}
      />
    )
  }

  const isSvg = media.src.endsWith('.svg')

  return (
    <img
      src={asset(media.src)}
      alt={media.alt ?? ''}
      className={`${aspect} ${className} w-full rounded-lg ${isSvg ? 'bg-void object-contain p-6' : 'object-cover'}`}
      loading="lazy"
    />
  )
}
