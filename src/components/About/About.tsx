import { useLanguage } from "@/contexts/LanguageContext";
import { Server, Globe2, MonitorSmartphone, Database } from "lucide-react";
import LinkedInBadge from "./LinkedInBadge";

const About = () => {
  const { t } = useLanguage();

  const bentoItems = [
    {
      icon: Server,
      title: t('about.bento.backend'),
      desc: t('about.bento.backend_desc'),
      color: "text-primary"
    },
    {
      icon: Globe2,
      title: t('about.bento.web3'),
      desc: t('about.bento.web3_desc'),
      color: "text-accent"
    },
    {
      icon: MonitorSmartphone,
      title: t('about.bento.frontend'),
      desc: t('about.bento.frontend_desc'),
      color: "text-primary/70"
    },
    {
      icon: Database,
      title: t('about.bento.database'),
      desc: t('about.bento.database_desc'),
      color: "text-accent/70"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Story Block */}
          <div className="lg:col-span-5 bg-card/40 dark:bg-card/20 border border-border/40 p-8 md:p-10 rounded-3xl flex flex-col justify-center hover:border-primary/30 transition-all duration-300 animate-fade-in group">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 group-hover:text-primary transition-colors">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {t('about.summary')}
            </p>
            
            <LinkedInBadge />
          </div>

          {/* Bento Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {bentoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/30 dark:bg-card/10 border border-border/40 p-6 md:p-8 rounded-3xl flex flex-col gap-4 hover:bg-card/60 dark:hover:bg-card/40 hover:border-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle group"
                >
                  <div className="bg-background/80 w-12 h-12 rounded-2xl flex items-center justify-center border border-border/50 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 font-serif">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;