import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge} from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: t('projects.chainmed.title'),
      description: t('projects.chainmed.desc'),
      github: "https://github.com/josiasdev/ChainMed",
      demo: "https://chain-med.vercel.app",
      tags: ['Full Stack', 'React.js', 'Vite', 'TypeScript', 'shadcn/ui', 'Tailwind CSS']
    },
    {
      title: t('projects.monemiitec.title'),
      description: t('projects.monemiitec.desc'),
      github: null,
      demo: 'https://www.monemiitec.com.br',
      tags: ['Full Stack', 'React.js', 'JavaScript']
    },
    {
      title: t('projects.convit3-digital.title'),
      description: t('projects.convit3-digital.desc'),
      github: 'https://github.com/josiasdev/convit3-digital',
      demo: null,
      tags: ['Full Stack', 'Next.js', 'JavaScript', 'TypeScript']
    },
    {
      title: t('projects.sylopay.title'),
      description: t('projects.sylopay.desc'),
      github: 'https://github.com/Sylopay/sylopay',
      demo: null,
      tags: ['Full Stack', 'Web3', 'React.js', 'JavaScript', 'Express.js', 'Stellar']
    },
    {
      title: t('projects.kyra.title'),
      description: t('projects.kyra.desc'),
      github: null,
      demo: 'https://kyra-finance.vercel.app',
      tags: ['Full Stack', 'Next.js', 'Web3', 'AI', 'SUI']
    },
    {
      title: t('projects.heather.title'),
      description: t('projects.heather.desc'),
      github: 'https://github.com/pleasantfinance8/xrp',
      demo: null,
      tags: ['Full Stack', 'Web3', 'AI', 'XRPL']
    },
    {
      title: t('projects.btg.title'),
      description: t('projects.btg.desc'),
      github: 'https://github.com/josiasdev/orderms/',
      demo: null,
      tags: ['Backend', 'Java', 'Spring Boot', 'Microservices']
    },
    {
      title: t('projects.sysagua.title'),
      description: t('projects.sysagua.desc'),
      github: 'https://github.com/CristianoMends/sys-agua',
      demo: null,
      tags: ['Backend', 'Java', 'JavaFx', 'Spring Boot', 'Desktop']
    },
    {
      title: t('projects.innovateacademytech.title'),
      description: t('projects.innovateacademytech.desc'),
      github: 'https://github.com/josiasdev/innovateAcademyTech/',
      demo: null,
      tags: ['Backend', 'Python', 'FastAPI']
    },
    {
      title: t('projects.todolist.title'),
      description: t('projects.todolist.desc'),
      github: 'https://github.com/josiasdev/todo-list',
      demo: null,
      tags: ['Backend', 'Java', 'Spring Boot']
    },
    {
      title: t('projects.investtrackapi.title'),
      description: t('projects.investtrackapi.desc'),
      github: 'https://github.com/josiasdev/InvestTrackAPI',
      demo: null,
      tags: ['Backend', '.NET', 'C#']
    },
    {
      title: t('projects.bookfinderapi.title'),
      description: t('projects.bookfinderapi.desc'),
      github: 'https://github.com/josiasdev/BookFinderApi',
      demo: null,
      tags: ['Backend', '.NET', 'C#']
    },
    {
      title: t('projects.candidatesapi.title'),
      description: t('projects.candidatesapi.desc'),
      github: 'https://github.com/josiasdev/CandidatosAPI',
      demo: null,
      tags: ['Backend', 'Python', 'FastAPI']
    },
    {
      title: t('projects.teste.title'),
      description: t('projects.teste.desc'),
      github: 'https://github.com/josiasdev/teste-estagio',
      demo: null,
      tags: ['Backend', 'Java', 'Python']
    },
    {
      title: t('projects.contratobiblia.title'),
      description: t('projects.contratobiblia.desc'),
      github: 'https://github.com/josiasdev/contrato_biblia',
      demo: null,
      tags: ['Web3', 'Rust', 'Stellar']
    }

  ];

  const categories = [
    { id: 'All', label: t('projects.filters.all') },
    { id: 'Full Stack', label: t('projects.filters.fullstack') },
    { id: 'Backend', label: t('projects.filters.backend') },
    { id: 'Web3', label: t('projects.filters.web3') },
    { id: 'Java', label: t('projects.filters.java') },
    { id: 'Python', label: t('projects.filters.python')},
    { id: 'Rust', label: t('projects.filters.rust') },
    { id: '.NET', label: t('projects.filters.dotnet') },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          {t('projects.title')}
        </h2>

        <div className="flex justify-center flex-wrap gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all"
            >
              {category.label}
            </Button>
          ))}
        </div>

          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
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
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
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
