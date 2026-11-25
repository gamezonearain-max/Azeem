export type AccentTone = 'cyan' | 'purple' | 'magenta';

export type SkillIconName =
  | 'code'
  | 'palette'
  | 'layers'
  | 'sparkles'
  | 'film'
  | 'youtube'
  | 'bar-chart';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  id: string;
  index: string;
  title: string;
  discipline: string;
  summary: string;
  icon: SkillIconName;
  accent: AccentTone;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  summary: string;
  icon: SkillIconName;
  accent: AccentTone;
  inquirySubject: string;
}

export type ProjectCategory =
  | 'Web Development'
  | 'Graphic Design'
  | 'Photoshop'
  | 'Video Editing'
  | 'AI Projects'
  | 'Other';

export type ProjectFilterCategory = 'All' | ProjectCategory;

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  technologies: string[];
  thumbnailImage?: ProjectImage;
  galleryImages?: ProjectImage[];
  liveDemoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  challengesAndSolutions?: ProjectChallengeSolution[];
  accent?: AccentTone;
}

export type TimelineKind =
  | 'experience'
  | 'learning'
  | 'certification'
  | 'project';

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  kind: TimelineKind;
  summary: string;
}

export interface SocialChannel {
  id: string;
  platform: string;
  handle?: string;
  href?: string;
  configured: boolean;
}

export interface WhatsAppConfig {
  phoneNumber: string;
  url: string;
  defaultMessage: string;
  ariaLabel: string;
}

export interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  role: string;
  swatchClass: string;
}

export interface TypographySpecimen {
  role: string;
  fontName: string;
  variable: string;
  sample: string;
  className: string;
}

export interface ArchitectureModule {
  index: string;
  layer: string;
  path: string;
  purpose: string;
}

export interface SiteConfig {
  brandMark: string;
  name: string;
  initials: string;
  title: string;
  email: string;
  whatsapp: WhatsAppConfig;
  location?: string;
  description: string;
  profileImageUrl?: string;
  profileImageAlt?: string;
  navItems: NavItem[];
  skills: SkillItem[];
  services: ServiceItem[];
  projects: ProjectItem[];
  timelineEntries: TimelineEntry[];
  socialChannels: SocialChannel[];
  colorTokens: ColorToken[];
  typographySpecimens: TypographySpecimen[];
  architectureModules: ArchitectureModule[];
}
