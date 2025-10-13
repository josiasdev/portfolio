import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <p className="text-lg text-muted-foreground">{t('hero.greeting')}</p>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            Francisco Josias
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              da Silva Batista
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
            {t('hero.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+55 (85) 98231-7976</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.contact')}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/josiasdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/josias-batista/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:francisco.batista67@alu.ufc.br"
              className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
