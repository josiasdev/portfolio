import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Database, Cloud, Blocks, Palette, Wrench, SquareCode } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: string[];
  gradient?: string;
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
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
    const pctX = (x / rect.width) * 100;
    const pctY = (y / rect.height) * 100;
    setMousePos({ x: pctX, y: pctY });
    setTilt({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -8,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="animate-scale-in"
      style={{
        animationDelay: `${index * 0.08}s`,
        perspective: "800px",
      }}
    >
      <div
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? "translateY(-6px)" : "translateY(0)"}`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          transformStyle: "preserve-3d",
        }}
        className={`
          relative p-6 rounded-xl border border-border/60 dark:border-border/40
          bg-card/80 dark:bg-card/95 backdrop-blur-sm h-full overflow-hidden
          ${isHovered ? "shadow-glow" : "shadow-card"}
          transition-shadow duration-300
        `}
      >
        {/* Mouse-follow shimmer */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, hsl(var(--primary) / 0.12), transparent 60%)`,
            }}
          />
        )}

        <div className="flex items-center gap-3 mb-4 relative">
          <div
            className="p-2 rounded-lg bg-gradient-primary shadow-subtle transition-transform duration-300"
            style={{ transform: isHovered ? "translateZ(20px) scale(1.1)" : "translateZ(0)" }}
          >
            <category.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold">{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground transition-all duration-200 hover:bg-primary/20 hover:text-primary cursor-default"
              style={{
                transitionDelay: `${i * 20}ms`,
                transform: isHovered ? "translateZ(5px)" : "translateZ(0)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      title: t('skills.web3'),
      icon: Blocks,
      skills: ['Solidity', 'Rust', 'Move', 'Sui', 'Stellar', 'XRP Ledger'],
    },
    {
      title: t('skills.backend'),
      icon: Code2,
      skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'C#', '.NET', 'Express.js'],
    },
    {
      title: t('skills.frontend'),
      icon: Palette,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vite', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: t('skills.databases'),
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'],
    },
    {
      title: t('skills.devops'),
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD'],
    },
    {
      title: 'IDEs & Tools',
      icon: SquareCode,
      skills: ['IntelliJ IDEA', 'VS Code', 'Android Studio'],
    },
    {
      title: t('skills.additional'),
      icon: Wrench,
      skills: ['Clean Architecture', 'JWT', 'RESTful APIs', 'Scrum', 'Kanban', 'LLMs'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 animate-fade-in">
          {t('skills.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 animate-fade-in">
          Hover para interagir · Hover to interact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;