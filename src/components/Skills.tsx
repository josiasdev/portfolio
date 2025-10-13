import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Database, Cloud, Blocks, Palette, Wrench } from "lucide-react";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.web3'),
      icon: Blocks,
      skills: ['Solidity', 'Rust', 'Move', 'Sui', 'Stellar', 'XRP Ledger'],
    },
    {
      title: t('skills.backend'),
      icon: Code2,
      skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'C#', '.NET', 'Express.js', 'TypeORM'],
    },
    {
      title: t('skills.frontend'),
      icon: Palette,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: t('skills.databases'),
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'],
    },
    {
      title: t('skills.devops'),
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'AWS', 'Git'],
    },
    {
      title: t('skills.additional'),
      icon: Wrench,
      skills: ['Clean Architecture', 'JWT', 'RESTful APIs', 'Agile (Scrum, Kanban)'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border/60 dark:border-border/40 bg-card/80 dark:bg-card/95 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <category.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
