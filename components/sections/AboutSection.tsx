import { Cpu, Layers3, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { siteConfig } from '@/config/site';

const creativePillars = [
  {
    id: 'pillar-engineering',
    title: 'Web Engineering & AI Workflows',
    description:
      'Building clean web experiences paired with practical AI tools that streamline ideation, prototyping, and production.',
    icon: Cpu,
    accentClass: 'text-[#22D3EE] border-[#22D3EE]/25 bg-[#22D3EE]/10',
  },
  {
    id: 'pillar-visual',
    title: 'Graphic Design & Adobe Photoshop',
    description:
      'Designing cohesive brand visuals, layered compositions, retouching, and digital assets crafted with precision.',
    icon: Layers3,
    accentClass: 'text-[#A855F7] border-[#A855F7]/25 bg-[#A855F7]/10',
  },
  {
    id: 'pillar-media',
    title: 'Video, YouTube & Social Analysis',
    description:
      'Combining video editing, structured YouTube automation systems, and social media account analysis for cohesive content delivery.',
    icon: TrendingUp,
    accentClass: 'text-[#EC4899] border-[#EC4899]/25 bg-[#EC4899]/10',
  },
];

export function AboutSection() {
  return (
    <Section id="about" divider>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeader
                index="01"
                kicker="About"
                title="A Little About Me."
                className="mb-6"
              />

              <div className="space-y-4 text-base leading-relaxed text-[#B4BCD0]">
                <p>
                  I&apos;m{' '}
                  <span className="font-medium text-white">
                    {siteConfig.name}
                  </span>
                  , a multidisciplinary creative professional driven by the
                  intersection of modern technology and visual storytelling.
                </p>
                <p>
                  Rather than working inside a single silo, I connect{' '}
                  <span className="text-white">web development</span> with{' '}
                  <span className="text-white">
                    graphic design and Adobe Photoshop
                  </span>{' '}
                  to build digital work that is both technically structured and
                  visually expressive.
                </p>
                <p>
                  Alongside design and code, I explore{' '}
                  <span className="text-white">AI-powered creative workflows</span>
                  , edit engaging video content, organize{' '}
                  <span className="text-white">YouTube automation</span>{' '}
                  pipelines, and conduct{' '}
                  <span className="text-white">
                    social media account analysis
                  </span>{' '}
                  to help digital creators and brands present their ideas with
                  clarity.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Supporting Visual Pillars */}
          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <div className="surface-card rounded-2xl p-6 sm:p-8 shadow-[0_0_36px_rgba(168,85,247,0.06)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <h3 className="font-display text-base font-semibold text-white">
                    Creative Intersection
                  </h3>
                  <span className="font-mono text-xs text-[#7E88A1]">
                    3 Core Pillars
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {creativePillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.id}
                        className="flex items-start gap-4 border-b border-white/[0.06] pb-5 last:border-b-0 last:pb-0"
                      >
                        <div
                          className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${pillar.accentClass}`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-display text-base font-semibold text-white">
                            {pillar.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-[#B4BCD0]">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
