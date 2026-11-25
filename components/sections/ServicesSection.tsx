import { ArrowUpRight } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { SkillIcon } from '@/components/ui/SkillIcon';
import { siteConfig } from '@/config/site';
import type { AccentTone } from '@/types/portfolio';

const serviceHoverAccent: Record<AccentTone, string> = {
  cyan: 'hover:border-[#22D3EE]/45 hover:shadow-[0_0_28px_rgba(34,211,238,0.10)]',
  purple:
    'hover:border-[#A855F7]/45 hover:shadow-[0_0_28px_rgba(168,85,247,0.10)]',
  magenta:
    'hover:border-[#EC4899]/45 hover:shadow-[0_0_28px_rgba(236,72,153,0.10)]',
};

const serviceIconColor: Record<AccentTone, string> = {
  cyan: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/25',
  purple: 'text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/25',
  magenta: 'text-[#EC4899] bg-[#EC4899]/10 border-[#EC4899]/25',
};

const serviceLinkColor: Record<AccentTone, string> = {
  cyan: 'text-[#22D3EE] hover:text-[#67E8F9]',
  purple: 'text-[#C084FC] hover:text-[#D8B4FE]',
  magenta: 'text-[#F472B6] hover:text-[#F9A8D4]',
};

export function ServicesSection() {
  return (
    <Section id="services" divider>
      <Container>
        <Reveal>
          <SectionHeader
            index="03"
            kicker="Services"
            title="How I Can Help You."
            description="Practical creative and technical services tailored around each discipline—built with clear communication and direct collaboration."
          />
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => {
            const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(service.inquirySubject)}`;

            return (
              <StaggerItem key={service.id} className="h-full">
                <article
                  className={`surface-card group flex h-full flex-col justify-between rounded-2xl p-6 transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${serviceHoverAccent[service.accent]}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${serviceIconColor[service.accent]}`}
                      >
                        <SkillIcon
                          name={service.icon}
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-mono text-xs tabular-nums text-[#7E88A1]">
                        {service.index}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#B4BCD0]">
                      {service.summary}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <a
                      href={mailtoHref}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm ${serviceLinkColor[service.accent]}`}
                    >
                      <span>Inquire via Email</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
