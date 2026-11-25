import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';
import type {
  AnchorHTMLAttributes,
  ComponentPropsWithRef,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
    'whitespace-nowrap shrink-0 select-none',
    'transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070A]',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-[0.98] cursor-pointer',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-[#22D3EE] text-[#06070A] font-semibold hover:bg-[#38BDF8] shadow-[0_0_24px_rgba(34,211,238,0.28)] hover:shadow-[0_0_32px_rgba(34,211,238,0.42)]',
        secondary:
          'bg-[#131926] text-white border border-white/15 hover:bg-[#1A2233] hover:border-[#A855F7]/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]',
        outline:
          'bg-transparent text-white border border-white/15 hover:bg-white/[0.04] hover:border-[#22D3EE]/60 hover:text-[#22D3EE]',
        ghost:
          'bg-transparent text-[#B4BCD0] hover:text-white hover:bg-white/[0.05]',
      },
      accent: {
        cyan: '',
        purple: '',
        magenta: '',
      },
      size: {
        sm: 'min-h-[40px] px-4 py-2 text-xs',
        md: 'min-h-[42px] px-5 py-2.5 text-sm',
        lg: 'min-h-[46px] px-6 py-3 text-sm sm:text-base',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        accent: 'purple',
        className:
          'bg-[#A855F7] text-white hover:bg-[#B76EF9] shadow-[0_0_24px_rgba(168,85,247,0.28)] hover:shadow-[0_0_32px_rgba(168,85,247,0.42)]',
      },
      {
        variant: 'primary',
        accent: 'magenta',
        className:
          'bg-[#EC4899] text-white hover:bg-[#F472B6] shadow-[0_0_24px_rgba(236,72,153,0.28)] hover:shadow-[0_0_32px_rgba(236,72,153,0.42)]',
      },
      {
        variant: 'outline',
        accent: 'magenta',
        className:
          'hover:border-[#EC4899]/60 hover:text-[#F472B6]',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      accent: 'cyan',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ComponentPropsWithRef<'button'>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  ref,
  children,
  variant,
  accent,
  size,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ variant, accent, size }), className)}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        leftIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps,
    VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export function ButtonLink({
  children,
  variant,
  accent,
  size,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, accent, size }), className)}
      {...props}
    >
      {leftIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </Link>
  );
}
