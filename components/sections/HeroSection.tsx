import { ArrowDown, ArrowRight, MessageSquare } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { HeroProfileVisual } from '@/components/sections/HeroProfileVisual';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function HeroSection() {
  return (
    <Section id="home" spacing="hero" className="overflow-hidden">
      {/* Controlled Neon Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/4 h-[440px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.14),rgba(168,85,247,0.08)_45%,transparent_72%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-0 h-[360px] w-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.10),transparent_70%)] blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Hero Column */}
          <div className="lg:col-span-7">
            <Reveal immediate>
              <p className="mb-4 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#22D3EE]">
                MULTI-SKILLED CREATIVE PROFESSIONAL
              </p>

              <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Turning Creative Ideas Into{' '}
                <span className="neon-gradient-text">Digital Experiences.</span>
              </h1>

              <p className="mt-6 text-lg font-medium text-white sm:text-xl">
                Hi, I&apos;m Azeem Arslan.
              </p>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#B4BCD0] sm:text-lg">
                I work across web development, graphic design, AI-powered
                creativity, video editing, YouTube automation and social media
                analysis.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink
                  href="#projects"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore My Work
                </ButtonLink>

                <ButtonLink
                  href="#contact"
                  variant="outline"
                  size="lg"
                  leftIcon={<MessageSquare className="h-4 w-4" />}
                >
                  Let&apos;s Talk
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Right Profile Visual Column */}
          <div className="lg:col-span-5">
            <HeroProfileVisual />
          </div>
        </div>

        {/* Scroll Indicator */}
        <Reveal immediate delay={0.2} className="mt-12 sm:mt-16 flex justify-center lg:justify-start">
          <a
            href="#about"
            className="group inline-flex min-h-[44px] py-1 items-center gap-2.5 text-xs font-medium tracking-wide text-[#7E88A1] transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-sm"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#0D111A] transition-colors group-hover:border-[#22D3EE]/50">
              <ArrowDown
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </span>
            <span>Scroll to explore</span>
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}
