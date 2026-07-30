import { useLanguage } from "@/contexts/LanguageContext";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  descriptions: string[];
  tech?: string;
  isCurrent?: boolean;
};

const Experience = () => {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
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
    <section id="experience" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          03. {t('experience.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative grid sm:grid-cols-8 gap-2 sm:gap-4 p-4 rounded border border-transparent hover:border-border/60 hover:bg-card/30 transition-colors"
          >
            {/* Left: Period */}
            <header className="sm:col-span-2 text-xs font-mono font-medium text-muted-foreground uppercase pt-0.5">
              {exp.period}
            </header>

            {/* Right: Content */}
            <div className="sm:col-span-6 space-y-3">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                <span>{exp.role}</span>
                <span className="text-muted-foreground font-normal">·</span>
                <span className="text-muted-foreground font-medium">{exp.company}</span>
              </h3>

              <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
                {exp.descriptions.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-mono select-none">›</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tech.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;