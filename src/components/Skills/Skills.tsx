import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Database, Cloud, Blocks, Palette, Wrench, SquareCode } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <div
      className="animate-fade-in group h-full"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="relative p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 backdrop-blur-sm h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-subtle">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="p-3.5 rounded-2xl bg-background/80 border border-border/50 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 w-fit">
            <category.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-serif">{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border/40 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary/30 cursor-default"
              style={{ transitionDelay: `${i * 15}ms` }}
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
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            {t('skills.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;