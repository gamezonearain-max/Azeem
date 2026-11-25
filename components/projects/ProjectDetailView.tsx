import { ArrowLeft, ArrowUpRight, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import type { ProjectItem } from '@/types/portfolio';

interface ProjectDetailViewProps {
  project: ProjectItem;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Section spacing="hero">
        <Container>
          <Reveal immediate>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#B4BCD0] transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Projects</span>
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 text-sm font-medium">
              <span className="text-[#22D3EE]">{project.category}</span>
              {project.featured && (
                <>
                  <span aria-hidden="true" className="text-[#7E88A1]">
                    ·
                  </span>
                  <span className="text-[#C084FC]">Featured Project</span>
                </>
              )}
            </div>

            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#B4BCD0] sm:text-lg">
              {project.shortDescription}
            </p>

            {(project.liveDemoUrl || project.sourceUrl) && (
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-[#06070A] shadow-[0_0_24px_rgba(34,211,238,0.28)] transition-colors hover:bg-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#22D3EE]/60 hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                  >
                    <span>Source Code</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </Reveal>

          {/* Primary Thumbnail */}
          <Reveal immediate delay={0.08} className="mt-10">
            <div className="surface-card relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              {project.thumbnailImage ? (
                <Image
                  src={project.thumbnailImage.url}
                  alt={project.thumbnailImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]">
                  <Layers
                    className="h-10 w-10 text-[#7E88A1]"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Project Overview & Technologies Used */}
      <Section divider>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <div className="surface-card rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-white">
                  Project Overview
                </h2>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-[#B4BCD0]">
                  {project.fullDescription}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-4">
              <div className="surface-card rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-white">
                  Technologies Used
                </h2>
                {project.technologies.length > 0 ? (
                  <ul className="mt-4 space-y-2.5 text-sm text-[#B4BCD0]">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2.5 border-b border-white/[0.06] pb-2.5 last:border-b-0 last:pb-0"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]"
                        />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-[#7E88A1]">
                    Technologies will be listed when project details are added.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Challenges & Solutions */}
      {project.challengesAndSolutions &&
        project.challengesAndSolutions.length > 0 && (
          <Section divider>
            <Container>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Challenges &amp; Solutions
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div
                      key={`${project.id}-cs-${idx}`}
                      className="surface-card rounded-2xl p-6"
                    >
                      <p className="font-mono text-xs text-[#EC4899]">
                        Challenge {String(idx + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#F8FAFC]">
                        {item.challenge}
                      </p>
                      <div className="mt-4 border-t border-white/[0.08] pt-4">
                        <p className="font-mono text-xs text-[#22D3EE]">
                          Solution
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-[#B4BCD0]">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </Container>
          </Section>
        )}

      {/* Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <Section divider>
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Project Gallery
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {project.galleryImages.map((image) => (
                  <figure
                    key={image.url}
                    className="surface-card overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[16/10] w-full bg-[#0D111A]">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="border-t border-white/[0.06] px-5 py-3 text-xs text-[#B4BCD0]">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* Bottom Back Action */}
      <Section spacing="compact" divider>
        <Container className="flex justify-center">
          <ButtonLink
            href="/#projects"
            variant="outline"
            size="md"
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Return to Portfolio
          </ButtonLink>
        </Container>
      </Section>
    </main>
  );
}
