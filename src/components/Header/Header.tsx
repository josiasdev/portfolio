import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

const Header = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const [activeSection, setActiveSection] = useState<string>('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'hackathons', label: t('nav.hackathons') },
    { id: 'education', label: t('nav.education') },
  ];

  // Ícones específicos para a Bottom Bar Mobile
  const bottomNavItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'experience', label: t('nav.experience'), icon: Briefcase },
    { id: 'projects', label: t('nav.projects'), icon: Code },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  // Scroll Spy via IntersectionObserver
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
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    const sections = ['hero', ...navItems.map(n => n.id), 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/85 dark:bg-background/90 backdrop-blur-lg border-b border-border/40 shadow-sm`}>
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-xl font-bold font-serif bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-50 hover:opacity-80 transition-opacity"
          >
            Josias Batista
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className={`text-sm font-semibold transition-colors relative group py-2 ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 relative z-50">
            <div className="flex items-center gap-2 md:gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Bottom Navigation Bar (Mobile App-Like) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border/40 pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16 px-2">
          {bottomNavItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center justify-center w-full h-full space-y-1 relative group"
              >
                <div className={`p-1.5 rounded-full transition-all duration-300 ${isActive ? 'bg-primary/15 text-primary scale-110' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;