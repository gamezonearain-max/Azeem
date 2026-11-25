import type { SiteConfig } from '@/types/portfolio';

export const siteConfig: SiteConfig = {
  brandMark: 'AZEEM.',
  name: 'Azeem Arslan',
  initials: 'AA',
  title: 'Multi-Skilled Creative Professional',
  email: 'gamezonearain@gmail.com',
  whatsapp: {
    phoneNumber: '+92 328 3267221',
    url: 'https://wa.me/923283267221',
    defaultMessage:
      'Hello Azeem! I visited your portfolio and would like to discuss a project.',
    ariaLabel: 'Contact me on WhatsApp',
  },
  description:
    'Portfolio of Azeem Arslan — Multi-Skilled Creative Professional working across web development, graphic design, Adobe Photoshop, AI tools, video editing, YouTube automation, and social media account analysis.',
  navItems: [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Services', href: '/#services' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ],
  skills: [
    {
      id: 'web-development',
      index: '01',
      title: 'Web Development',
      discipline: 'Frontend · Full-Stack Architecture',
      summary:
        'Responsive, type-safe web applications built with modern component systems, clean routing, and performance-focused interfaces.',
      icon: 'code',
      accent: 'cyan',
    },
    {
      id: 'graphic-design',
      index: '02',
      title: 'Graphic Design',
      discipline: 'Visual Identity · Brand Systems',
      summary:
        'Cohesive visual systems, editorial layouts, thumbnails, and digital brand assets crafted for clarity and immediate impact.',
      icon: 'palette',
      accent: 'purple',
    },
    {
      id: 'adobe-photoshop',
      index: '03',
      title: 'Adobe Photoshop',
      discipline: 'Retouching · Compositing',
      summary:
        'High-precision photo manipulation, color grading, key visuals, and layered PSD production ready for digital campaigns.',
      icon: 'layers',
      accent: 'magenta',
    },
    {
      id: 'ai-tools',
      index: '04',
      title: 'AI Tools',
      discipline: 'Generative Workflows · Automation',
      summary:
        'Practical integration of modern AI tooling to accelerate ideation, asset creation, scripting, and creative production pipelines.',
      icon: 'sparkles',
      accent: 'cyan',
    },
    {
      id: 'video-editing',
      index: '05',
      title: 'Video Editing',
      discipline: 'Pacing · Motion · Storytelling',
      summary:
        'Retention-driven cuts, sound design, rhythm, and visual polish tailored for long-form narratives and short-form social formats.',
      icon: 'film',
      accent: 'purple',
    },
    {
      id: 'youtube-automation',
      index: '06',
      title: 'YouTube Automation',
      discipline: 'Channel Systems · Packaging',
      summary:
        'End-to-end channel workflow structuring spanning topic research, packaging strategy, production coordination, and publishing.',
      icon: 'youtube',
      accent: 'magenta',
    },
    {
      id: 'social-media-analyzer',
      index: '07',
      title: 'Social Media Account Analyzer',
      discipline: 'Audience Diagnostics · Content Audits',
      summary:
        'Structured audits of engagement patterns, content positioning, and profile presentation to inform clearer digital strategy.',
      icon: 'bar-chart',
      accent: 'cyan',
    },
  ],
  services: [
    {
      id: 'service-web-development',
      index: '01',
      title: 'Website Development',
      summary:
        'Custom responsive websites, landing pages, and web applications engineered with clean TypeScript, Next.js, and modern UI systems.',
      icon: 'code',
      accent: 'cyan',
      inquirySubject: 'Website Development Inquiry',
    },
    {
      id: 'service-graphic-design',
      index: '02',
      title: 'Graphic Design',
      summary:
        'Visual brand assets, social media graphics, YouTube thumbnails, and cohesive campaign layouts designed for strong visual clarity.',
      icon: 'palette',
      accent: 'purple',
      inquirySubject: 'Graphic Design Inquiry',
    },
    {
      id: 'service-photoshop-editing',
      index: '03',
      title: 'Photoshop Editing',
      summary:
        'Detailed image retouching, background compositing, color correction, and custom key art crafted in Adobe Photoshop.',
      icon: 'layers',
      accent: 'magenta',
      inquirySubject: 'Photoshop Editing Inquiry',
    },
    {
      id: 'service-ai-creative-solutions',
      index: '04',
      title: 'AI Creative Solutions',
      summary:
        'Structured AI-assisted creative workflows for visual ideation, content drafting, and streamlined digital asset production.',
      icon: 'sparkles',
      accent: 'cyan',
      inquirySubject: 'AI Creative Solutions Inquiry',
    },
    {
      id: 'service-video-editing',
      index: '05',
      title: 'Video Editing',
      summary:
        'Clean storytelling, rhythmic pacing, audio balancing, and visual polish for YouTube videos, reels, and digital promos.',
      icon: 'film',
      accent: 'purple',
      inquirySubject: 'Video Editing Inquiry',
    },
    {
      id: 'service-youtube-automation',
      index: '06',
      title: 'YouTube Automation',
      summary:
        'Organized channel production pipelines covering concept planning, script coordination, thumbnail packaging, and upload structure.',
      icon: 'youtube',
      accent: 'magenta',
      inquirySubject: 'YouTube Automation Inquiry',
    },
    {
      id: 'service-social-media-analysis',
      index: '07',
      title: 'Social Media Account Analysis',
      summary:
        'Comprehensive profile reviews evaluating content structure, visual consistency, posting cadence, and audience engagement signals.',
      icon: 'bar-chart',
      accent: 'cyan',
      inquirySubject: 'Social Media Account Analysis Inquiry',
    },
  ],
  // Centralized project registry: add verified completed projects here when ready.
  projects: [],
  // Centralized timeline registry: add verified experience, learning, or milestone entries here.
  timelineEntries: [],
  // Configured social links only; unconfigured channels are explicitly marked as unconfigured.
  socialChannels: [
    {
      id: 'github',
      platform: 'GitHub',
      configured: false,
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      configured: false,
    },
    {
      id: 'youtube',
      platform: 'YouTube',
      configured: false,
    },
  ],
  colorTokens: [
    {
      name: 'Obsidian Canvas',
      variable: '--bg-canvas',
      hex: '#06070A',
      role: '60% Primary Viewport Background',
      swatchClass: 'bg-[#06070A] border border-white/15',
    },
    {
      name: 'Elevated Surface',
      variable: '--bg-surface',
      hex: '#0D111A',
      role: '30% Structural Containers & Cards',
      swatchClass: 'bg-[#0D111A] border border-white/15',
    },
    {
      name: 'Neon Cyan',
      variable: '--accent-cyan',
      hex: '#22D3EE',
      role: 'Primary Interactive Focus & Actions',
      swatchClass: 'bg-[#22D3EE]',
    },
    {
      name: 'Neon Purple',
      variable: '--accent-purple',
      hex: '#A855F7',
      role: 'Secondary Accent & Ambient Depth',
      swatchClass: 'bg-[#A855F7]',
    },
    {
      name: 'Neon Magenta',
      variable: '--accent-magenta',
      hex: '#EC4899',
      role: 'High-Contrast Highlight & Creative Accent',
      swatchClass: 'bg-[#EC4899]',
    },
  ],
  typographySpecimens: [
    {
      role: 'Display Face',
      fontName: 'Outfit',
      variable: '--font-display',
      sample: 'Crafted Visual Systems & Digital Engineering',
      className:
        'font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white',
    },
    {
      role: 'Body Prose',
      fontName: 'Plus Jakarta Sans',
      variable: '--font-sans',
      sample:
        'Clean typographic hierarchy engineered for comfortable long-form reading across dark surfaces.',
      className: 'font-sans text-base leading-relaxed text-[#B4BCD0]',
    },
    {
      role: 'Tabular & Technical',
      fontName: 'JetBrains Mono',
      variable: '--font-mono',
      sample: '01 · 02 · 03 · 1440px · #22D3EE · tabular-nums',
      className: 'font-mono text-sm tabular-nums text-[#22D3EE]',
    },
  ],
  architectureModules: [
    {
      index: '01',
      layer: 'Design Tokens & Theme',
      path: 'app/globals.css',
      purpose:
        'CSS custom properties, Tailwind v4 @theme bindings, and subtle neon glow utilities.',
    },
    {
      index: '02',
      layer: 'Root Layout & Fonts',
      path: 'app/layout.tsx',
      purpose:
        'Bundled typography optimization, SEO metadata, and global MotionConfig accessibility.',
    },
    {
      index: '03',
      layer: 'Reusable Primitives',
      path: 'components/ui/*',
      purpose:
        'Accessible Button, Container, Section, and interactive clipboard helpers.',
    },
    {
      index: '04',
      layer: 'Motion Foundation',
      path: 'lib/motion.ts · components/motion/*',
      purpose:
        'Compositor-only Framer Motion presets respecting prefers-reduced-motion.',
    },
    {
      index: '05',
      layer: 'Layout Shell',
      path: 'components/layout/*',
      purpose:
        'Responsive Navbar with active section tracking and clean Footer anchored to site configuration.',
    },
    {
      index: '06',
      layer: 'Typed Configuration',
      path: 'types/portfolio.ts · config/site.ts',
      purpose:
        'Single source of truth for Azeem Arslan’s profile, skills, services, projects, and timeline.',
    },
  ],
};

export function getWhatsAppHref(customMessage?: string): string {
  const message = customMessage ?? siteConfig.whatsapp.defaultMessage;
  return `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
}
