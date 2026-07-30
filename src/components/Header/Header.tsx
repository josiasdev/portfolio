import { useState, useEffect, useRef } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Code, Trophy, GraduationCap, Mail } from "lucide-react";

const Header = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("about");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const bottomNavItems = [
    { id: "about", label: t("nav.about"), icon: User },
    { id: "experience", label: t("nav.experience"), icon: GraduationCap },
    { id: "projects", label: t("nav.projects"), icon: Code },
    { id: "hackathons", label: t("nav.hackathons"), icon: Trophy },
    { id: "contact", label: t("nav.contact"), icon: Mail },
  ];

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
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    const sections = bottomNavItems.map((n) => n.id);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40 px-4 h-14 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-base font-bold font-sans tracking-tight text-foreground"
        >
          Josias Batista
        </button>
        <div className="flex items-center gap-2">
          <LanguageToggle direction="down" />
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile Bottom Nav Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border/40 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center h-14 px-2">
          {bottomNavItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-0.5 text-xs font-mono transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={isActive ? 2.5 : 1.75} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;