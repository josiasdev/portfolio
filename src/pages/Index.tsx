import Header from "@/components/Header";
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import { Spinner } from "@/components/ui/spinner";
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Education = lazy(() => import("@/components/Education"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
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
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
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
