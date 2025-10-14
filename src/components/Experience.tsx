import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('experience.switchpay.role'),
      company: t('experience.switchpay.company'),
      period: t('experience.switchpay.period'),
      description: t('experience.switchpay.desc'),
      tech: t('experience.switchpay.tech'),
    },
    {
      role: t('experience.brazil.role'),
      company: t('experience.brazil.company'),
      period: t('experience.brazil.period'),
      description: t('experience.brazil.desc'),
      tech: t('experience.brazil.tech')
    },
    {
      role: t('experience.lucrei.role'),
      company: t('experience.lucrei.company'),
      period: t('experience.lucrei.period'),
      description: t('experience.lucrei.desc'),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          {t('experience.title')}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-subtle transition-all duration-300 animate-fade-in border-l-4 border-l-primary bg-card/90 dark:bg-card/95 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                {exp.tech && (
                  <p className="text-sm text-primary font-medium">
                    {exp.tech}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
