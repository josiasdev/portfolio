import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 dark:bg-background/90 backdrop-blur-lg border-b border-border/60 dark:border-border/40 shadow-subtle">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Josias Batista
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-sm hover:text-primary transition-colors">
            {t('nav.skills')}
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-sm hover:text-primary transition-colors">
            {t('nav.experience')}
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-primary transition-colors">
            {t('nav.projects')}
          </button>
          <button onClick={() => scrollToSection('education')} className="text-sm hover:text-primary transition-colors">
            {t('nav.education')}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
