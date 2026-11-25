import { Reveal } from '@/components/motion/Reveal';
import { ProjectsShowcaseClient } from '@/components/projects/ProjectsShowcaseClient';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { getAllProjects } from '@/lib/projects';

export function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <Section id="projects" divider>
      <Container>
        <Reveal>
          <SectionHeader
            index="04"
            kicker="Portfolio"
            title="Selected Projects."
            description="A dedicated showcase prepared for real work across web development, graphic design, Photoshop, video editing, and AI projects."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <ProjectsShowcaseClient projects={projects} />
        </Reveal>
      </Container>
    </Section>
  );
}
