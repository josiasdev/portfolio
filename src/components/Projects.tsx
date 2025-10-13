import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.sylopay.title'),
      subtitle: t('projects.sylopay.subtitle'),
      description: t('projects.sylopay.desc'),
      github: 'https://github.com/Sylopay/sylopay',
      demo: null,
    },
    {
      title: t('projects.kyra.title'),
      subtitle: t('projects.kyra.subtitle'),
      description: t('projects.kyra.desc'),
      github: null,
      demo: 'https://kyra-finance.vercel.app',
    },
    {
      title: t('projects.heather.title'),
      subtitle: t('projects.heather.subtitle'),
      description: t('projects.heather.desc'),
      github: 'https://github.com/pleasantfinance8/xrp',
      demo: null,
    },
    {
      title: t('projects.btg.title'),
      subtitle: t('projects.btg.subtitle'),
      description: t('projects.btg.desc'),
      github: 'https://github.com/josiasdev/orderms/',
      demo: null,
    },
    {
      title: t('projects.sysagua.title'),
      subtitle: t('projects.sysagua.subtitle'),
      description: t('projects.sysagua.desc'),
      github: 'https://github.com/CristianoMends/sys-agua',
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          {t('projects.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in group border-border/60 dark:border-border/40 bg-card/80 dark:bg-card/95 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3 pt-4 mt-4 border-t border-border">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t('projects.viewCode')}
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t('projects.viewDemo')}
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
