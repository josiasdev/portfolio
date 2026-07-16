import Header from "@/components/Header/Header";
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero/Hero";
import { Spinner } from "@/components/ui/spinner";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const About = lazy(() => import("@/components/About/About"));
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
      
      <Header />
      <main>
        {/* Hero is always above the fold — no scroll reveal needed */}
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Hackathons />
          <Education />
          <Contact />
        </Suspense>
      </main>

        <div className="pb-20 md:pb-0">
          <Footer />
        </div>
    </div>
  );
};

export default Index;
