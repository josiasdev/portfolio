import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fade-in">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            {t('about.summary')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;