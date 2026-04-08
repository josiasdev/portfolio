import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  github: string | null;
  demo: string | null;
  tags: string[];
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    setTilt({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -7,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 7,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      onMouseEnter={() => setIsHovered(true)}
      className="animate-scale-in flex flex-col"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "translateY(-5px)" : "translateY(0)"}`,
          transition: isHovered ? "transform 0.12s ease-out" : "transform 0.45s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`
          relative flex flex-col flex-1 p-6 rounded-xl border overflow-hidden h-full
          border-border/60 dark:border-border/40 bg-card/80 dark:bg-card/95 backdrop-blur-sm
          ${isHovered ? "shadow-glow" : "shadow-card"}
          transition-shadow duration-300
        `}
      >
        {/* Mouse-follow shimmer */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, hsl(var(--primary) / 0.1), transparent 65%)`,
            }}
          />
        )}

        <div className="space-y-4 flex-1 relative z-10">
          <h3
            className="text-xl font-bold transition-colors duration-200"
            style={{ color: isHovered ? "hsl(var(--primary))" : undefined }}
          >
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4 mt-4 border-t border-border/40 relative z-10">
          {project.github && (
            <Button variant="outline" size="sm" asChild className="flex-1 hover:border-primary hover:text-primary transition-all">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                {t('projects.viewCode')}
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" asChild className="flex-1 bg-gradient-primary hover:opacity-90 transition-all">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
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
    },
    {
      title: t('projects.ponte-pecem-ia-ret.title'),
      description: t('projects.ponte-pecem-ia-ret.desc'),
      github: 'https://github.com/josiasdev/ponte-pecem-ia-ret',
      demo: null,
      tags: ['Backend', 'Python', 'N8n']
    },
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
    : projects.filter(project => project.tags.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          {t('projects.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-10 animate-fade-in">
          {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} · Hover para interagir
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
                  ? "bg-gradient-primary text-white shadow-glow scale-105"
                  : "border border-border/60 hover:border-primary/50 hover:text-primary hover:scale-105 bg-card/50 backdrop-blur-sm"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${selectedCategory}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;