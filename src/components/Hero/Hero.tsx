import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/profile.jpg";

const Typewriter = ({ texts, speed = 100, delay = 2000 }: { texts: string[], speed?: number, delay?: number }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const tick = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let typeSpeed = speed;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = delay;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        typeSpeed = speed;
      }

      timeout = setTimeout(tick, typeSpeed);
    };

    timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <span className="inline-flex items-center min-h-[32px]">
      {currentText}
      <span className="ml-1 w-2 h-6 bg-primary animate-pulse" />
    </span>
  );
};

const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const typingRoles = [
    t('hero.title'),
    "Software Engineer",
    "Web3 & Blockchain",
    "Backend Specialist"
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float-delayed pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-orbit pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-accent/40 animate-orbit-reverse pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          {/* Profile Image - Clean Glassmorphic Style */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60" />
              
              {/* Photo Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-card/30 backdrop-blur-md border border-border/50 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden border border-border/20">
                  <img
                    src={profileImage}
                    alt="Francisco Josias da Silva Batista"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm md:text-base font-medium text-primary tracking-widest uppercase">
              {t('hero.greeting')}
            </p>

            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight tracking-tight">
              Josias{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Batista
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 h-10">
              <Typewriter texts={typingRoles} />
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground flex-wrap pt-2">
            <div className="flex items-center gap-2 bg-card/40 border border-border/40 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/40 border border-border/40 backdrop-blur-sm px-4 py-2 rounded-full">
              <Phone className="h-4 w-4 text-primary" />
              <span>+55 (85) 98231-7976</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 flex-wrap">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-glow rounded-full"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 px-8 text-base border-border/60 hover:border-primary/50 hover:bg-card/50 backdrop-blur-sm transition-all duration-300 rounded-full"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.contact')}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="w-full sm:w-auto h-12 px-8 text-base border border-border/40 hover:border-primary/40 bg-secondary/50 hover:bg-secondary transition-all duration-300 rounded-full"
            >
              <a href={`/cv-${language}.pdf`} download={`Josias_Batista_CV_${language.toUpperCase()}.pdf`}>
                <FileText className="mr-2 h-4 w-4" />
                {t('hero.downloadCV')}
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-5 pt-8">
            {[
              { href: "https://github.com/josiasdev", icon: Github },
              { href: "https://www.linkedin.com/in/josias-batista/", icon: Linkedin },
              { href: "mailto:josiasmartins098@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group p-3.5 rounded-full border border-border/40 hover:border-primary/50 hover:bg-card/80 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;