import { Award, BookOpen, Briefcase, Compass } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { siteConfig } from '@/config/site';
import type { TimelineKind } from '@/types/portfolio';

const kindLabelMap: Record<TimelineKind, string> = {
  experience: 'Experience',
  learning: 'Learning Milestone',
  certification: 'Certification',
  project: 'Major Project',
};

const plannedTracks = [
  {
    id: 'track-experience',
    title: 'Professional Experience',
    description: 'Client engagements, creative roles, and collaborative productions.',
    icon: Briefcase,
    accentClass: 'text-[#22D3EE] border-[#22D3EE]/25 bg-[#22D3EE]/10',
  },
  {
    id: 'track-learning',
    title: 'Learning Milestones',
    description: 'Ongoing mastery across engineering, design, AI tools, and media.',
    icon: BookOpen,
    accentClass: 'text-[#A855F7] border-[#A855F7]/25 bg-[#A855F7]/10',
  },
  {
    id: 'track-certifications',
    title: 'Completed Certifications',
    description: 'Verified credentials and formal technical or creative training.',
    icon: Award,
    accentClass: 'text-[#EC4899] border-[#EC4899]/25 bg-[#EC4899]/10',
  },
  {
    id: 'track-projects',
    title: 'Major Projects',
    description: 'Notable launches across web platforms, design systems, and channels.',
    icon: Compass,
    accentClass: 'text-[#22D3EE] border-[#22D3EE]/25 bg-[#22D3EE]/10',
  },
];

export function ExperienceSection() {
  const hasEntries = siteConfig.timelineEntries.length > 0;

  return (
    <Section id="experience" divider>
      <Container>
        <Reveal>
          <SectionHeader
            index="05"
            kicker="Timeline"
            title="My Creative Journey."
            description="A structured timeline built to document professional roles, learning milestones, certifications, and major project launches as they are added."
          />
        </Reveal>

        {hasEntries ? (
          <div className="relative pl-6 sm:pl-8 before:absolute before:top-2 before:bottom-2 before:left-2 sm:before:left-2.5 before:w-px before:bg-white/15">
            <StaggerGroup className="space-y-6">
              {siteConfig.timelineEntries.map((entry) => (
                <StaggerItem key={entry.id}>
                  <article className="surface-card relative rounded-2xl p-6 transition-colors hover:border-[#22D3EE]/40">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[22px] sm:-left-[28px] top-7 h-3 w-3 rounded-full border-2 border-[#22D3EE] bg-[#06070A]"
                    />

                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#7E88A1]">
                      <span className="font-mono tabular-nums text-[#22D3EE]">
                        {entry.period}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{kindLabelMap[entry.kind]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{entry.organization}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#B4BCD0]">
                      {entry.summary}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        ) : (
          <Reveal>
            <div className="surface-card rounded-2xl p-6 sm:p-8">
              <div className="border-b border-white/[0.08] pb-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  Timeline entries will appear here
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#B4BCD0]">
                  No historical dates or past roles have been fabricated here.
                  As verified career milestones, certifications, and flagship
                  projects are recorded in configuration, they render
                  chronologically across these four tracks.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {plannedTracks.map((track) => {
                  const Icon = track.icon;
                  return (
                    <div
                      key={track.id}
                      className="rounded-xl border border-white/[0.08] bg-[#06070A]/60 p-5"
                    >
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${track.accentClass}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="mt-4 font-display text-base font-semibold text-white">
                        {track.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#7E88A1]">
                        {track.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
