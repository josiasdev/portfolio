import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Database, Cloud, Blocks, Palette, Wrench } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: string[];
};

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories: SkillCategory[] = [
    {
      title: t('skills.web3'),
      icon: Blocks,
      skills: ['Solidity', 'Foundry', 'Hardhat', 'Ethereum (EVM)', 'Smart Contracts', 'DeFi Primitives', 'Rust', 'Move', 'Sui', 'Stellar (Soroban)'],
    },
    {
      title: t('skills.backend'),
      icon: Code2,
      skills: ['Java 17', 'Spring Boot', 'Node.js', 'NestJS', 'Express.js'],
    },
    {
      title: t('skills.frontend'),
      icon: Palette,
      skills: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'],
    },
    {
      title: t('skills.databases'),
      icon: Database,
      skills: ['PostgreSQL', 'Prisma ORM', 'MySQL', 'MongoDB', 'SQL Server'],
    },
    {
      title: t('skills.devops'),
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'AWS', 'Linux (LPI)', 'Git', 'CI/CD Pipelines'],
    },
    {
      title: t('skills.additional'),
      icon: Wrench,
      skills: ['Clean Architecture', 'SOLID', 'Protocol Design', 'RESTful APIs', 'Oracles', 'Scrum', 'RAG LLMs'],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          02. {t('skills.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="p-4 rounded border border-border/60 bg-card/30 hover:border-border transition-colors space-y-3"
            >
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <Icon className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs">{category.title}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;