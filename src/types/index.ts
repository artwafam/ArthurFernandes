export type MediaType = 'image' | 'gif' | 'video' | 'youtube' | 'placeholder'

export interface MediaAsset {
  type: MediaType
  src?: string
  alt?: string
  poster?: string
}

export interface ProjectLink {
  labelKey: string
  href: string
}

export interface ProjectItem {
  id: string
  titleKey: string
  subtitleKey?: string
  descriptionKey: string
  href?: string
  links?: ProjectLink[]
  secondaryHref?: string
  secondaryLabelKey?: string
  status?: 'released' | 'wip' | 'online' | 'workedOn'
  media: MediaAsset
  tags?: string[]
  featured?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export interface ModelItem {
  id: string
  titleKey: string
  statsKey: string
  media: MediaAsset
  palette: string[]
}

export interface WorkflowStep {
  id: string
  titleKey: string
  descriptionKey: string
}

export interface GalleryItem {
  id: string
  media: MediaAsset
}

export type Locale = 'en' | 'pt' | 'ja' | 'sv'

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: 'images/reino-unido.png' },
  { code: 'pt', label: 'PT', flag: 'images/brasil.png' },
  { code: 'ja', label: 'JA', flag: 'images/japan-flag-icon-32.png' },
  { code: 'sv', label: 'SV', flag: 'images/suecia.png' },
]

export const SOCIAL_LINKS = {
  email: 'arthurfernandes.developer@gmail.com',
  discord: '.artwa.fer',
  itch: 'https://arthurfam.itch.io',
  github: 'https://github.com/artwafam',
  patreon: 'https://www.patreon.com/rdk_game',
}

export const GITHUB_USERNAME = 'artwafam'

export const TECH_STACK = [
  { name: 'Godot', icon: 'images/godot.png', href: 'https://godotengine.org/', category: 'game' },
  { name: 'GDScript', icon: 'images/godot.png', href: 'https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/', category: 'code' },
  { name: 'GameMaker', icon: 'images/gamemaker.png', href: 'https://gamemaker.io/', category: 'game' },
  { name: 'Crocotile3D', icon: 'images/crocotile.png', href: 'https://crocotile3d.com/', category: '3d' },
  { name: 'HTML5', icon: 'images/html5.png', href: 'https://en.wikipedia.org/wiki/HTML5', category: 'web' },
  { name: 'CSS', icon: 'images/css-3.svg', href: 'https://en.wikipedia.org/wiki/CSS', category: 'web' },
  { name: 'TypeScript', icon: 'images/html5.png', href: 'https://www.typescriptlang.org/', category: 'code' },
  { name: 'React', icon: 'images/html5.png', href: 'https://react.dev/', category: 'web' },
]

export const LANGUAGE_COLORS: Record<string, string> = {
  HTML: '#e34c26',
  CSS: '#563d7c',
  GDScript: '#478cbf',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  'C#': '#178600',
  Shell: '#89e051',
}
