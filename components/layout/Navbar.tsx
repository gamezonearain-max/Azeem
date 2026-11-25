'use client';

import { Mail, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { cn } from '@/lib/utils';

function extractSectionId(href: string): string {
  return href.replace(/^\/?#/, '');
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('/#home');
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sectionIds = siteConfig.navItems
      .map((item) => extractSectionId(item.href))
      .filter(Boolean);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHref(`/#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuToggleRef.current?.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#06070A]/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link
          href="/#home"
          onClick={() => {
            setActiveHref('/#home');
            setMobileOpen(false);
          }}
          className="font-display text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
        >
          {siteConfig.brandMark}
        </Link>

        {/* Zone 2: Desktop Single-Line Navigation Links */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 text-sm font-medium"
        >
          {siteConfig.navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm',
                  'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-[#22D3EE] after:transition-transform after:duration-200',
                  isActive
                    ? 'text-[#22D3EE] after:scale-x-100'
                    : 'text-[#B4BCD0] hover:text-white after:scale-x-0 hover:after:scale-x-100'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Contact CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <ButtonLink
            href={`mailto:${siteConfig.email}`}
            variant="primary"
            size="sm"
            leftIcon={<Mail className="h-3.5 w-3.5" />}
            className="hidden sm:inline-flex"
          >
            Let&apos;s Talk
          </ButtonLink>

          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#0D111A] text-white transition-colors hover:border-[#22D3EE]/50 hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] lg:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="border-t border-white/[0.08] bg-[#06070A]/95 backdrop-blur-md lg:hidden"
          >
            <Container className="flex flex-col gap-1.5 py-4">
              {siteConfig.navItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setMobileOpen(false);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex min-h-[44px] items-center justify-between rounded-lg px-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]',
                      isActive
                        ? 'bg-[#22D3EE]/10 text-[#22D3EE]'
                        : 'text-[#B4BCD0] hover:bg-white/[0.04] hover:text-white'
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="font-mono text-xs text-[#22D3EE]">
                        Active
                      </span>
                    )}
                  </Link>
                );
              })}
              <div className="pt-2">
                <ButtonLink
                  href={`mailto:${siteConfig.email}`}
                  variant="primary"
                  size="md"
                  leftIcon={<Mail className="h-4 w-4" />}
                  onClick={() => setMobileOpen(false)}
                  className="w-full"
                >
                  Let&apos;s Talk
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
