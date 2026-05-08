import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/8 blur-3xl animate-float-delayed pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/40 animate-orbit pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-accent/50 animate-orbit-reverse pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-primary/30 animate-orbit-slow pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">

          {/* Profile Image — sem efeito de tilt */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Glow background */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{
                  background: "var(--gradient-primary)",
                  transform: "scale(1.2)",
                }}
              />
              {/* Spinning conic border */}
              <div
                className="absolute inset-[-4px] rounded-full animate-spin"
                style={{
                  background: "conic-gradient(from 0deg, hsl(210 95% 52%), hsl(190 85% 48%), transparent 60%, hsl(210 95% 52%))",
                  animationDuration: "5s",
                }}
              />
              {/* Separator ring */}
              <div className="absolute inset-[-1px] rounded-full bg-background" />

              {/* Photo */}
              <div
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden"
                style={{
                  boxShadow: "0 10px 40px hsl(210 95% 52% / 0.2)",
                }}
              >
                <img
                  src={profileImage}
                  alt="Francisco Josias da Silva Batista"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{t('hero.greeting')}</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Josias
            <br />
            <span
              className="bg-gradient-primary bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 30px hsl(210 95% 52% / 0.3))" }}
            >
              Batista
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
            {t('hero.title')}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2 bg-secondary/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Phone className="h-4 w-4 text-primary" />
              <span>+55 (85) 98231-7976</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-glow"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.cta')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all duration-300 hover:border-primary hover:shadow-glow"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.contact')}
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            {[
              { href: "https://github.com/josiasdev", icon: Github },
              { href: "https://www.linkedin.com/in/josias-batista/", icon: Linkedin },
              { href: "mailto:JBDevSoftware@proton.me", icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;