import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Trophy, Calendar } from "lucide-react";

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

const Hackathons = () => {
  const { t } = useLanguage();

  const hackathons: Hackathon[] = [
    {
      id: "pulso-hackathon",
      name: "PULSO Hackathon (Stellar Network)",
      projectName: "COINCONUT",
      description: t('hackathons.pulso.desc'),
      award: t('hackathons.pulso.award'),
      date: "2026",
      location: "Stellar Network / Online",
      github: "https://github.com/josiasdev/coinconut",
      demo: "https://coinconut-b6qp.vercel.app",
      tags: ["Stellar", "Soroban", "Rust", "Noir ZK", "TypeScript"],
    },
    {
      id: "unicef-challenge",
      name: "UNICEF Youth Challenge Blockchain 2026",
      projectName: "EloCiv",
      description: t('hackathons.unicef.desc'),
      award: t('hackathons.unicef.award'),
      date: "2026",
      location: "UNICEF Brasil & Blockchain.RIO",
      github: "https://github.com/josiasdev/EloCiv",
      demo: "https://github.com/josiasdev/EloCiv",
      tags: ["UNICEF", "Stellar", "Soroban", "Rust", "W3C VC"],
    },
    {
      id: "hack-meridian",
      name: "Hack Meridian 2025",
      projectName: "SyloPay",
      description: t('hackathons.meridian.desc'),
      award: t('hackathons.meridian.award'),
      date: "2025",
      location: "Rio de Janeiro, BR",
      github: "https://github.com/Sylopay/sylopay",
      demo: null,
      tags: ["Stellar", "Web3", "NestJS", "Docker"],
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
      tags: ["SUI", "Web3", "Next.js", "AI Agent"],
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
      tags: ["XRPL", "Web3", "NestJS", "Prisma"],
    }
  ];

  return (
    <section id="hackathons" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          05. {t('hackathons.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="space-y-4">
        {hackathons.map((h) => (
          <div
            key={h.id}
            className="group p-5 rounded border border-border/60 bg-card/30 hover:border-primary/50 transition-colors space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {h.name} <span className="text-muted-foreground font-normal text-xs">({h.projectName})</span>
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground flex-shrink-0">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>{h.date}</span>
              </div>
            </div>

            {h.award && (
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                <Trophy className="h-3 w-3 fill-amber-500" />
                <span>{h.award}</span>
              </div>
            )}

            <p className="text-xs text-muted-foreground leading-relaxed">
              {h.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {h.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                {h.github && (
                  <a
                    href={h.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>{t('projects.viewCode')}</span>
                  </a>
                )}
                {h.demo && (
                  <a
                    href={h.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>{t('projects.viewDemo')}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;