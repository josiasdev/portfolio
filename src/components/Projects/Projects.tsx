import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  github: string | null;
  demo: string | null;
  tags: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLanguage();
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    if (project.github) {
      const repoPath = project.github.replace("https://github.com/", "").replace(/\/$/, "");
      if (repoPath.includes("/")) {
        fetch(`https://api.github.com/repos/${repoPath}`)
          .then(res => res.json())
          .then(data => {
            if (data.stargazers_count !== undefined && data.stargazers_count > 0) {
              setStars(data.stargazers_count);
            }
          })
          .catch(() => {});
      }
    }
  }, [project.github]);

  return (
    <div className="group p-5 rounded border border-border/60 bg-card/30 hover:border-primary/50 transition-colors flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {stars !== null && (
            <div className="flex items-center gap-1 text-[11px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex-shrink-0">
              <Star className="h-3 w-3 fill-amber-500" />
              <span>{stars}</span>
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="space-y-4 pt-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-border/40 text-xs font-mono">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>{t('projects.viewCode')}</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{t('projects.viewDemo')}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: t('projects.coinconut.title'),
      description: t('projects.coinconut.desc'),
      github: "https://github.com/josiasdev/coinconut",
      demo: "https://coinconut-b6qp.vercel.app",
      tags: ['Web3', 'Rust', 'Soroban', 'Stellar', 'Noir (ZK)', 'TypeScript']
    },
    {
      title: t('projects.elociv.title'),
      description: t('projects.elociv.desc'),
      github: "https://github.com/josiasdev/EloCiv",
      demo: "https://github.com/josiasdev/EloCiv",
      tags: ['Web3', 'Rust', 'Soroban', 'Stellar', 'Fastify', 'Docker']
    },
    {
      title: t('projects.chainmed.title'),
      description: t('projects.chainmed.desc'),
      github: "https://github.com/josiasdev/ChainMed",
      demo: "https://chain-med.vercel.app",
      tags: ['Web3', 'Solidity', 'EVM', 'Smart Contracts', 'React.js', 'TypeScript']
    },
    {
      title: t('projects.sylopay.title'),
      description: t('projects.sylopay.desc'),
      github: 'https://github.com/Sylopay/sylopay',
      demo: null,
      tags: ['Web3', 'Rust', 'Soroban', 'Stellar', 'NestJS', 'Docker']
    },
    {
      title: t('projects.tutorcrypto.title'),
      description: t('projects.tutorcrypto.desc'),
      github: "https://github.com/josiasdev/tutor-crypto-ai",
      demo: null,
      tags: ['AI / RAG', 'Python', 'FastAPI', 'Streamlit', 'LangChain', 'Ollama']
    },
    {
      title: t('projects.relatorioaniversariantes.title'),
      description: t('projects.relatorioaniversariantes.desc'),
      github: "https://github.com/josiasdev/RelatorioAniversariantes",
      demo: null,
      tags: ['Backend', 'Java 17', 'Spring Boot', 'Selenium', 'Docker', 'OpenPDF']
    },
    {
      title: t('projects.kyra.title'),
      description: t('projects.kyra.desc'),
      github: null,
      demo: 'https://kyra-finance.vercel.app',
      tags: ['Web3', 'AI Agent', 'Next.js', 'SUI']
    },
    {
      title: t('projects.heather.title'),
      description: t('projects.heather.desc'),
      github: 'https://github.com/pleasantfinance8/xrp',
      demo: null,
      tags: ['Web3', 'AI', 'XRPL', 'NestJS']
    },
    {
      title: t('projects.btg.title'),
      description: t('projects.btg.desc'),
      github: 'https://github.com/josiasdev/orderms/',
      demo: null,
      tags: ['Backend', 'Java 17', 'Spring Boot', 'RabbitMQ', 'MongoDB']
    },
    {
      title: t('projects.sysagua.title'),
      description: t('projects.sysagua.desc'),
      github: 'https://github.com/CristianoMends/sys-agua',
      demo: null,
      tags: ['Backend', 'Java', 'Spring Boot', 'PostgreSQL']
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
      tags: ['Backend', '.NET 8', 'C#']
    },
    {
      title: t('projects.bookfinderapi.title'),
      description: t('projects.bookfinderapi.desc'),
      github: 'https://github.com/josiasdev/BookFinderApi',
      demo: null,
      tags: ['Backend', '.NET 8', 'C#', 'SQL Server']
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
      tags: ['Backend', 'Java', 'Python', 'PostgreSQL']
    },
    {
      title: t('projects.contratobiblia.title'),
      description: t('projects.contratobiblia.desc'),
      github: 'https://github.com/josiasdev/contrato_biblia',
      demo: null,
      tags: ['Web3', 'Rust', 'Stellar Soroban']
    },
    {
      title: t('projects.ponte-pecem-ia-ret.title'),
      description: t('projects.ponte-pecem-ia-ret.desc'),
      github: 'https://github.com/josiasdev/ponte-pecem-ia-ret',
      demo: null,
      tags: ['Backend', 'Python', 'N8n', 'Operations Research']
    },

    {
      title: t('projects.convit3-digital.title'),
      description: t('projects.convit3-digital.desc'),
      github: 'https://github.com/josiasdev/convit3-digital',
      demo: null,
      tags: ['Full Stack', 'Next.js', 'TypeScript']
    }
  ];

  const categories = [
    { id: 'All', label: t('projects.filters.all') },
    { id: 'Web3', label: t('projects.filters.web3') },
    { id: 'Backend', label: t('projects.filters.backend') },
    { id: 'Java', label: t('projects.filters.java') },
    { id: 'Python', label: t('projects.filters.python') },
    { id: 'Rust', label: t('projects.filters.rust') },
    { id: '.NET', label: t('projects.filters.dotnet') },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.tags.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase())));

  const displayedProjects = (!showAll && selectedCategory === 'All')
    ? filteredProjects.slice(0, 4)
    : filteredProjects;

  return (
    <section id="projects" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          04. {t('projects.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 text-xs font-mono">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-1 rounded transition-colors ${
              selectedCategory === category.id
                ? "bg-primary text-primary-foreground font-semibold"
                : "border border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {selectedCategory === 'All' && (
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="font-mono text-xs border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded gap-2"
          >
            <span>
              {showAll
                ? t('projects.showLess')
                : t('projects.showAll', { count: projects.length })}
            </span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`} />
          </Button>
        </div>
      )}
    </section>
  );
};

export default Projects;