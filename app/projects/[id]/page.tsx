import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ProjectDetailView } from '@/components/projects/ProjectDetailView';
import { siteConfig } from '@/config/site';
import { getAllProjects, getProjectById } from '@/lib/projects';
import { getCanonicalUrl } from '@/lib/seo';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: `Project Not Found — ${siteConfig.name}`,
      description: 'The requested project entry is not available.',
      robots: { index: false, follow: false },
    };
  }

  const projectPath = `/projects/${encodeURIComponent(project.id)}`;
  const canonicalUrl = getCanonicalUrl(projectPath);
  const ogImages = project.thumbnailImage
    ? [
        {
          url: project.thumbnailImage.url,
          alt: project.thumbnailImage.alt,
        },
      ]
    : undefined;

  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.shortDescription,
    ...(canonicalUrl ? { alternates: { canonical: projectPath } } : {}),
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.shortDescription,
      siteName: siteConfig.name,
      type: 'article',
      ...(canonicalUrl ? { url: projectPath } : {}),
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${siteConfig.name}`,
      description: project.shortDescription,
      ...(project.thumbnailImage ? { images: [project.thumbnailImage.url] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#06070A]">
      <Navbar />
      <ProjectDetailView project={project} />
      <Footer />
    </div>
  );
}
