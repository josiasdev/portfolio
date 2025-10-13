import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'francisco.batista67@alu.ufc.br',
      href: 'mailto:francisco.batista67@alu.ufc.br',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+55 (85) 98231-7976',
      href: 'tel:+5585982317976',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Quixadá - Ceará, Brazil',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-8">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-subtle transition-all hover:-translate-y-1 animate-scale-in border-border/60 dark:border-border/40 bg-card/80 dark:bg-card/95 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.href ? (
                  <a href={item.href} className="space-y-3 block group">
                    <div className="p-3 rounded-lg bg-gradient-primary w-fit mx-auto group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-gradient-primary w-fit mx-auto">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
