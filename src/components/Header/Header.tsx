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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 dark:bg-background/90 backdrop-blur-lg border-b border-border/40 shadow-sm transition-colors duration-300">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <button 
          onClick={() => scrollToSection('hero')} 
          className="text-xl font-bold font-serif bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent relative z-50 hover:opacity-80 transition-opacity"
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
          <LanguageToggle />
          <ThemeToggle />
          <button 
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
          {navItems.map((item, index) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-2xl font-bold font-serif text-left w-full hover:text-primary transition-colors py-2 border-b border-border/10"
              style={{ animationDelay: `${index * 0.1}s` }}
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