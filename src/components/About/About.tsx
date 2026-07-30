import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          01. {t("about.title")}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed space-y-3">
        {t("about.summary")
          .split("\n\n")
          .map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
      </div>
    </section>
  );
};

export default About;