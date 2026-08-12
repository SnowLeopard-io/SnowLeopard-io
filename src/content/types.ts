export type Link = { label: string; href: string; handle: string }

export type Role = 'Owner' | 'Contributor'

export type Fact = { icon: string; label: string; value: string }

export type StackItem = { lang: string; note: string }

export type ExperienceState = 'active' | 'contribution' | 'upcoming'

export type ExperienceEntry = {
  period: string
  title: string
  body: string
  tags: string[]
  state: ExperienceState
}

export type Project = {
  name: string
  repo: string
  url: string
  tagline: string
  body: string
  stack: string[]
  role: Role
}

export type Note = { index: string; subject: string; body: string }

export interface SiteContent {
  handle: string
  name: string
  wordmark: string
  eyebrow: string
  tagline: string
  roles: string[]
  banner: string
  email: string
  links: Link[]
  statusLabel: string
  buildingName: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface AboutContent {
  eyebrow: string
  heading: string
  lead: string
  facts: Fact[]
  stackLabel: string
  stack: StackItem[]
}

export interface ProjectsContent {
  eyebrow: string
  heading: string
  lead: string
  projects: Project[]
}

export interface ExperienceContent {
  eyebrow: string
  heading: string
  lead: string
  entries: ExperienceEntry[]
}

export interface NotesContent {
  eyebrow: string
  heading: string
  lead: string
  notes: Note[]
}

export interface ConnectContent {
  eyebrow: string
  title: string
  lead: string
}

export interface UIContent {
  nav: { about: string; projects: string; experience: string; notes: string }
  langToggleLabel: string
  langToggleToZh: string
  langToggleToEn: string
  roleOwner: string
  roleContributor: string
}

export interface Content {
  ui: UIContent
  site: SiteContent
  about: AboutContent
  projects: ProjectsContent
  experience: ExperienceContent
  notes: NotesContent
  connect: ConnectContent
}
