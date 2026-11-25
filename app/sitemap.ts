import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';
import { getCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
  const homeUrl = getCanonicalUrl('/');
  if (!homeUrl) {
    return [];
  }

  const projects = getAllProjects();

  const entries: MetadataRoute.Sitemap = [
    {
      url: homeUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  for (const project of projects) {
    const projectPath = `/projects/${encodeURIComponent(project.id)}`;
    const projectUrl = getCanonicalUrl(projectPath);
    if (projectUrl) {
      entries.push({
        url: projectUrl,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }

  return entries;
}
