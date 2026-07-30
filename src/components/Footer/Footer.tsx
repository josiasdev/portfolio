import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-8 text-xs font-mono text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[11px]">
        © {currentYear} Francisco Josias da Silva Batista. {t("footer.rights")}
      </p>

      <button
        onClick={scrollToTop}
        className="inline-flex items-center gap-1.5 hover:text-primary transition-colors group text-[11px]"
      >
        <span>{t("footer.backToTop")}</span>
        <ArrowUp className="h-3.5 w-3.5" />
      </button>
    </footer>
  );
};

export default Footer;
