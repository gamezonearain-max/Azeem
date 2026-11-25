import { siteConfig } from '@/config/site';
import { isValidHttpUrl, isValidImageSrc } from '@/lib/security';
import type {
  ProjectCategory,
  ProjectFilterCategory,
  ProjectImage,
  ProjectItem,
} from '@/types/portfolio';

export { isValidHttpUrl, isValidImageSrc };

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  'Web Development',
  'Graphic Design',
  'Photoshop',
  'Video Editing',
  'AI Projects',
  'Other',
] as const;

export const PROJECT_FILTER_CATEGORIES: readonly ProjectFilterCategory[] = [
  'All',
  ...PROJECT_CATEGORIES,
] as const;

function sanitizeImage(image?: ProjectImage): ProjectImage | undefined {
  if (!image || !isValidImageSrc(image.url)) return undefined;
  const alt = image.alt.trim();
  if (!alt) return undefined;
  return {
    url: image.url.trim(),
    alt,
    caption: image.caption?.trim() || undefined,
  };
}

export function getValidatedProjects(rawProjects: ProjectItem[]): ProjectItem[] {
  const seenIds = new Set<string>();
  const validProjects: ProjectItem[] = [];

  for (const item of rawProjects) {
    const id = item.id.trim();
    const title = item.title.trim();
    const shortDescription = item.shortDescription.trim();
    const fullDescription = item.fullDescription.trim();

    if (!id || !title || !shortDescription || seenIds.has(id)) {
      continue;
    }
    if (!PROJECT_CATEGORIES.includes(item.category)) {
      continue;
    }

    seenIds.add(id);

    const technologies = item.technologies
      .map((tech) => tech.trim())
      .filter(Boolean);

    const thumbnailImage = sanitizeImage(item.thumbnailImage);
    const galleryImages = (item.galleryImages ?? [])
      .map((img) => sanitizeImage(img))
      .filter((img): img is ProjectImage => img !== undefined);

    const challengesAndSolutions = (item.challengesAndSolutions ?? [])
      .map((entry) => ({
        challenge: entry.challenge.trim(),
        solution: entry.solution.trim(),
      }))
      .filter((entry) => entry.challenge.length > 0 && entry.solution.length > 0);

    validProjects.push({
      id,
      title,
      shortDescription,
      fullDescription: fullDescription || shortDescription,
      category: item.category,
      technologies,
      thumbnailImage,
      galleryImages: galleryImages.length > 0 ? galleryImages : undefined,
      liveDemoUrl: isValidHttpUrl(item.liveDemoUrl)
        ? item.liveDemoUrl.trim()
        : undefined,
      sourceUrl: isValidHttpUrl(item.sourceUrl)
        ? item.sourceUrl.trim()
        : undefined,
      featured: Boolean(item.featured),
      challengesAndSolutions:
        challengesAndSolutions.length > 0 ? challengesAndSolutions : undefined,
      accent: item.accent ?? 'cyan',
    });
  }

  return validProjects;
}

export function getAllProjects(): ProjectItem[] {
  return getValidatedProjects(siteConfig.projects);
}

export function getProjectById(id: string): ProjectItem | undefined {
  const normalizedId = id.trim();
  if (!normalizedId) return undefined;
  return getAllProjects().find((project) => project.id === normalizedId);
}

export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: ProjectFilterCategory
): ProjectItem[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}
