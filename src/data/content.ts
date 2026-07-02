import type { ModelItem, ProjectItem, WorkflowStep } from '../types'

export const GAMES: ProjectItem[] = [
  {
    id: 'shattered-paradise',
    titleKey: 'games.shatteredParadise.title',
    subtitleKey: 'games.shatteredParadise.subtitle',
    descriptionKey: 'games.shatteredParadise.description',
    href: 'https://shattered-paradise.com/',
    status: 'wip',
    media: {
      type: 'image',
      src: 'https://shattered-paradise.com/static/main/media/brand/logo/logo_2.webp',
      alt: 'Shattered Paradise',
    },
    tags: ['roguelike', 'godot', 'studio'],
    featured: true,
    size: 'lg',
  },
  {
    id: 'crimson-yule',
    titleKey: 'games.crimsonYule.title',
    subtitleKey: 'games.crimsonYule.subtitle',
    descriptionKey: 'games.crimsonYule.description',
    href: 'https://www.youtube.com/watch?v=E8OEPxf1ojg',
    status: 'wip',
    media: { type: 'youtube', src: 'E8OEPxf1ojg', alt: 'The Crimson Yule - Occultism Simulator' },
    tags: ['simulator', 'godot'],
    featured: true,
    size: 'lg',
  },
  {
    id: 'rdk',
    titleKey: 'games.rdk.title',
    subtitleKey: 'games.rdk.subtitle',
    descriptionKey: 'games.rdk.description',
    links: [
      { labelKey: 'games.rdk.patreon', href: 'https://www.patreon.com/rdk_game' },
      {
        labelKey: 'games.rdk.reddit',
        href: 'https://www.reddit.com/r/godot/comments/1rvnxux/i_made_this_intro_cutscene_entirely_using_godots/',
      },
    ],
    status: 'wip',
    href: 'https://www.youtube.com/watch?v=HX1erKPwKhc',
    media: { type: 'youtube', src: 'HX1erKPwKhc', alt: 'Rapid Deployment Killzone gameplay' },
    tags: ['3d', 'action', 'godot'],
    featured: true,
    size: 'lg',
  },
  {
    id: 'talora',
    titleKey: 'games.talora.title',
    subtitleKey: 'games.talora.subtitle',
    descriptionKey: 'games.talora.description',
    status: 'wip',
    media: { type: 'placeholder' },
    tags: ['godot', 'desk'],
    featured: true,
    size: 'md',
  },
  {
    id: 'andromeda',
    titleKey: 'games.andromeda.title',
    subtitleKey: 'games.andromeda.subtitle',
    descriptionKey: 'games.andromeda.description',
    href: 'https://arthurfam.itch.io/take-it-to-andromeda',
    status: 'released',
    media: { type: 'image', src: 'images/print02.png', alt: 'Take it to Andromeda' },
    tags: ['nes', 'jam'],
    featured: true,
    size: 'md',
  },
  {
    id: 'tiny4',
    titleKey: 'games.tiny4.title',
    subtitleKey: 'games.tiny4.subtitle',
    descriptionKey: 'games.tiny4.description',
    href: 'https://gx.games/pt-br/games/stwow8/tiny-4-bullets/',
    status: 'online',
    media: { type: 'image', src: 'images/CAPA tiny 4 bullets.png', alt: 'Tiny 4 Bullets' },
    tags: ['multiplayer', '4p'],
    featured: true,
    size: 'md',
  },
  {
    id: 'panana',
    titleKey: 'games.panana.title',
    subtitleKey: 'games.panana.subtitle',
    descriptionKey: 'games.panana.description',
    status: 'wip',
    media: { type: 'image', src: 'images/Panana&Gar.png', alt: 'Panana & Gar' },
    tags: ['adventure'],
    size: 'md',
  },
  {
    id: 'chip',
    titleKey: 'games.chip.title',
    subtitleKey: 'games.chip.subtitle',
    descriptionKey: 'games.chip.description',
    status: 'released',
    media: { type: 'gif', src: 'images/MOSHED-2019-8-8-1-26-30.gif', alt: 'Chip Keyboard' },
    tags: ['rhythm'],
    size: 'sm',
  },
]

export const MODELS: ModelItem[] = [
  {
    id: 'banana-duck',
    titleKey: 'models.bananaDuck.title',
    statsKey: 'models.bananaDuck.stats',
    media: { type: 'gif', src: 'images/Panana.gif', alt: 'Banana Duck' },
    palette: ['#ffffff', '#ffc400', '#ffee00', '#42250d', '#dafa4a'],
  },
  {
    id: 'insect',
    titleKey: 'models.insect.title',
    statsKey: 'models.insect.stats',
    media: { type: 'gif', src: 'images/GarGIF.gif', alt: 'Insect Base' },
    palette: ['#b31a0a', '#2b243d', '#ffffff', '#5291c2'],
  },
  {
    id: 'model-slot-1',
    titleKey: 'models.future1.title',
    statsKey: 'models.future1.stats',
    media: { type: 'placeholder' },
    palette: [],
  },
]

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { id: 'planning', titleKey: 'workflow.planning.title', descriptionKey: 'workflow.planning.description' },
  { id: 'modeling', titleKey: 'workflow.modeling.title', descriptionKey: 'workflow.modeling.description' },
  { id: 'texturing', titleKey: 'workflow.texturing.title', descriptionKey: 'workflow.texturing.description' },
  { id: 'optimization', titleKey: 'workflow.optimization.title', descriptionKey: 'workflow.optimization.description' },
  { id: 'export', titleKey: 'workflow.export.title', descriptionKey: 'workflow.export.description' },
]

export const HOME_GAME_PREVIEWS = GAMES.filter((g) => g.featured)

export const CAROUSEL_ITEMS = [
  { src: 'images/RDKgame.png', alt: 'Rapid Deployment Killzone' },
  { src: 'images/Panana2D.png', alt: 'Panana 2D' },
  { src: 'images/BeakAndPulp.jpeg', alt: 'Beak and Pulp' },
  { src: 'images/tiny4bullets.png', alt: 'Tiny 4 Bullets' },
]
