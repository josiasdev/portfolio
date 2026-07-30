import { useLanguage } from "@/contexts/LanguageContext";

type LanguageItem = {
  nameKey: string;
  levelKey: string;
  flag: string;
  descKey: string;
};

const LanguagesSection = () => {
  const { t } = useLanguage();

  const langList: LanguageItem[] = [
    {
      nameKey: 'education.portuguese',
      levelKey: 'languages.pt.level',
      flag: '🇧🇷',
      descKey: 'languages.pt.desc'
    },
    {
      nameKey: 'education.english',
      levelKey: 'languages.en.level',
      flag: '🇺🇸',
      descKey: 'languages.en.desc'
    },
    {
      nameKey: 'education.spanish',
      levelKey: 'languages.es.level',
      flag: '🇪🇸',
      descKey: 'languages.es.desc'
    }
  ];

  return (
    <section id="languages" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          08. {t('languages.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {langList.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded border border-border/60 bg-card/30 hover:border-primary/50 transition-colors space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xl">{item.flag}</span>
              <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                {t(item.levelKey)}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-foreground">
              {t(item.nameKey)}
            </h3>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {t(item.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
