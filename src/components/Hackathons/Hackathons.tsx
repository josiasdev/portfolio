import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Trophy, Calendar, MapPin } from "lucide-react";

type Hackathon = {
  id: string;
  name: string;
  projectName: string;
  description: string;
  award: string | null;
  date: string;
  location: string;
  github: string | null;
  demo: string | null;
  tags: string[];
};

const HackathonCard = ({ hackathon, index }: { hackathon: Hackathon; index: number }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    setTilt({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -7,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 7,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      onMouseEnter={() => setIsHovered(true)}
      className="animate-scale-in flex flex-col"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "translateY(-5px)" : "translateY(0)"}`,
          transition: isHovered ? "transform 0.12s ease-out" : "transform 0.45s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`
          relative flex flex-col flex-1 p-6 rounded-xl border overflow-hidden h-full
          border-border/60 dark:border-border/40 bg-card/80 dark:bg-card/95 backdrop-blur-sm
          ${isHovered ? "shadow-glow" : "shadow-card"}
          transition-shadow duration-300
        `}
      >
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, hsl(var(--primary) / 0.1), transparent 65%)`,
            }}
          />
        )}

        <div className="space-y-4 flex-1 relative z-10">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3
                className="text-xl font-bold transition-colors duration-200"
                style={{ color: isHovered ? "hsl(var(--primary))" : undefined }}
              >
                {hackathon.name}
              </h3>
              <p className="text-primary font-medium mt-1">Projeto: {hackathon.projectName}</p>
            </div>
          </div>

          {hackathon.award && (
            <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 font-semibold bg-amber-500/10 w-fit px-3 py-1.5 rounded-full text-sm">
              <Trophy className="h-4 w-4" />
              {hackathon.award}
            </div>
          )}

          <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 opacity-70" />
              {hackathon.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 opacity-70" />
              {hackathon.location}
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {hackathon.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {hackathon.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4 mt-4 border-t border-border/40 relative z-10">
          {hackathon.github && (
            <Button variant="outline" size="sm" asChild className="flex-1 hover:border-primary hover:text-primary transition-all">
              <a href={hackathon.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                {t('projects.viewCode')}
              </a>
            </Button>
          )}
          {hackathon.demo && (
            <Button size="sm" asChild className="flex-1 bg-gradient-primary hover:opacity-90 transition-all">
              <a href={hackathon.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                {t('projects.viewDemo')}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Hackathons = () => {
  const { t } = useLanguage();

  const hackathons: Hackathon[] = [
    {
      id: "hack-meridian",
      name: "Hack Meridian 2025",
      projectName: "SyloPay",
      description: t('hackathons.meridian.desc'),   
      award: "Competidor (Prize Pool: US$50k)",
      date: "15-16 Sep, 2025",
      location: "Copacabana Palace - Rio de Janeiro, BR",
      github: "https://github.com/Sylopay/sylopay",
      demo: null,
      tags: ["Stellar", "Web3", "React", "Express.js", "Docker", "PostgreSQL"],
    },
    {
      id: "sui-hackathon",
      name: "SUI Hackathon 2025",
      projectName: "Kyra",
      description: t('hackathons.sui.desc'),
      award: null,
      date: "2025",
      location: "Online",
      github: "https://github.com/pleasantfinance8/system-kyra-hackaton-sui-2025",
      demo: "https://kyra-finance.vercel.app",
      tags: ["SUI", "Web3", "Next.js", "AI Agent", "Supabase", "TypeScript"],
    },
    {
      id: "xrpl-hackaledger",
      name: "HackaLedger XRPL 2024",
      projectName: "Heather AI",
      description: t('hackathons.xrpl.desc'),
      award: t('hackathons.xrpl.award'),
      date: "2024",
      location: "Online / Brasil",
      github: "https://github.com/pleasantfinance8/xrp",
      demo: null,
      tags: ["XRPL", "Web3", "NestJS", "React", "Prisma", "Docker", "PostgreSQL"],
    }
  ];

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/50 text-primary">
            {t('hackathons.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            {t('hackathons.title')}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl">
            {t('hackathons.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;