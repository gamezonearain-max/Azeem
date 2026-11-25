import { ArrowUpRight, Info, Mail, MessageCircle, User } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { Section, SectionHeader } from '@/components/ui/Section';
import { getWhatsAppHref, siteConfig } from '@/config/site';
import { isValidHttpUrl } from '@/lib/security';

export function ContactSection() {
  const whatsappHref = getWhatsAppHref();

  return (
    <Section id="contact" divider>
      <Container>
        <Reveal>
          <SectionHeader
            index="06"
            kicker="Contact"
            title="Let's Create Something Amazing."
            description="Open to collaborations across web development, graphic design, Photoshop editing, AI workflows, video editing, YouTube automation, and social media analysis."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Primary Direct Contact Card */}
          <Reveal className="lg:col-span-7">
            <div className="surface-card relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(34,211,238,0.06)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_70%)] blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE]">
                    <User className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {siteConfig.name}
                    </p>
                    <p className="text-xs text-[#7E88A1]">{siteConfig.title}</p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-[#B4BCD0]">
                  Have a project brief, creative concept, or channel inquiry in
                  mind? Reach out directly via email or WhatsApp and share your
                  goals, timeline, and preferred format.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#06070A]/70 p-4 sm:p-5">
                    <p className="text-xs font-medium text-[#7E88A1]">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1.5 inline-flex max-w-full items-center gap-1.5 font-mono text-sm sm:text-base font-medium text-[#22D3EE] transition-colors hover:text-[#67E8F9] break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
                    >
                      <span>{siteConfig.email}</span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#06070A]/70 p-4 sm:p-5">
                    <p className="text-xs font-medium text-[#7E88A1]">
                      WhatsApp Direct
                    </p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={siteConfig.whatsapp.ariaLabel}
                      className="mt-1.5 inline-flex max-w-full items-center gap-1.5 font-mono text-sm sm:text-base font-medium text-[#25D366] transition-colors hover:text-[#4ADE80] break-words focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] rounded-sm"
                    >
                      <MessageCircle
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 break-words">{siteConfig.whatsapp.phoneNumber}</span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-3.5">
                <ButtonLink
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Portfolio Collaboration Inquiry')}`}
                  variant="primary"
                  size="lg"
                  leftIcon={<Mail className="h-4 w-4" />}
                  rightIcon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Send an Email
                </ButtonLink>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={siteConfig.whatsapp.ariaLabel}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#25D366]/45 bg-[#131926] px-6 py-3 text-sm sm:text-base font-medium text-white whitespace-nowrap shrink-0 transition-[transform,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#25D366]/80 hover:bg-[#1A2233] hover:shadow-[0_0_24px_rgba(37,211,102,0.24)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070A]"
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0 text-[#25D366]"
                    aria-hidden="true"
                  />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>

                <CopyEmailButton email={siteConfig.email} />
              </div>
            </div>
          </Reveal>

          {/* Channels & Backend Form Status Card */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="surface-card rounded-2xl p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-white">
                  Social Channels
                </h3>
                <p className="mt-1 text-sm text-[#7E88A1]">
                  External social links will become active once profile URLs are
                  configured.
                </p>

                <ul className="mt-5 divide-y divide-white/[0.06]">
                  {siteConfig.socialChannels.map((channel) => (
                    <li
                      key={channel.id}
                      className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-white">
                        {channel.platform}
                      </span>
                      {channel.configured && isValidHttpUrl(channel.href) ? (
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#22D3EE] hover:text-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
                        >
                          <span>{channel.handle ?? 'View Profile'}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="font-mono text-xs text-[#7E88A1]">
                          Unconfigured
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-card rounded-2xl p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#A855F7]/30 bg-[#A855F7]/10 text-[#C084FC]">
                    <Info className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      Interactive Contact Form
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#B4BCD0]">
                      A backend-connected contact form is not yet configured in
                      this phase. Please reach out directly via WhatsApp or
                      email{' '}
                      <span className="font-mono text-xs text-[#22D3EE]">
                        {siteConfig.email}
                      </span>{' '}
                      to start a conversation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
