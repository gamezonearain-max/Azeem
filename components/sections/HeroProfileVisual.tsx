'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SkillIcon } from '@/components/ui/SkillIcon';
import { siteConfig } from '@/config/site';
import { EASE_OUT_EXPO } from '@/lib/motion';
import { isValidImageSrc } from '@/lib/security';

const floatingChips = [
  {
    id: 'chip-web',
    label: 'Web Development',
    icon: 'code' as const,
    accentClass: 'border-[#22D3EE]/35 text-[#22D3EE]',
    positionClass: 'top-4 left-4 sm:top-6 sm:left-6',
    delay: 0,
    driftY: [-4, 4, -4],
  },
  {
    id: 'chip-ai',
    label: 'AI Tools',
    icon: 'sparkles' as const,
    accentClass: 'border-[#A855F7]/35 text-[#A855F7]',
    positionClass: 'top-1/2 -translate-y-1/2 right-4 sm:right-6',
    delay: 0.4,
    driftY: [4, -4, 4],
  },
  {
    id: 'chip-video',
    label: 'Video Editing',
    icon: 'film' as const,
    accentClass: 'border-[#EC4899]/35 text-[#EC4899]',
    positionClass: 'bottom-4 left-6 sm:bottom-6 sm:left-8',
    delay: 0.8,
    driftY: [-3, 5, -3],
  },
];

export function HeroProfileVisual() {
  const validProfileImageUrl = isValidImageSrc(siteConfig.profileImageUrl)
    ? siteConfig.profileImageUrl.trim()
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT_EXPO }}
      className="relative flex min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0D111A]/90 p-6 sm:p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)]"
    >
      {/* Subtle geometric background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:36px_36px]"
      />

      {/* Ambient cyan & purple glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22)_0%,rgba(168,85,247,0.14)_50%,transparent_75%)] blur-2xl"
      />

      {/* Center AA Initials Emblem (or Profile Photo when configured) */}
      <div className="relative z-10 flex flex-col items-center">
        {validProfileImageUrl ? (
          <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-2xl border border-white/20 shadow-[0_0_32px_rgba(34,211,238,0.2)]">
            <Image
              src={validProfileImageUrl}
              alt={siteConfig.profileImageAlt ?? siteConfig.name}
              fill
              sizes="(max-width: 640px) 176px, 208px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="relative flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center rounded-2xl border border-white/15 bg-[#06070A]/90 shadow-[0_0_36px_rgba(168,85,247,0.16)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-2 rounded-xl border border-[#22D3EE]/20"
            />
            <span className="font-display text-6xl sm:text-7xl font-bold tracking-tight neon-gradient-text select-none">
              {siteConfig.initials}
            </span>
          </div>
        )}

        <div className="mt-5 text-center">
          <p className="font-display text-base font-semibold text-white">
            {siteConfig.name}
          </p>
          <p className="mt-0.5 text-xs text-[#7E88A1]">{siteConfig.title}</p>
        </div>
      </div>

      {/* Subtle Floating Skill Indicators (hidden on very small screens to prevent overlap) */}
      {floatingChips.map((chip) => (
        <motion.div
          key={chip.id}
          animate={{ y: chip.driftY }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: chip.delay,
          }}
          className={`hidden sm:flex absolute z-20 items-center gap-2 rounded-xl border bg-[#06070A]/85 px-3 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.45)] ${chip.accentClass} ${chip.positionClass}`}
        >
          <SkillIcon name={chip.icon} className="h-3.5 w-3.5 shrink-0" />
          <span className="text-xs font-medium text-[#F8FAFC] whitespace-nowrap">
            {chip.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
