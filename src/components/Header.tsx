import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when scrolling starts (optional UX enhancement)
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

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
    { id: 'education', label: t('nav.education') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 dark:bg-background/90 backdrop-blur-lg border-b border-border/60 dark:border-border/40 shadow-subtle">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent relative z-50">
          Josias Batista
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm font-medium hover:text-primary transition-colors">
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 relative z-50">
          <LanguageToggle />
          <ThemeToggle />
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
          {navItems.map((item, i) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-2xl font-bold text-left w-full hover:text-primary transition-colors"
              style={{
                animation: isMobileMenuOpen ? `slide-in-right 0.4s ease-out forwards ${i * 0.1}s` : 'none',
                opacity: isMobileMenuOpen ? 0 : 1
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;