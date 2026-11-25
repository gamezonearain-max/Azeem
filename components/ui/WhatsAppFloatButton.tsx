'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppHref, siteConfig } from '@/config/site';
import { EASE_OUT_EXPO } from '@/lib/motion';

export function WhatsAppFloatButton() {
  const whatsappHref = getWhatsAppHref();

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.whatsapp.ariaLabel}
      title={siteConfig.whatsapp.ariaLabel}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.25, ease: EASE_OUT_EXPO }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex h-12 sm:h-auto items-center justify-center gap-2.5 rounded-2xl border border-[#25D366]/45 bg-[#0D111A]/90 p-1.5 sm:py-2 sm:pl-2 sm:pr-4 text-white backdrop-blur-md shadow-[0_0_24px_rgba(37,211,102,0.22)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-[#25D366]/80 hover:bg-[#131926] hover:shadow-[0_0_32px_rgba(37,211,102,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070A]"
    >
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-[#06070A]">
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="hidden sm:inline text-sm font-medium text-[#F8FAFC] whitespace-nowrap">
        WhatsApp
      </span>
    </motion.a>
  );
}
