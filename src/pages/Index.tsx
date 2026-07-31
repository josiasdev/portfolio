import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const About = lazy(() => import("@/components/About/About"));
const Skills = lazy(() => import("@/components/Skills/Skills"));
const Experience = lazy(() => import("@/components/Experience/Experience"));
const Projects = lazy(() => import("@/components/Projects/Projects"));
const Hackathons = lazy(() => import("@/components/Hackathons/Hackathons"));
const Education = lazy(() => import("@/components/Education/Education"));
const Certifications = lazy(() => import("@/components/Certifications/Certifications"));
const LanguagesSection = lazy(() => import("@/components/Languages/Languages"));
const Contact = lazy(() => import("@/components/Contact/Contact"));
const Footer = lazy(() => import("@/components/Footer/Footer"));

const SectionLoader = () => (
  <div className="flex h-32 w-full items-center justify-center">
    <div className="h-6 w-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navItems = [
    { id: "about", label: t("nav.about"), num: "01" },
    { id: "skills", label: t("nav.skills"), num: "02" },
    { id: "experience", label: t("nav.experience"), num: "03" },
    { id: "projects", label: t("nav.projects"), num: "04" },
    { id: "hackathons", label: t("nav.hackathons"), num: "05" },
    { id: "education", label: t("nav.education"), num: "06" },
    { id: "certifications", label: t("nav.certifications"), num: "07" },
    { id: "languages", label: t("nav.languages"), num: "08" },
    { id: "contact", label: t("nav.contact"), num: "09" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const sections = navItems.map((n) => n.id);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [language]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Helmet htmlAttributes={{ lang: language }}>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <meta property="og:title" content={t("seo.title")} />
        <meta property="og:description" content={t("seo.description")} />
        <meta name="twitter:title" content={t("seo.title")} />
        <meta name="twitter:description" content={t("seo.description")} />
      </Helmet>

      {/* Mobile Top & Bottom Navigation */}
      <Header />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          
          {/* Left Column: Sticky Profile & Side Navigation (Desktop lg+) */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-10 lg:overflow-y-auto">
            <div className="space-y-4">
              {/* Desktop Top Actions: Language & Theme Toggles */}
              <div className="hidden lg:flex items-center justify-end gap-2.5 pb-1">
                <LanguageToggle direction="down" align="right" />
                <ThemeToggle />
              </div>

              <Hero />

              {/* Side Navigation with Active Line Indicator (Brittany Chiang style) */}
              <nav className="nav hidden lg:block" aria-label="In-page section jump links">
                <ul className="space-y-1.5 w-max">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="group flex items-center py-1.5 transition-all text-left"
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-300 ${
                              isActive
                                ? "w-16 bg-primary"
                                : "w-8 bg-border group-hover:w-16 group-hover:bg-foreground"
                            }`}
                          />
                          <span
                            className={`text-xs font-mono font-semibold tracking-widest uppercase transition-colors ${
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            <span className="mr-2 opacity-60">{item.num}.</span>
                            {item.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </header>

          {/* Right Column: Scrollable Main Content */}
          <main className="pt-12 lg:w-[54%] lg:py-24 space-y-20">
            <Suspense fallback={<SectionLoader />}>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Hackathons />
              <Education />
              <Certifications />
              <LanguagesSection />
              <Contact />
            </Suspense>

            <div className="pb-20 md:pb-0 pt-8 border-t border-border/40">
              <Footer />
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Index;
