import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

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
      title: t('certifications.irede.title'),
      issuer: "iRede",
      date: "2026",
      url: "https://drive.google.com/file/d/1WB9yWFHvYsdtNoV0LXNRpZQPIryYZgav/view",
      badge: "Web3 & Blockchain"
    },
    {
      title: t('certifications.agentic.title'),
      issuer: t('certifications.agentic.issuer'),
      date: "2026",
      credentialId: "AS-137-4",
      url: "https://www.linkedin.com/in/josias-batista/overlay/Certifications/209062227/treasury/?profileId=ACoAADnqZncBUzTfdZK0BqbCV8dFSKcjpH31FHw",
      badge: "Founder & AI"
    },
    {
      title: t('certifications.cyfrin.title'),
      issuer: "Cyfrin",
      date: "2026",
      url: "https://updraft.cyfrin.io/courses",
      badge: "Smart Contracts"
    },
    {
      title: t('certifications.awsrestart.title'),
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      url: "https://www.credly.com/badges/0e0ae80e-3407-4b8c-bd9e-88879ca24b07/public_url",
      badge: "Cloud AWS"
    },
    {
      title: t('certifications.sui.title'),
      issuer: "WayLearn",
      date: "2025",
      url: "https://drive.google.com/file/d/1yggIj01RTYXEKQ5U78RSWkg9sHkwGOzb/view",
      badge: "Sui Blockchain"
    },
    {
      title: t('certifications.awsacademy.title'),
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      url: "https://www.credly.com/badges/ce7c99f6-6627-44d3-a8ed-6e30373ab8ae/public_url",
      badge: "Cloud Foundations"
    },
    {
      title: t('certifications.microsoft.title'),
      issuer: "Microsoft",
      date: "2025",
      url: "https://www.credly.com/badges/524e19d6-a3fe-4e14-99ee-08559c963abd/linked_in_profile",
      badge: "AI Agents"
    },
    {
      title: t('certifications.web3edu.title'),
      issuer: t('certifications.web3edu.issuer'),
      date: "2025",
      url: "https://drive.google.com/file/d/1OuJVnirj92zNrAt_867EnQ0n2DRio908/view",
      badge: "Web3 Fundamentals"
    },
    {
      title: t('certifications.alura.title'),
      issuer: "Alura",
      date: "2024",
      credentialId: "6f6262bf-8132-418d-99b4-d2f4e9622f13",
      url: "https://cursos.alura.com.br/immersion/certificate/6f6262bf-8132-418d-99b4-d2f4e9622f13?lang",
      badge: "Backend Node/Java"
    },
    {
      title: t('certifications.utah.title'),
      issuer: "Grupo Utah",
      date: "2024",
      url: "https://drive.google.com/file/d/18UBRbvopqsELNkSebPf2N0lpuI-DGWja/view",
      badge: "Linux LPI"
    }
  ];

  return (
    <section id="certifications" className="scroll-mt-16 space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
          07. {t('education.certifications.title')}
        </h2>
        <div className="h-px bg-border flex-1 max-w-xs" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group p-4 rounded border border-border/60 bg-card/30 hover:border-primary/50 transition-colors space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  {cert.badge}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
              </div>

              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                {cert.title}
              </h3>

              <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>

              {cert.credentialId && (
                <p className="text-[10px] text-muted-foreground font-mono bg-muted/40 px-2 py-0.5 rounded w-fit">
                  ID: {cert.credentialId}
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-border/40">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
              >
                <span>{t('certifications.viewCredential')}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
