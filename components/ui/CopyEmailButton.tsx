'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      variant="outline"
      size="md"
      onClick={handleCopy}
      leftIcon={
        copied ? (
          <Check className="h-4 w-4 text-[#22D3EE]" />
        ) : (
          <Copy className="h-4 w-4" />
        )
      }
      aria-label={`Copy email address ${email}`}
    >
      {copied ? 'Email Copied' : email}
    </Button>
  );
}
