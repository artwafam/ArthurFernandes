import { ASCII_LOGO } from '../data/asciiLogo'

type AsciiLogoVariant = 'watermark' | 'navbar'

interface AsciiLogoProps {
  variant?: AsciiLogoVariant
  className?: string
}

export function AsciiLogo({ variant = 'watermark', className = '' }: AsciiLogoProps) {
  if (variant === 'navbar') {
    return (
      <pre
        className={`hidden font-mono text-[2px] leading-[1] text-accent/80 sm:block ${className}`}
        aria-hidden
      >
        {ASCII_LOGO.split('\n').slice(8, 22).join('\n')}
      </pre>
    )
  }

  return (
    <pre
      className={`pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-mono text-[2.5px] leading-[1.05] text-accent opacity-[0.14] sm:text-[3px] ${className}`}
      aria-hidden
    >
      {ASCII_LOGO}
    </pre>
  )
}
