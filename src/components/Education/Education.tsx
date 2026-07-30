import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Languages, Award, ExternalLink } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url: string;
  badge: string;
};

const Education = () => {
  const { t } = useLanguage();

  const certifications: Certification[] = [
    {
      title: "Capacitação Tecnológica em Web 3.0",
      issuer: "iRede",
      date: "Jun 2026",
      url: "https://drive.google.com/file/d/1WB9yWFHvYsdtNoV0LXNRpZQPIryYZgav/view",
      badge: "Web3 & Blockchain"
    },
    {
      title: "Certificado de Sócio Fundador — Agentic Space",
      issuer: "Raport Tecnologia Inova Simples",
      date: "Jul 2026",
      credentialId: "AS-137-4",
      url: "https://www.linkedin.com/in/josias-batista/overlay/Certifications/209062227/treasury/?profileId=ACoAADnqZncBUzTfdZK0BqbCV8dFSKcjpH31FHw",
      badge: "Founder & AI"
    },
    {
      title: "Cyfrin Updraft - Smart Contract Development",
      issuer: "Cyfrin",
      date: "Jul 2026",
      url: "https://updraft.cyfrin.io/courses",
      badge: "Smart Contracts"
    },
    {
      title: "AWS re/Start Graduate",
      issuer: "Amazon Web Services (AWS)",
      date: "Dez 2025",
      url: "https://www.credly.com/badges/0e0ae80e-3407-4b8c-bd9e-88879ca24b07/public_url",
      badge: "Cloud & AWS"
    },
    {
      title: "Workshop Certificate como Sui Developer",
      issuer: "WayLearn",
      date: "Set 2025",
      url: "https://drive.google.com/file/d/1yggIj01RTYXEKQ5U78RSWkg9sHkwGOzb/view",
      badge: "Sui Blockchain"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Ago 2025",
      url: "https://www.credly.com/badges/ce7c99f6-6627-44d3-a8ed-6e30373ab8ae/public_url",
      badge: "Cloud Foundations"
    },
    {
      title: "Hack Together: AI Agents Hackathon",
      issuer: "Microsoft",
      date: "Jun 2025",
      url: "https://www.credly.com/badges/524e19d6-a3fe-4e14-99ee-08559c963abd/linked_in_profile",
      badge: "AI Agents"
    },
    {
      title: "Aulão: comece na Web3",
      issuer: "Instituto Web3EduBrasil",
      date: "Jun 2025",
      url: "https://drive.google.com/file/d/1OuJVnirj92zNrAt_867EnQ0n2DRio908/view",
      badge: "Web3 Fundamentals"
    },
    {
      title: "Imersão Dev Back-End",
      issuer: "Alura",
      date: "Dez 2024",
      credentialId: "6f6262bf-8132-418d-99b4-d2f4e9622f13",
      url: "https://cursos.alura.com.br/immersion/certificate/6f6262bf-8132-418d-99b4-d2f4e9622f13?lang",
      badge: "Backend Node/Java"
    },
    {
      title: "Expolog Hack 2024",
      issuer: "Instituto AmiGU",
      date: "Nov 2024",
      url: "https://drive.google.com/file/d/1gYXi1GIFNhxTGhYuaEW16imI-AlTIp0j/view",
      badge: "Hackathon & Logistics"
    },
    {
      title: "Lógica de Programação JavaScript",
      issuer: "DIO",
      date: "Out 2024",
      credentialId: "EALKZPLT",
      url: "https://hermes.dio.me/certificates/EALKZPLT.pdf",
      badge: "Algorithms"
    },
    {
      title: "STRONGER 8.0 - Batalhão Linux LPI - 010-160",
      issuer: "Grupo Utah",
      date: "Fev 2024",
      url: "https://drive.google.com/file/d/18UBRbvopqsELNkSebPf2N0lpuI-DGWja/view",
      badge: "Linux & Security"
    },
    {
      title: "Imersão Front-End",
      issuer: "Alura",
      date: "Fev 2024",
      credentialId: "f1d24982-b9c1-409c-a131-7acba541e0e2",
      url: "https://cursos.alura.com.br/immersion/certificate/f1d24982-b9c1-409c-a131-7acba541e0e2",
      badge: "React & Web"
    }
  ];

  return (
    <section id="education" className="py-20 border-t border-border/40 bg-card/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif animate-fade-in">
          {t('education.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-start mb-12">
          {/* Bachelor's Degree */}
          <div className="animate-fade-in group flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">{t('education.degree')}</h3>
            </div>
            <div className="space-y-1.5 pl-1">
              <p className="text-sm text-muted-foreground font-medium">{t('education.university')}</p>
              <p className="text-sm text-primary font-semibold">{t('education.graduation')}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed whitespace-pre-wrap">
                {t('education.university.desc')}
              </p>
            </div>
          </div>

          {/* Technical Course */}
          <div className="animate-fade-in group flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:bg-card/60 dark:hover:bg-card/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle h-full" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">{t('education.technical')}</h3>
            </div>
            <div className="space-y-1.5 pl-1">
              <p className="text-sm text-muted-foreground font-medium">{t('education.school')}</p>
              <p className="text-sm text-primary font-semibold">{t('education.completed')}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed whitespace-pre-wrap">
                {t('education.school.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Card — full width */}
        <div className="animate-fade-in group mb-12 flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:border-primary/40 transition-all duration-300" style={{ animationDelay: '0.15s' }}>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">
                  {t('education.certifications.title')}
                </h3>
                <p className="text-xs text-muted-foreground font-medium">13 Credenciais & Certificações Verificáveis</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col justify-between p-4 rounded-2xl bg-background/60 border border-border/40 hover:border-primary/40 hover:bg-background/90 transition-all duration-200">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-bold tracking-wider uppercase border border-primary/20">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium">{cert.date}</span>
                  </div>
                  
                  <h4 className="text-sm font-bold text-foreground leading-snug font-serif">{cert.title}</h4>
                  
                  <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>
                  
                  {cert.credentialId && (
                    <p className="text-[10px] text-muted-foreground font-mono bg-muted/40 px-2 py-0.5 rounded w-fit">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                <div className="pt-3 mt-3 border-t border-border/30">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>Ver credencial</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages — full width */}
        <div className="animate-fade-in group flex flex-col p-6 md:p-8 rounded-3xl border border-border/40 bg-card/30 dark:bg-card/10 hover:border-accent/40 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
              <Languages className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold font-serif group-hover:text-accent transition-colors">{t('education.languages')}</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: t('education.portuguese'), color: 'bg-primary' },
              { label: t('education.english'), color: 'bg-accent' },
              { label: t('education.spanish'), color: 'bg-primary/60' },
            ].map(({ label, color }) => (
              <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/40">
                <div className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${color}`} />
                <span className="text-sm text-muted-foreground font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;