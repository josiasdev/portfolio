import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          06. {t('education.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="space-y-4">
        {/* Bachelor's Degree */}
        <div className="group p-5 rounded border border-border/60 bg-card/30 hover:border-primary/50 transition-colors space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {t('education.degree')}
              </h3>
              <p className="text-xs font-medium text-primary flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                <span>{t('education.university')}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground flex-shrink-0">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>2022 — 2027</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Quixadá, Ceará, Brasil</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Bacharelado focado em engenharia de requisitos, arquitetura de microsserviços, qualidade de software (QA), testes e desenvolvimento de sistemas computacionais de alta performance.
          </p>
        </div>

        {/* Technical Course */}
        <div className="group p-5 rounded border border-border/60 bg-card/30 hover:border-primary/50 transition-colors space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {t('education.technical')}
              </h3>
              <p className="text-xs font-medium text-primary flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                <span>{t('education.school')}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground flex-shrink-0">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <span>2019 — 2021</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Aracoiaba, Ceará, Brasil</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Formação técnica sólida em lógica de programação, desenvolvimento web (HTML/CSS, JS, PHP, Java), banco de dados (MySQL) e redes de computadores. Média técnica: 9.67/10.0.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;