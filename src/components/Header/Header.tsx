import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'hackathons', label: t('nav.hackathons') },
    { id: 'education', label: t('nav.education') },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'bg-transparent' : 'bg-background/85 dark:bg-background/90 backdrop-blur-lg border-b border-border/40 shadow-sm'}`}>
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
          <button 
            onClick={() => scrollToSection('hero')} 
            className={`text-xl font-bold font-serif bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-50 hover:opacity-80 transition-opacity ${isMobileMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          >
            Josias Batista
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 relative z-50">
            <div className={`hidden lg:flex items-center gap-3 ${isMobileMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              <LanguageToggle />
              <ThemeToggle />
            </div>
            
            {/* The mobile toggle button floats cleanly in the top right */}
            <button 
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none rounded-full bg-card/30 backdrop-blur-md border border-border/20 shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu - Ultra Premium Apple Style */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none scale-105'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-6 pt-16">
          
          {/* Quick Actions at the top so dropdown opens correctly */}
          <div 
            className={`relative z-50 flex justify-center items-center gap-6 mb-12 transition-all duration-700 delay-100 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <div className="flex bg-card/50 backdrop-blur-md border border-border/40 rounded-full p-2 gap-4">
              <LanguageToggle />
              <div className="w-[1px] h-auto bg-border/50 my-1"></div>
              <ThemeToggle />
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-6 pb-20">
            {navItems.map((item, index) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className={`text-3xl sm:text-4xl font-bold font-serif tracking-tight text-foreground/90 hover:text-primary transition-all duration-500 ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${isMobileMenuOpen ? (index + 2) * 80 : 0}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;