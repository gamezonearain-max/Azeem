'use client';

import { FolderPlus, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { EASE_OUT_EXPO } from '@/lib/motion';

interface AddProjectsLaterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddProjectsLaterModal({
  isOpen,
  onClose,
}: AddProjectsLaterModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06070A]/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-projects-modal-title"
            aria-describedby="add-projects-modal-description"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            onClick={(event) => event.stopPropagation()}
            className="surface-elevated relative w-full max-w-md rounded-2xl p-6 sm:p-7 shadow-[0_0_48px_rgba(34,211,238,0.14)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#06070A]/60 text-[#B4BCD0] transition-colors hover:border-[#22D3EE]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE]">
              <FolderPlus className="h-5 w-5" aria-hidden="true" />
            </div>

            <h3
              id="add-projects-modal-title"
              className="mt-5 font-display text-xl font-semibold tracking-tight text-white"
            >
              Showcase Integration Ready
            </h3>

            <p
              id="add-projects-modal-description"
              className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#F8FAFC]"
            >
              Your project showcase is ready. You can add your real projects
              whenever you&apos;re ready.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-[#7E88A1]">
              When you have verified case studies, screenshots, and links ready,
              they can be added directly through the centralized project
              configuration in{' '}
              <span className="font-mono text-[#22D3EE]">config/site.ts</span>.
            </p>

            <div className="mt-6 flex justify-end">
              <Button
                ref={closeButtonRef}
                variant="primary"
                size="md"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
