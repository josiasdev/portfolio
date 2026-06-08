import Header from "@/components/Header/Header";
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero/Hero";
import { Spinner } from "@/components/ui/spinner";
import ScrollReveal from "@/components/ui/scroll-reveal";

const About = lazy(() => import("@/components/About/About"));
const GitHubStats = lazy(() => import("@/components/GitHubStats/GitHubStats"));
const Skills = lazy(() => import("@/components/Skills/Skills"));
const Experience = lazy(() => import("@/components/Experience/Experience"));
const Projects = lazy(() => import("@/components/Projects/Projects"));
const Hackathons = lazy(() => import("@/components/Hackathons/Hackathons"));
const Education = lazy(() => import("@/components/Education/Education"));
const Contact = lazy(() => import("@/components/Contact/Contact"));
const Footer = lazy(() => import("@/components/Footer/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton/WhatsAppButton"));

const SectionLoader = () => (
  <div className="flex h-96 w-full items-center justify-center">
    <Spinner size="default" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero is always above the fold — no scroll reveal needed */}
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <ScrollReveal direction="up" delay={0}>
            <About />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <GitHubStats />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <Skills />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <Experience />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <Projects />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <Hackathons />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <Education />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <Contact />
          </ScrollReveal>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>

      <Suspense fallback={null}>
        <div className="pb-20 md:pb-0">
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
