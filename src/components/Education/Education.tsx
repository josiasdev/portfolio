import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Languages } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif animate-fade-in">
          {t('education.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Bachelor's Degree */}
          <div className="animate-fade-in group flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">{t('education.degree')}</h3>
            </div>
            <div className="space-y-1.5 pl-1">
              <p className="text-sm text-muted-foreground font-medium">{t('education.university')}</p>
              <p className="text-sm text-primary font-semibold">{t('education.graduation')}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed whitespace-pre-wrap">
                {t('education.university.desc')}
              </p>
            </div>
          </div>

          {/* Technical Course */}
          <div className="animate-fade-in group flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle h-full" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">{t('education.technical')}</h3>
            </div>
            <div className="space-y-1.5 pl-1">
              <p className="text-sm text-muted-foreground font-medium">{t('education.school')}</p>
              <p className="text-sm text-primary font-semibold">{t('education.completed')}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed whitespace-pre-wrap">
                {t('education.school.desc')}
              </p>
            </div>
          </div>

          {/* Cyfrin Updraft */}
          <div className="animate-fade-in group flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle md:col-span-2" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">
                <a href="https://updraft.cyfrin.io/courses" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {t('education.cyfrin.title')}
                </a>
              </h3>
            </div>
            <div className="space-y-1.5 pl-1">
              <p className="text-sm text-muted-foreground font-medium">{t('education.cyfrin.type')}</p>
              <p className="text-sm text-primary font-semibold">{t('education.cyfrin.date')}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {t('education.cyfrin.desc')}
              </p>
            </div>
          </div>

          {/* Languages — full width */}
          <div className="animate-fade-in group md:col-span-2 flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-accent/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <Languages className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold font-serif group-hover:text-accent transition-colors">{t('education.languages')}</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: t('education.portuguese'), color: 'bg-primary' },
                { label: t('education.english'), color: 'bg-accent' },
                { label: t('education.spanish'), color: 'bg-primary/60' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/40">
                  <div className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${color}`} />
                  <span className="text-sm text-muted-foreground font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;