import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 border-t border-border/40 bg-background relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="h-4 w-4" />
            <span>{t('education.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-foreground">
            {t('education.title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Bachelor's Degree */}
          <div className="flex flex-col justify-between p-8 rounded-3xl border border-border/40 bg-card/40 dark:bg-card/20 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Bacharelado
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                  {t('education.degree')}
                </h3>
                <p className="text-sm font-semibold text-primary mt-1 flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" />
                  <span>{t('education.university')}</span>
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span>{t('education.graduation')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>Quixadá, CE</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2">
                {t('education.university.desc')}
              </p>
            </div>
          </div>

          {/* Technical Course */}
          <div className="flex flex-col justify-between p-8 rounded-3xl border border-border/40 bg-card/40 dark:bg-card/20 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border/40">
                  Ensino Técnico
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                  {t('education.technical')}
                </h3>
                <p className="text-sm font-semibold text-primary mt-1 flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" />
                  <span>{t('education.school')}</span>
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span>{t('education.completed')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>Ceará, BR</span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2">
                {t('education.school.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;