import { siteConfig } from '@/config/site';
import { isValidHttpUrl } from '@/lib/security';

const PLACEHOLDER_VALUES = new Set([
  'MY_APP_URL',
  'MY_SITE_URL',
  'https://your-domain.com',
  'http://your-domain.com',
  '',
]);

export function getSiteUrl(): URL | undefined {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
  ];

  for (const raw of candidates) {
    if (!raw) continue;
    const trimmed = raw.trim();
    if (PLACEHOLDER_VALUES.has(trimmed)) continue;
    if (isValidHttpUrl(trimmed)) {
      return new URL(trimmed);
    }
  }

  return undefined;
}

export function getCanonicalUrl(path = '/'): string | undefined {
  const baseUrl = getSiteUrl();
  if (!baseUrl) return undefined;
  return new URL(path, baseUrl).toString();
}

export function buildPersonJsonLd() {
  const canonicalUrl = getCanonicalUrl('/');
  const configuredSocialUrls = siteConfig.socialChannels
    .filter((channel) => channel.configured && isValidHttpUrl(channel.href))
    .map((channel) => channel.href as string);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.whatsapp.phoneNumber,
    knowsAbout: siteConfig.skills.map((skill) => skill.title),
    ...(canonicalUrl ? { url: canonicalUrl } : {}),
    ...(configuredSocialUrls.length > 0 ? { sameAs: configuredSocialUrls } : {}),
  };
}
