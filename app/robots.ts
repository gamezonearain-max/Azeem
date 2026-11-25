import type { MetadataRoute } from 'next';
import { getCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = getCanonicalUrl('/sitemap.xml');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    ...(sitemapUrl ? { sitemap: sitemapUrl } : {}),
  };
}
