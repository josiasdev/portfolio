import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, FileText, Blocks, Code, Server } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/profile.webp";
import { Magnetic } from "@/components/ui/magnetic";
import { motion, Variants } from "framer-motion";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Hero = () => {
  const { t, language } = useLanguage();

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

  const typingRoles = [
    t('hero.title'),
    "Software Engineer",
    "Web3 & Blockchain",
    "Backend Specialist"
  ];

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-20 pb-12"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background/95" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center p-8 md:p-12 rounded-3xl border border-primary/30 bg-card/40 backdrop-blur-md shadow-2xl space-y-8 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Profile Image - Clean Glassmorphic Style */}
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <div className="relative group">
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60" />
              
              {/* Photo Container */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1.5 bg-card/50 backdrop-blur-md border border-primary/40 group-hover:border-primary transition-all duration-500 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden border border-border/20">
                  <img
                    src={profileImage}
                    alt="Francisco Josias da Silva Batista"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-sm md:text-base font-bold text-primary tracking-widest uppercase">
              {t('hero.greeting')}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight tracking-tight">
              Josias{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Batista
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 h-10">
              <Typewriter texts={typingRoles} />
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </motion.p>

          {/* 3 Core Highlight Cards - Inspired by Web 3.0 iRede */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-left">
            <div className="p-4 rounded-2xl bg-background/60 border border-primary/25 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2.5 mb-1 text-primary font-bold text-sm">
                <Blocks className="h-4 w-4 flex-shrink-0" />
                <span>Blockchain & Web3</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Smart Contracts em Solidity (EVM) e Soroban (Stellar Rust).</p>
            </div>

            <div className="p-4 rounded-2xl bg-background/60 border border-primary/25 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2.5 mb-1 text-primary font-bold text-sm">
                <Code className="h-4 w-4 flex-shrink-0" />
                <span>Engenharia de Protocolos</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Primitivas DeFi, Oráculos, Indexação On-chain e Privacy-by-Design.</p>
            </div>

            <div className="p-4 rounded-2xl bg-background/60 border border-primary/25 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2.5 mb-1 text-primary font-bold text-sm">
                <Server className="h-4 w-4 flex-shrink-0" />
                <span>Backend de Alta Performance</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Java 17, Spring Boot, Microsserviços e Arquitetura de Eventos.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 text-xs md:text-sm text-muted-foreground flex-wrap pt-2">
            <div className="flex items-center gap-2 bg-background/60 border border-border/40 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{t('hero.location')}</span>
            </div>
            <div className="flex items-center gap-2 bg-background/60 border border-border/40 px-4 py-2 rounded-full">
              <Phone className="h-4 w-4 text-primary" />
              <span>+55 (85) 98231-7976</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 flex-wrap">
            <Magnetic>
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-subtle hover:shadow-glow rounded-full"
                onClick={() => scrollToSection('projects')}
              >
                {t('hero.cta')}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold border-2 border-primary/50 bg-background/80 text-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.contact')}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold border border-border/60 text-foreground hover:border-primary/40 bg-card/60 hover:bg-card transition-all duration-300 rounded-full"
              >
                <a href={`/cv-${language}.pdf`} download={`Josias_Batista_CV_${language.toUpperCase()}.pdf`}>
                  <FileText className="mr-2 h-4 w-4 text-primary" />
                  {t('hero.downloadCV')}
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center gap-5 pt-8">
            {[
              { href: "https://github.com/josiasdev", icon: Github },
              { href: "https://www.linkedin.com/in/josias-batista/", icon: Linkedin },
              { href: "mailto:josiasmartins098@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <Magnetic key={i} power={0.8}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex p-3.5 rounded-full border border-border/40 hover:border-primary/50 hover:bg-card/80 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;