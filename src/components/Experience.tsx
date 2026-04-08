import { useRef, useState } from "react";
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

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="relative pl-8 md:pl-12 animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${
            exp.isCurrent
              ? "bg-primary border-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]"
              : exp.isAcademic
              ? "bg-accent border-accent"
              : "bg-muted-foreground/40 border-muted-foreground/40"
          }`}
        />
      </div>

      {/* Card with 3D tilt */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "translateY(-4px)" : "translateY(0)"}`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`relative rounded-xl border p-6 backdrop-blur-sm cursor-default overflow-hidden
          ${exp.isAcademic
            ? "border-accent/40 bg-accent/5 dark:bg-accent/10"
            : "border-border/60 dark:border-border/40 bg-card/80 dark:bg-card/95"
          }
          ${isHovered ? "shadow-glow" : "shadow-card"}
        `}
      >
        {/* Shimmer overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-xl opacity-20"
            style={{
              background: `radial-gradient(circle at ${50}% ${50}%, hsl(var(--primary) / 0.3), transparent 70%)`,
            }}
          />
        )}

        {/* 3D floating accent on current job */}
        {exp.isCurrent && (
          <span
            className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 animate-pulse"
            style={{ transform: "translateZ(20px)" }}
          >
            ATUAL
          </span>
        )}

        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                {exp.isAcademic ? (
                  <GraduationCap className="h-4 w-4 text-accent flex-shrink-0" />
                ) : (
                  <Briefcase className="h-4 w-4 text-primary flex-shrink-0" />
                )}
                <h3 className="text-lg font-bold leading-tight">{exp.role}</h3>
              </div>
              <p className={`text-sm font-semibold ${exp.isAcademic ? "text-accent" : "text-primary"}`}>
                {exp.company}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full flex-shrink-0">
              <Calendar className="h-3.5 w-3.5" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Bullet descriptions */}
          <ul className="space-y-2">
            {exp.descriptions.map((desc, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                <ChevronRight className={`h-4 w-4 flex-shrink-0 mt-0.5 ${exp.isAcademic ? "text-accent" : "text-primary"}`} />
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          {exp.tech && (
            <p className={`text-xs font-medium pt-1 border-t border-border/40 ${exp.isAcademic ? "text-accent/80" : "text-primary/80"}`}>
              {exp.tech}
            </p>
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
      role: t('experience.monitor.role'),
      company: t('experience.monitor.company'),
      period: t('experience.monitor.period'),
      descriptions: [
        t('experience.monitor.desc1'),
        t('experience.monitor.desc2'),
      ],
      tech: t('experience.monitor.tech'),
      isAcademic: true,
      isCurrent: true,
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
      role: t('experience.brazil.role'),
      company: t('experience.brazil.company'),
      period: t('experience.brazil.period'),
      descriptions: [
        t('experience.brazil.desc1'),
        t('experience.brazil.desc2'),
      ],
      tech: t('experience.brazil.tech'),
    },
    {
      role: t('experience.lucrei.role'),
      company: t('experience.lucrei.company'),
      period: t('experience.lucrei.period'),
      descriptions: [
        t('experience.lucrei.desc1'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background 3D decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
          {t('experience.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 animate-fade-in">
          {t('experience.current')} · 4 {t('experience.title').split(' ')[0] === 'Work' ? 'positions' : 'posições'}
        </p>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[7px] md:left-[7px] top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--muted-foreground)/0.2))",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;