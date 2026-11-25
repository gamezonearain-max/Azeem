import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { Section, SectionHeader } from '@/components/ui/Section';
import { SkillIcon } from '@/components/ui/SkillIcon';
import { siteConfig } from '@/config/site';
import type { AccentTone } from '@/types/portfolio';

const accentBorderHoverMap: Record<AccentTone, string> = {
  cyan: 'hover:border-[#22D3EE]/45 hover:shadow-[0_0_28px_rgba(34,211,238,0.10)]',
  purple:
    'hover:border-[#A855F7]/45 hover:shadow-[0_0_28px_rgba(168,85,247,0.10)]',
  magenta:
    'hover:border-[#EC4899]/45 hover:shadow-[0_0_28px_rgba(236,72,153,0.10)]',
};

const accentIconColorMap: Record<AccentTone, string> = {
  cyan: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/25',
  purple: 'text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/25',
  magenta: 'text-[#EC4899] bg-[#EC4899]/10 border-[#EC4899]/25',
};

export function FoundationShowcase() {
  return (
    <main>
      {/* Hero Foundation Split */}
      <Section id="overview" spacing="hero" className="overflow-hidden">
        {/* Ambient Neon Backdrop Halo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14),rgba(168,85,247,0.08)_45%,transparent_72%)] blur-3xl"
        />

        <Container className="relative">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Typographic Anchor */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <Reveal immediate>
                <p className="mb-4 text-sm font-medium text-[#22D3EE]">
                  {siteConfig.title}
                  <span aria-hidden="true" className="mx-2 text-[#7E88A1]">
                    ·
                  </span>
                  <span className="text-[#B4BCD0]">Phase 1 Foundation</span>
                </p>

                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  {siteConfig.name}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#B4BCD0] sm:text-lg">
                  Building cohesive digital experiences across full-stack web
                  engineering, visual design, motion storytelling, AI-assisted
                  production, and social growth analytics.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <ButtonLink
                    href={`mailto:${siteConfig.email}`}
                    variant="primary"
                    size="lg"
                    leftIcon={<Mail className="h-4 w-4" />}
                    rightIcon={<ArrowUpRight className="h-4 w-4" />}
                  >
                    Start a Conversation
                  </ButtonLink>

                  <CopyEmailButton email={siteConfig.email} />

                  <ButtonLink
                    href="#capabilities"
                    variant="ghost"
                    size="md"
                    rightIcon={<ArrowDownRight className="h-4 w-4" />}
                  >
                    Explore Capabilities
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Right Architectural Identity Card */}
            <div className="lg:col-span-5">
              <Reveal immediate delay={0.08} className="h-full">
                <div className="surface-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <span className="text-xs font-medium text-[#B4BCD0]">
                        Creative Profile
                      </span>
                      <span className="font-mono text-xs tabular-nums text-[#22D3EE]">
                        07 Disciplines
                      </span>
                    </div>

                    <dl className="mt-6 space-y-5">
                      <div>
                        <dt className="text-xs font-medium text-[#7E88A1]">
                          Principal
                        </dt>
                        <dd className="mt-1 font-display text-lg font-semibold text-white">
                          {siteConfig.name}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs font-medium text-[#7E88A1]">
                          Role Focus
                        </dt>
                        <dd className="mt-1 text-sm text-[#B4BCD0]">
                          {siteConfig.title}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs font-medium text-[#7E88A1]">
                          Direct Contact
                        </dt>
                        <dd className="mt-1 font-mono text-sm text-[#22D3EE]">
                          {siteConfig.email}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs font-medium text-[#7E88A1]">
                          Core Stack
                        </dt>
                        <dd className="mt-1 text-sm text-[#B4BCD0]">
                          Next.js App Router · TypeScript · Tailwind CSS · Motion
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-8 border-t border-white/[0.08] pt-4">
                    <div className="flex items-center justify-between text-xs text-[#7E88A1]">
                      <span>Theme Palette</span>
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full bg-[#22D3EE]"
                          title="Neon Cyan"
                        />
                        <span
                          className="h-2.5 w-2.5 rounded-full bg-[#A855F7]"
                          title="Neon Purple"
                        />
                        <span
                          className="h-2.5 w-2.5 rounded-full bg-[#EC4899]"
                          title="Neon Magenta"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 01: Core Creative Disciplines */}
      <Section id="capabilities" divider>
        <Container>
          <Reveal>
            <SectionHeader
              index="01"
              kicker="Capabilities Matrix"
              title="Seven integrated creative & technical disciplines"
              description="Each capability operates independently or as part of a unified digital production workflow—from code and visual design to video packaging and audience diagnostics."
            />
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.skills.map((skill) => (
              <StaggerItem key={skill.id}>
                <article
                  className={`surface-card group flex h-full flex-col justify-between rounded-2xl p-6 transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 ${accentBorderHoverMap[skill.accent]}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${accentIconColorMap[skill.accent]}`}
                      >
                        <SkillIcon name={skill.icon} className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs tabular-nums text-[#7E88A1]">
                        {skill.index}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                      {skill.title}
                    </h3>

                    <p className="mt-1.5 text-xs font-medium text-[#7E88A1]">
                      {skill.discipline}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#B4BCD0]">
                      {skill.summary}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Section 02: Design System & Reusable UI Foundation */}
      <Section id="design-system" divider>
        <Container>
          <Reveal>
            <SectionHeader
              index="02"
              kicker="Design System"
              title="Neon Dark tokens, typography scale, and button primitives"
              description="Global CSS custom properties and Tailwind v4 theme variables enforce consistent dark-surface contrast, disciplined neon accents, and accessible interaction states."
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Color Palette Swatches */}
            <Reveal className="lg:col-span-6">
              <div className="surface-card h-full rounded-2xl p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-white">
                  Color Tokens
                </h3>
                <p className="mt-1 text-sm text-[#7E88A1]">
                  60% canvas · 30% structural surface · 10% neon accent focus
                </p>

                <div className="mt-6 space-y-4">
                  {siteConfig.colorTokens.map((token) => (
                    <div
                      key={token.variable}
                      className="flex items-center justify-between gap-4 border-b border-white/[0.06] pb-3.5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`h-10 w-10 shrink-0 rounded-lg ${token.swatchClass}`}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {token.name}
                          </p>
                          <p className="text-xs text-[#7E88A1]">{token.role}</p>
                        </div>
                      </div>
                      <div className="text-right font-mono text-xs tabular-nums">
                        <p className="text-[#B4BCD0]">{token.hex}</p>
                        <p className="text-[#7E88A1]">{token.variable}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Typography & Button Primitives */}
            <Reveal delay={0.06} className="lg:col-span-6">
              <div className="flex h-full flex-col gap-6">
                <div className="surface-card rounded-2xl p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-white">
                    Typography Hierarchy
                  </h3>
                  <div className="mt-5 space-y-5">
                    {siteConfig.typographySpecimens.map((specimen) => (
                      <div
                        key={specimen.variable}
                        className="border-b border-white/[0.06] pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="mb-1.5 flex items-center justify-between text-xs text-[#7E88A1]">
                          <span>{specimen.role}</span>
                          <span className="font-mono">
                            {specimen.fontName} · {specimen.variable}
                          </span>
                        </div>
                        <p className={specimen.className}>{specimen.sample}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card rounded-2xl p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-white">
                    Interactive Button Variants
                  </h3>
                  <p className="mt-1 text-sm text-[#7E88A1]">
                    Accessible focus rings, single-line labels, and neon accent
                    presets
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <ButtonLink href="#overview" variant="primary" accent="cyan">
                      Primary Cyan
                    </ButtonLink>
                    <ButtonLink
                      href="#capabilities"
                      variant="primary"
                      accent="purple"
                    >
                      Primary Purple
                    </ButtonLink>
                    <ButtonLink
                      href="#architecture"
                      variant="primary"
                      accent="magenta"
                    >
                      Primary Magenta
                    </ButtonLink>
                    <ButtonLink href="#design-system" variant="secondary">
                      Secondary Surface
                    </ButtonLink>
                    <ButtonLink href="#overview" variant="outline">
                      Back to Top
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Section 03: Scalable Project Architecture */}
      <Section id="architecture" divider>
        <Container>
          <Reveal>
            <SectionHeader
              index="03"
              kicker="Project Architecture"
              title="Modular foundation prepared for Phase 2 expansion"
              description="Clean separation of types, configuration, motion utilities, UI primitives, and layout shells ensures maintainability as interactive portfolio modules are introduced."
            />
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.architectureModules.map((mod) => (
              <StaggerItem key={mod.index}>
                <div className="surface-card flex h-full flex-col justify-between rounded-2xl p-6">
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono tabular-nums text-[#22D3EE]">
                        {mod.index}
                      </span>
                      <span className="font-mono text-[#7E88A1]">
                        {mod.path}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-white">
                      {mod.layer}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#B4BCD0]">
                      {mod.purpose}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>
    </main>
  );
}
