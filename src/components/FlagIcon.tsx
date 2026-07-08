import { asset } from '../utils/asset'

interface FlagIconProps {
  src: string
  alt?: string
  size?: 'sm' | 'md'
  className?: string
}

const sizeClasses = {
  sm: 'h-4 w-6',
  md: 'h-6 w-8',
}

export function FlagIcon({ src, alt = '', size = 'md', className = '' }: FlagIconProps) {
  return (
    <img
      src={asset(src)}
      alt={alt}
      className={`${sizeClasses[size]} shrink-0 rounded-sm border border-border object-cover object-center ${className}`}
    />
  )
}
