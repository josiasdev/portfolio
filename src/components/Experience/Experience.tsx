import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, Calendar, ChevronRight, GraduationCap } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
  tech?: string;
  isAcademic?: boolean;
  isCurrent?: boolean;
};

const ExperienceCard = ({ exp, index, isLast }: { exp: Experience; index: number; isLast: boolean }) => {
  const { t } = useLanguage();
  return (
    <div
      className="relative pl-8 md:pl-12 animate-fade-in group"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 flex flex-col items-center z-20">
        <div
          className={`w-4 h-4 rounded-full border-[3px] transition-all duration-300 ${
            exp.isCurrent
              ? "bg-primary border-primary shadow-[0_0_16px_hsl(var(--primary)/0.8)] scale-125"
              : "bg-background border-muted-foreground/40 group-hover:border-primary/50 group-hover:scale-110"
          }`}
        />
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-[7px] top-12 bottom-[-32px] w-[2px] bg-gradient-to-b from-border/80 via-border/40 to-transparent z-10" />
      )}

      {/* Card */}
      <div
        className={`relative rounded-3xl border p-6 md:p-8 overflow-hidden transition-all duration-300
          ${exp.isCurrent
            ? "border-primary/50 bg-primary/10 dark:bg-primary/15 shadow-[0_0_24px_hsl(var(--primary)/0.15)] hover:border-primary hover:bg-primary/20 backdrop-blur-md"
            : "border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/50 dark:hover:bg-card/20 hover:border-primary/30 hover:shadow-subtle backdrop-blur-sm"
          }
        `}
      >
        {/* Current job badge */}
        {exp.isCurrent && (
          <span className="absolute top-6 right-6 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase bg-primary text-primary-foreground shadow-[0_0_12px_hsl(var(--primary)/0.5)] border border-primary/30 animate-pulse">
            {t('experience.badge.current')}
          </span>
        )}

        <div className="space-y-5 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 pr-16">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${exp.isCurrent ? "bg-primary/20 border border-primary/40 text-primary" : "bg-primary/10 text-primary"}`}>
                  {exp.isAcademic ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : (
                    <Briefcase className="h-5 w-5" />
                  )}
                </div>
                <h3 className={`text-xl md:text-2xl font-bold font-serif tracking-tight transition-colors ${exp.isCurrent ? "text-primary" : "group-hover:text-primary"}`}>
                  {exp.role}
                </h3>
              </div>
              <p className={`text-base font-medium pl-12 ${exp.isCurrent ? "text-primary/90 font-semibold" : "text-muted-foreground"}`}>
                {exp.company}
              </p>
            </div>
          </div>
          
          <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full w-fit ${
            exp.isCurrent
              ? "bg-primary/15 text-primary border border-primary/30"
              : "text-muted-foreground bg-background/50 border border-border/40"
          }`}>
            <Calendar className="h-3.5 w-3.5" />
            <span>{exp.period}</span>
          </div>

          {/* Bullet descriptions */}
          <ul className="space-y-3 mt-4">
            {exp.descriptions.map((desc, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                <ChevronRight className={`h-4 w-4 flex-shrink-0 mt-0.5 ${exp.isCurrent ? "text-primary opacity-100" : "text-primary/60 opacity-60"}`} />
                <span className="flex-1">{desc}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          {exp.tech && (
            <div className="pt-5 mt-2 border-t border-border/40">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">{t('experience.tech.label')}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.split(',').map((tech, i) => (
                  <span key={i} className={`text-xs px-2.5 py-1 rounded-md border transition-colors ${
                    exp.isCurrent
                      ? "border-primary/40 bg-primary/15 text-primary font-medium"
                      : "border-border/40 bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}>
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useLanguage();

  const experiences: Experience[] = [
    {
      role: t('experience.irede.role'),
      company: t('experience.irede.company'),
      period: t('experience.irede.period'),
      descriptions: [
        t('experience.irede.desc1'),
        t('experience.irede.desc2'),
        t('experience.irede.desc3'),
      ],
      tech: t('experience.irede.tech'),
      isCurrent: true,
    },
    {
      role: t('experience.ideedutec.role'),
      company: t('experience.ideedutec.company'),
      period: t('experience.ideedutec.period'),
      descriptions: [
        t('experience.ideedutec.desc1'),
        t('experience.ideedutec.desc2'),
        t('experience.ideedutec.desc3'),
      ],
      tech: t('experience.ideedutec.tech'),
    },
    {
      role: t('experience.monitor.role'),
      company: t('experience.monitor.company'),
      period: t('experience.monitor.period'),
      descriptions: [
        t('experience.monitor.desc1'),
        t('experience.monitor.desc2'),
        t('experience.monitor.desc3'),
      ],
      tech: t('experience.monitor.tech'),
    },
    {
      role: t('experience.brazil.role'),
      company: t('experience.brazil.company'),
      period: t('experience.brazil.period'),
      descriptions: [
        t('experience.brazil.desc1'),
        t('experience.brazil.desc2'),
        t('experience.brazil.desc3'),
      ],
      tech: t('experience.brazil.tech'),
    },
    {
      role: t('experience.switchpay.role'),
      company: t('experience.switchpay.company'),
      period: t('experience.switchpay.period'),
      descriptions: [
        t('experience.switchpay.desc1'),
        t('experience.switchpay.desc2'),
      ],
      tech: t('experience.switchpay.tech'),
    },
    {
      role: t('experience.lucrei.role'),
      company: t('experience.lucrei.company'),
      period: t('experience.lucrei.period'),
      descriptions: [
        t('experience.lucrei.desc1'),
        t('experience.lucrei.desc2'),
      ],
      tech: t('experience.lucrei.tech'),
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            {t('experience.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full opacity-80 mb-6" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} isLast={index === experiences.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;