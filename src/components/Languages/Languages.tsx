import { useLanguage } from "@/contexts/LanguageContext";
import { Languages as LanguagesIcon, Globe2, CheckCircle2 } from "lucide-react";

type LanguageItem = {
  nameKey: string;
  levelKey: string;
  flag: string;
  statusKey: string;
  descKey: string;
};

const LanguagesSection = () => {
  const { t } = useLanguage();

  const langList: LanguageItem[] = [
    {
      nameKey: 'education.portuguese',
      levelKey: 'languages.pt.level',
      flag: '🇧🇷',
      statusKey: 'languages.pt.level',
      descKey: 'languages.pt.desc'
    },
    {
      nameKey: 'education.english',
      levelKey: 'languages.en.level',
      flag: '🇺🇸',
      statusKey: 'languages.en.level',
      descKey: 'languages.en.desc'
    },
    {
      nameKey: 'education.spanish',
      levelKey: 'languages.es.level',
      flag: '🇪🇸',
      statusKey: 'languages.es.level',
      descKey: 'languages.es.desc'
    }
  ];

  return (
    <section id="languages" className="py-20 border-t border-border/40 bg-background relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <LanguagesIcon className="h-4 w-4" />
            <span>{t('languages.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-foreground">
            {t('languages.title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {t('languages.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {langList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 md:p-8 rounded-3xl border border-border/40 bg-card/40 dark:bg-card/20 hover:border-accent/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.flag}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent font-bold tracking-wider uppercase border border-accent/20">
                    {t(item.statusKey)}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-accent transition-colors">
                    {t(item.nameKey)}
                  </h3>
                  <p className="text-xs text-primary font-semibold mt-1 flex items-center gap-1.5">
                    <Globe2 className="h-3.5 w-3.5" />
                    <span>{t(item.levelKey)}</span>
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-border/30 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{t('languages.card.ready')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
