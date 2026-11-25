import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { SkillIcon } from '@/components/ui/SkillIcon';
import { siteConfig } from '@/config/site';
import type { AccentTone } from '@/types/portfolio';

const cardHoverAccent: Record<AccentTone, string> = {
  cyan: 'hover:border-[#22D3EE]/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]',
  purple:
    'hover:border-[#A855F7]/50 hover:shadow-[0_0_28px_rgba(168,85,247,0.12)]',
  magenta:
    'hover:border-[#EC4899]/50 hover:shadow-[0_0_28px_rgba(236,72,153,0.12)]',
};

const iconAccent: Record<AccentTone, string> = {
  cyan: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/25',
  purple: 'text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/25',
  magenta: 'text-[#EC4899] bg-[#EC4899]/10 border-[#EC4899]/25',
};

export function SkillsSection() {
  return (
    <Section id="skills" divider>
      <Container>
        <Reveal>
          <SectionHeader
            index="02"
            kicker="Skills"
            title="My Creative Toolkit."
            description="Seven core capabilities spanning web engineering, visual craftsmanship, AI workflows, video post-production, and digital channel diagnostics."
          />
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.skills.map((skill) => (
            <StaggerItem key={skill.id} className="h-full">
              <article
                className={`surface-card flex h-full flex-col justify-between rounded-2xl p-6 transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${cardHoverAccent[skill.accent]}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${iconAccent[skill.accent]}`}
                    >
                      <SkillIcon
                        name={skill.icon}
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
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
  );
}
