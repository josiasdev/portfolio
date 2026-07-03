import { useEffect, useState } from "react";

const LinkedInBadge = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Detect current theme based on HTML class (Tailwind dark mode)
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    updateTheme(); // Initial check

    // Observer to detect class changes on the HTML tag
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // LinkedIn script needs to be re-parsed when the component mounts or theme changes.
    // The easiest way to force LinkedIn to render the badge in React is to load the script dynamically.
    const scriptId = 'linkedin-profile-badge-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    // Se o script já existir, removemos para forçar um re-render do LinkedIn
    if (script) {
      document.body.removeChild(script);
    }

    script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [theme]); // Re-run when theme changes so it re-renders the correct badge

  return (
    <div className="mt-8 flex justify-center lg:justify-start">
      <div 
        className="badge-base LI-profile-badge" 
        data-locale="pt_BR" 
        data-size="large" 
        data-theme={theme} 
        data-type="HORIZONTAL" 
        data-vanity="josias-batista" 
        data-version="v1"
      >
        <a 
          className="badge-base__link LI-simple-link" 
          href="https://br.linkedin.com/in/josias-batista?trk=profile-badge"
        >
          Josias Batista
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
