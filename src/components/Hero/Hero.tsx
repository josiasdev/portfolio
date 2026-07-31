import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/profile.webp";

const cvFileMap: Record<string, string> = {
  pt: 'Curriculo_Josias_Batista.pdf',
  en: 'Resume_Josias_Batista.pdf',
  es: 'Currículum_Josias_Batista.pdf',
};

const Hero = () => {
  const { t, language } = useLanguage();
  const currentCvFile = cvFileMap[language] || cvFileMap.pt;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-5 lg:space-y-6">
      {/* Profile & Name Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-primary/40 flex-shrink-0 bg-card shadow-sm">
          <img
            src={profileImage}
            alt="Francisco Josias da Silva Batista"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
            <span>{t('hero.roleBadge')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
            Josias Batista
          </h1>
          <p className="text-sm sm:text-base font-mono text-muted-foreground">
            {t('hero.title')}
          </p>
        </div>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
        {t('hero.subtitle')}
      </p>

      {/* Meta & Location */}
      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground flex-wrap">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span>{t('hero.location')}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5 text-primary" />
          <span>+55 (85) 98231-7976</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 flex-wrap pt-1">
        <Button
          size="sm"
          className="h-10 px-5 text-xs font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/85 transition-colors rounded"
          onClick={() => scrollToSection('projects')}
        >
          {t('hero.cta')}
        </Button>

        <Button
          size="sm"
          variant="outline"
          className="h-10 px-5 text-xs font-mono font-semibold border-primary/60 text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all rounded"
          onClick={() => scrollToSection('contact')}
        >
          {t('hero.contact')}
        </Button>

        <Button
          size="sm"
          variant="ghost"
          asChild
          className="h-10 px-4 text-xs font-mono font-semibold text-foreground border border-border/80 hover:bg-card hover:border-primary/50 hover:text-primary transition-all rounded"
        >
          <a href={`/${encodeURI(currentCvFile)}`} download={currentCvFile}>
            <FileText className="mr-1.5 h-3.5 w-3.5 text-primary" />
            {t('hero.downloadCV')}
          </a>
        </Button>
      </div>

      {/* Social Badges */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/40 flex-wrap">
        <a
          href="https://github.com/josiasdev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-85"
        >
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
            className="h-7 rounded"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/josias-batista/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-85"
        >
          <img
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn"
            className="h-7 rounded"
          />
        </a>
        <a
          href="mailto:josiasmartins098@gmail.com"
          className="transition-opacity hover:opacity-85"
        >
          <img
            src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Gmail"
            className="h-7 rounded"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;