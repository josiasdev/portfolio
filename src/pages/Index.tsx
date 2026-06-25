import Header from "@/components/Header/Header";
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero/Hero";
import { Spinner } from "@/components/ui/spinner";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Web3EasterEgg from "@/components/Web3EasterEgg/Web3EasterEgg";

const About = lazy(() => import("@/components/About/About"));
const GitHubStats = lazy(() => import("@/components/GitHubStats/GitHubStats"));
const Skills = lazy(() => import("@/components/Skills/Skills"));
const Experience = lazy(() => import("@/components/Experience/Experience"));
const Projects = lazy(() => import("@/components/Projects/Projects"));
const Hackathons = lazy(() => import("@/components/Hackathons/Hackathons"));
const Education = lazy(() => import("@/components/Education/Education"));
const Contact = lazy(() => import("@/components/Contact/Contact"));
const Footer = lazy(() => import("@/components/Footer/Footer"));

const SectionLoader = () => (
  <div className="flex h-96 w-full items-center justify-center">
    <Spinner size="default" />
  </div>
);

const Index = () => {
  const { t, language } = useLanguage();
  useSmoothScroll(); // Ativa a rolagem amanteigada global

  return (
    <div className="min-h-[100dvh] bg-background">
      <Helmet htmlAttributes={{ lang: language }}>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta property="og:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.description')} />
        <meta name="twitter:title" content={t('seo.title')} />
        <meta name="twitter:description" content={t('seo.description')} />
      </Helmet>
      
      <Web3EasterEgg />
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

        <div className="pb-20 md:pb-0">
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
