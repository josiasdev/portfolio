import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Star } from "lucide-react";

type Project = {
  title: string;
  description: string;
  github: string | null;
  demo: string | null;
  tags: string[];
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { t } = useLanguage();
  const [stars, setStars] = useState<number | null>(null);

  // Dynamic GitHub Stars Fetching
  useEffect(() => {
    if (project.github) {
      const repoPath = project.github.replace("https://github.com/", "").replace(/\/$/, "");
      if (repoPath.includes("/")) {
        fetch(`https://api.github.com/repos/${repoPath}`)
          .then(res => res.json())
          .then(data => {
            if (data.stargazers_count !== undefined) {
              setStars(data.stargazers_count);
            }
          })
          .catch(() => {});
      }
    }
  }, [project.github]);

  // Tag Overflow Management
  const MAX_TAGS = 3;
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenTagsCount = project.tags.length - MAX_TAGS;

  return (
    <div
      className="animate-fade-in flex flex-col group h-full w-full"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative flex flex-col flex-1 p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 overflow-hidden hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle backdrop-blur-sm">
        
        <div className="space-y-4 flex-1 flex flex-col relative z-10">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl md:text-2xl font-bold font-serif group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            {stars !== null && stars > 0 && (
              <div className="flex items-center gap-1 text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 flex-shrink-0 mt-1">
                <Star className="h-3 w-3 fill-amber-500" />
                <span>{stars}</span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mt-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40 mt-4">
            {visibleTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary/10 transition-colors cursor-default border-border/40 bg-secondary/50">
                {tag}
              </Badge>
            ))}
            {hiddenTagsCount > 0 && (
              <Badge variant="outline" className="text-xs text-muted-foreground border-border/40">
                +{hiddenTagsCount}
              </Badge>
            )}
          </div>
        </div>

        {/* Buttons are responsive: stacked on small screens if both exist, side-by-side on larger screens */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 relative z-10 mt-auto">
          {project.github && (
            <Button variant="outline" size="sm" asChild className="flex-1 hover:border-primary/50 transition-all text-xs font-semibold h-9 rounded-full">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5 mr-2" />
                {t('projects.viewCode')}
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" asChild className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground transition-all text-xs font-semibold h-9 rounded-full">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5 mr-2" />
                {t('projects.viewDemo')}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
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
      tags: ['Full Stack', 'Web3', 'React.js', 'Express.js', 'Stellar']
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
      tags: ['Backend', 'Java', 'JavaFx', 'Spring Boot']
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
    },
    {
      title: t('projects.ponte-pecem-ia-ret.title'),
      description: t('projects.ponte-pecem-ia-ret.desc'),
      github: 'https://github.com/josiasdev/ponte-pecem-ia-ret',
      demo: null,
      tags: ['Backend', 'Python', 'N8n']
    }
  ];

  const categories = [
    { id: 'All', label: t('projects.filters.all') },
    { id: 'Full Stack', label: t('projects.filters.fullstack') },
    { id: 'Backend', label: t('projects.filters.backend') },
    { id: 'Web3', label: t('projects.filters.web3') },
    { id: 'Java', label: t('projects.filters.java') },
    { id: 'Python', label: t('projects.filters.python') },
    { id: 'Rust', label: t('projects.filters.rust') },
    { id: '.NET', label: t('projects.filters.dotnet') },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.tags.some(t => t.toLowerCase() === selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 font-serif animate-fade-in">
          {t('projects.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-10 animate-fade-in">
          {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''}
        </p>

        {/* Filter buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-subtle scale-105"
                  : "border border-border/40 hover:border-primary/40 hover:bg-card/50 text-muted-foreground hover:text-foreground bg-card/30 backdrop-blur-sm"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0">
          {filteredProjects.map((project, index) => (
            <div key={`${project.title}-${selectedCategory}`} className="w-[85vw] sm:w-[350px] md:w-auto flex-none snap-center flex flex-col items-stretch">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;