import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const sectionVariants = cva('relative w-full', {
  variants: {
    spacing: {
      compact: 'py-12 sm:py-16',
      default: 'py-16 sm:py-24',
      relaxed: 'py-20 sm:py-28',
      hero: 'pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28',
    },
    divider: {
      true: 'border-t border-white/[0.08]',
      false: '',
    },
  },
  defaultVariants: {
    spacing: 'default',
    divider: false,
  },
});

export interface SectionProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: ReactNode;
}

export function Section({
  children,
  spacing,
  divider,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ spacing, divider }), className)}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  index?: string;
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  index,
  kicker,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-12',
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className
      )}
    >
      {(index || kicker) && (
        <div
          className={cn(
            'mb-3 flex items-center gap-2.5 text-sm font-medium text-[#22D3EE]',
            align === 'center' && 'justify-center'
          )}
        >
          {index && (
            <span className="font-mono tabular-nums text-[#22D3EE]">
              {index}
            </span>
          )}
          {index && kicker && (
            <span aria-hidden="true" className="text-[#7E88A1]">
              ·
            </span>
          )}
          {kicker && <span className="text-[#B4BCD0]">{kicker}</span>}
        </div>
      )}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-[#B4BCD0]">
          {description}
        </p>
      )}
    </div>
  );
}
