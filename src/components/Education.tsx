import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Languages } from "lucide-react";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          {t('education.title')}
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-card transition-all animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{t('education.degree')}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">{t('education.university')}</p>
              <p className="text-sm text-primary font-medium">{t('education.graduation')}</p>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-card transition-all animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{t('education.technical')}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">{t('education.school')}</p>
              <p className="text-sm text-primary font-medium">{t('education.completed')}</p>
            </div>
          </Card>

          <Card className="p-6 md:col-span-2 hover:shadow-card transition-all animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Languages className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{t('education.languages')}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{t('education.portuguese')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-muted-foreground">{t('education.english')}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
