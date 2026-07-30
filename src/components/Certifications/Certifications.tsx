import { useLanguage } from "@/contexts/LanguageContext";
import { Award, ExternalLink } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url: string;
  badge: string;
};

const Certifications = () => {
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
    <section id="certifications" className="py-20 border-t border-border/40 bg-card/20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="h-4 w-4" />
            <span>Credenciais Verificadas</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-foreground">
            {t('education.certifications.title')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Certificações oficiais em Blockchain, Cloud AWS, Inteligência Artificial, Linux e Desenvolvimento Backend.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-3xl border border-border/40 bg-card/50 dark:bg-card/20 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-glow group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase border border-primary/20">
                    {cert.badge}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{cert.date}</span>
                </div>

                <h3 className="text-base font-bold text-foreground leading-snug font-serif group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>

                {cert.credentialId && (
                  <p className="text-[11px] text-muted-foreground font-mono bg-muted/40 px-2.5 py-1 rounded-md w-fit border border-border/40">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-border/30">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Ver credencial</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
