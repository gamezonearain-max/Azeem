'use client';

import {
  ArrowRight,
  ArrowUpRight,
  FolderGit2,
  FolderPlus,
  Layers,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { StaggerGroup, StaggerItem } from '@/components/motion/Reveal';
import { AddProjectsLaterModal } from '@/components/projects/AddProjectsLaterModal';
import { Button, ButtonLink } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import {
  PROJECT_FILTER_CATEGORIES,
  filterProjectsByCategory,
} from '@/lib/projects';
import { cn } from '@/lib/utils';
import type { AccentTone, ProjectFilterCategory, ProjectItem } from '@/types/portfolio';

const projectHoverMap: Record<AccentTone, string> = {
  cyan: 'hover:border-[#22D3EE]/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]',
  purple:
    'hover:border-[#A855F7]/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]',
  magenta:
    'hover:border-[#EC4899]/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.12)]',
};

interface ProjectsShowcaseClientProps {
  projects: ProjectItem[];
}

export function ProjectsShowcaseClient({
  projects,
}: ProjectsShowcaseClientProps) {
  const [activeCategory, setActiveCategory] =
    useState<ProjectFilterCategory>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasProjects = projects.length > 0;

  const filteredProjects = useMemo(
    () => filterProjectsByCategory(projects, activeCategory),
    [projects, activeCategory]
  );

  return (
    <>
      {/* Category Filter Bar */}
      <div
        role="group"
        aria-label="Project categories"
        className="mb-8 flex flex-wrap items-center gap-2"
      >
        {PROJECT_FILTER_CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isSelected}
              className={cn(
                'min-h-[40px] rounded-lg border px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] cursor-pointer',
                isSelected
                  ? 'border-[#22D3EE]/60 bg-[#22D3EE]/12 text-[#22D3EE] shadow-[0_0_18px_rgba(34,211,238,0.14)]'
                  : 'border-white/10 bg-[#0D111A] text-[#B4BCD0] hover:border-white/25 hover:text-white'
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {hasProjects ? (
        filteredProjects.length > 0 ? (
          <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              const accent = project.accent ?? 'cyan';
              return (
                <StaggerItem key={project.id} className="h-full">
                  <article
                    className={`surface-card group flex h-full flex-col overflow-hidden rounded-2xl transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${projectHoverMap[accent]}`}
                  >
                    <Link
                      href={`/projects/${encodeURIComponent(project.id)}`}
                      className="relative block aspect-[16/10] w-full overflow-hidden border-b border-white/[0.08] bg-[#0D111A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#22D3EE]"
                    >
                      {project.thumbnailImage ? (
                        <Image
                          src={project.thumbnailImage.url}
                          alt={project.thumbnailImage.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]">
                          <Layers
                            className="h-8 w-8 text-[#7E88A1]"
                            aria-hidden="true"
                          />
                        </div>
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <span className="text-[#22D3EE]">
                            {project.category}
                          </span>
                          {project.featured && (
                            <>
                              <span aria-hidden="true" className="text-[#7E88A1]">
                                ·
                              </span>
                              <span className="text-[#C084FC]">Featured</span>
                            </>
                          )}
                        </div>

                        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                          <Link
                            href={`/projects/${encodeURIComponent(project.id)}`}
                            className="transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
                          >
                            {project.title}
                          </Link>
                        </h3>

                        <p className="mt-2.5 text-sm leading-relaxed text-[#B4BCD0]">
                          {project.shortDescription}
                        </p>

                        {project.technologies.length > 0 && (
                          <p className="mt-4 text-xs text-[#7E88A1]">
                            {project.technologies.join(' · ')}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                        <Link
                          href={`/projects/${encodeURIComponent(project.id)}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
                        >
                          <span>Project Details</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>

                        <div className="flex items-center gap-4">
                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-[#22D3EE] transition-colors hover:text-[#67E8F9]"
                            >
                              <span>Live Demo</span>
                              <ArrowUpRight
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </a>
                          )}
                          {project.sourceUrl && (
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-medium text-[#B4BCD0] transition-colors hover:text-white"
                            >
                              <span>Source</span>
                              <ArrowUpRight
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        ) : (
          <div className="surface-card rounded-2xl p-8 text-center">
            <p className="font-display text-lg font-semibold text-white">
              No projects in {activeCategory} yet
            </p>
            <p className="mt-2 text-sm text-[#B4BCD0]">
              Select another category or return to all projects.
            </p>
            <div className="mt-5 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory('All')}
              >
                Show All Projects
              </Button>
            </div>
          </div>
        )
      ) : (
        <div className="surface-card relative overflow-hidden rounded-2xl p-8 sm:p-12 shadow-[0_0_40px_rgba(34,211,238,0.06)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.14),transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_70%)] blur-2xl"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE]">
              <FolderGit2 className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              My Projects Are Coming Soon
            </h3>

            <p className="mt-3 text-base leading-relaxed text-[#B4BCD0]">
              I&apos;m currently preparing my work to showcase my skills and
              creative journey. Check back soon!
            </p>

            {activeCategory !== 'All' && (
              <p className="mt-2 font-mono text-xs text-[#7E88A1]">
                Selected filter: {activeCategory}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<FolderPlus className="h-4 w-4" />}
                onClick={() => setIsModalOpen(true)}
              >
                Add My Projects Later
              </Button>

              <ButtonLink
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Project Collaboration Inquiry')}`}
                variant="outline"
                size="lg"
                leftIcon={<Mail className="h-4 w-4" />}
              >
                Discuss a Collaboration
              </ButtonLink>
            </div>
          </div>
        </div>
      )}

      <AddProjectsLaterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
