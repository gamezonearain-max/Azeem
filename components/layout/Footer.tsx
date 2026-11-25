import { ArrowUpRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { isValidHttpUrl } from '@/lib/security';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const configuredSocials = siteConfig.socialChannels.filter(
    (channel) => channel.configured && isValidHttpUrl(channel.href)
  );

  return (
    <footer className="border-t border-white/[0.08] bg-[#06070A] pt-12 pb-24 sm:pb-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <p className="font-display text-lg font-bold tracking-tight text-white">
                {siteConfig.brandMark}
              </p>
              <span aria-hidden="true" className="text-[#7E88A1]">
                ·
              </span>
              <p className="text-sm font-medium text-[#B4BCD0]">
                {siteConfig.name}
              </p>
            </div>
            <p className="mt-1.5 text-sm text-[#7E88A1]">
              {siteConfig.title}
              {siteConfig.location && (
                <>
                  <span aria-hidden="true" className="mx-2">
                    ·
                  </span>
                  {siteConfig.location}
                </>
              )}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#B4BCD0]"
            >
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#22D3EE] transition-colors hover:text-[#67E8F9] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{siteConfig.email}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            {configuredSocials.length > 0 && (
              <div className="flex items-center gap-4 text-sm text-[#B4BCD0]">
                {configuredSocials.map((channel) => (
                  <a
                    key={channel.id}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white whitespace-nowrap shrink-0"
                  >
                    {channel.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-[#7E88A1] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
