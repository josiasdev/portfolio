import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Check } from "lucide-react";

type LangOption = {
  code: 'pt' | 'en' | 'es';
  label: string;
  nativeLabel: string;
  flag: string;
};

const languages: LangOption[] = [
  { code: 'pt', label: 'Português', nativeLabel: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'English',   nativeLabel: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'Español',   nativeLabel: 'ES', flag: '🇪🇸' },
];

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language) ?? languages[1];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`
          flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium
          border transition-all duration-200 select-none
          ${open
            ? "border-primary/60 bg-primary/10 text-primary"
            : "border-border/60 hover:border-primary/40 hover:bg-secondary/60 text-foreground"
          }
        `}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.nativeLabel}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="
            absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 top-full mt-2 w-44 z-50
            rounded-xl border border-border/60 dark:border-border/40
            bg-background/95 dark:bg-card/98 backdrop-blur-lg
            shadow-[0_8px_30px_hsl(0_0%_0%/0.12)] dark:shadow-[0_8px_30px_hsl(0_0%_0%/0.4)]
            overflow-hidden
            animate-scale-in origin-top lg:origin-top-right
          "
        >
          {/* Header */}
          <div className="px-3 pt-2.5 pb-1.5 border-b border-border/40">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Language / Idioma
            </p>
          </div>

          {/* Options */}
          <ul className="py-1.5">
            {languages.map((lang) => {
              const isActive = lang.code === language;
              return (
                <li key={lang.code}>
                  <button
                    role="option"
                    aria-selected={isActive}
                    onClick={() => {
                      setLanguage(lang.code);
                      setOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 text-sm
                      transition-all duration-150 cursor-pointer
                      ${isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-secondary/60 text-foreground"
                      }
                    `}
                  >
                    <span className="text-xl leading-none w-7 text-center">{lang.flag}</span>
                    <span className="flex-1 text-left font-medium">{lang.label}</span>
                    {isActive && (
                      <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;