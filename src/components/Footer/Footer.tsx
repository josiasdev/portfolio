import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "about",      label: t("nav.about") },
    { id: "skills",     label: t("nav.skills") },
    { id: "experience", label: t("nav.experience") },
    { id: "projects",   label: t("nav.projects") },
    { id: "education",  label: t("nav.education") },
    { id: "contact",    label: t("nav.contact") },
  ];

  const socialLinks = [
    {
      href: "https://github.com/josiasdev",
      icon: Github,
      label: "GitHub",
      username: "@josiasdev",
    },
    {
      href: "https://www.linkedin.com/in/josias-batista/",
      icon: Linkedin,
      label: "LinkedIn",
      username: "josias-batista",
    },
    {
      href: "mailto:JBDevSoftware@proton.me",
      icon: Mail,
      label: "Email",
      username: "JBDevSoftware@proton.me",
    },
  ];

  const contactInfo = [
    { icon: Phone, value: "+55 (85) 98231-7976", href: "tel:+5585982317976" },
    { icon: MapPin, value: "Quixadá - Ceará, Brasil", href: null },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/40">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20 dark:bg-secondary/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Josias Batista
              </span>
              {/* Open to work badge */}
              <span className="flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/25 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {t("footer.open")}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>

            {/* Contact info */}
            <div className="space-y-2 pt-1">
              {contactInfo.map(({ icon: Icon, value, href }) =>
                href ? (
                  <a
                    key={value}
                    href={href}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary/70 flex-shrink-0" />
                    <span>{value}</span>
                  </a>
                ) : (
                  <div key={value} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-primary/70 flex-shrink-0" />
                    <span>{value}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-150 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {t("footer.social")}
            </h4>
            <ul className="space-y-3">
              {socialLinks.map(({ href, icon: Icon, label, username }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="p-1.5 rounded-md border border-border/60 group-hover:border-primary/40 group-hover:bg-primary/8 transition-all">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-[11px] font-semibold text-foreground/60 uppercase tracking-wide">{label}</span>
                      <span className="text-xs group-hover:text-primary transition-colors">{username}</span>
                    </span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity ml-auto" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Josias Batista.{" "}
            <span className="opacity-75">{t("footer.rights")}</span>
          </p>

          <p className="text-xs text-muted-foreground/60">
            Made with{" "}
            <span className="text-primary">♥</span>
            {" "}in React + TypeScript
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <span className="hidden sm:inline">Back to top</span>
            <span className="p-1.5 rounded-full border border-border/60 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
