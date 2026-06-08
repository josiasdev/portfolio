import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Trophy, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

  const MAX_TAGS = 3;
  const visibleTags = hackathon.tags.slice(0, MAX_TAGS);
  const hiddenTagsCount = hackathon.tags.length - MAX_TAGS;

  return (
    <div
      className="animate-fade-in flex flex-col group h-full"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative flex flex-col flex-1 p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 overflow-hidden hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle backdrop-blur-sm">
        
        <div className="space-y-4 flex-1 relative z-10 flex flex-col">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-bold font-serif group-hover:text-primary transition-colors duration-200">
              {hackathon.name}
            </h3>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mt-1">{t('hackathons.project.label')}: {hackathon.projectName}</p>
          </div>

          {hackathon.award && (
            <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 w-fit px-3 py-1.5 rounded-full text-xs">
              <Trophy className="h-3.5 w-3.5" />
              {hackathon.award}
            </div>
          )}

          <div className="flex flex-col gap-2 text-xs font-semibold text-muted-foreground my-2">
            <div className="flex items-center gap-2 bg-background/50 border border-border/40 px-3 py-1.5 rounded-full w-fit">
              <Calendar className="h-3.5 w-3.5 opacity-70" />
              {hackathon.date}
            </div>
            <div className="flex items-center gap-2 bg-background/50 border border-border/40 px-3 py-1.5 rounded-full w-fit">
              <MapPin className="h-3.5 w-3.5 opacity-70" />
              {hackathon.location}
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mt-2">
            {hackathon.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40 mt-4">
            {visibleTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary/10 transition-colors cursor-default border-border/40 bg-secondary/50">
                {tag}
              </Badge>
            ))}
            {hiddenTagsCount > 0 && (
              <Badge variant="outline" className="text-xs text-muted-foreground border-border/40">
                +{hiddenTagsCount}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-6 relative z-10 mt-auto">
          {hackathon.github && (
            <Button variant="outline" size="sm" asChild className="flex-1 hover:border-primary/50 transition-all text-xs font-semibold h-9 rounded-full">
              <a href={hackathon.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5 mr-2" />
                {t('projects.viewCode')}
              </a>
            </Button>
          )}
          {hackathon.demo && (
            <Button size="sm" asChild className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground transition-all text-xs font-semibold h-9 rounded-full">
              <a href={hackathon.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5 mr-2" />
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
    <section id="hackathons" className="py-20 relative overflow-hidden bg-muted/20 border-y border-border/40">
      <div className="absolute top-40 left-0 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center justify-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 text-primary bg-primary/5 text-xs font-bold tracking-widest uppercase">
            {t('hackathons.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-4">
            {t('hackathons.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full opacity-80 mb-6" />
          <p className="text-center text-muted-foreground max-w-2xl">
            {t('hackathons.subtitle')}
          </p>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 lg:mx-0 lg:px-0">
          {hackathons.map((hackathon, index) => (
            <div key={hackathon.id} className="w-[85vw] sm:w-[400px] lg:w-auto flex-none snap-center flex flex-col items-stretch">
              <HackathonCard hackathon={hackathon} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;