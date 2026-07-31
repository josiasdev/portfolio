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
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const sectionIds = bottomNavItems.map((n) => n.id);
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    const timer = setTimeout(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
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
          <LanguageToggle direction="down" align="right" />
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