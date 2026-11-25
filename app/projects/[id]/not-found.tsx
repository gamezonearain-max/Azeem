import { ArrowLeft, FolderGit2 } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function ProjectNotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#06070A]">
      <Navbar />
      <main className="flex flex-1 items-center">
        <Section>
          <Container size="sm">
            <div className="surface-card rounded-2xl p-8 sm:p-12 text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE]">
                <FolderGit2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <h1 className="mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">
                Project Not Found
              </h1>
              <p className="mt-3 text-base leading-relaxed text-[#B4BCD0]">
                This project showcase entry does not exist yet or has not been
                published.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink
                  href="/#projects"
                  variant="primary"
                  size="md"
                  leftIcon={<ArrowLeft className="h-4 w-4" />}
                >
                  Back to Projects
                </ButtonLink>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
