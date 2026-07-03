import { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    // Injeta o script do LinkedIn apenas uma vez
    const scriptId = 'linkedin-profile-badge-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="mt-8 flex flex-col justify-center lg:justify-start items-center lg:items-start w-full">
      {/* Versão CLARA (Oculta quando o modo escuro está ativo) */}
      <div className="block dark:hidden w-full max-w-[300px]">
        <div 
          className="badge-base LI-profile-badge" 
          data-locale="pt_BR" 
          data-size="large" 
          data-theme="light" 
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

      {/* Versão ESCURA (Exibida apenas quando o modo escuro está ativo) */}
      <div className="hidden dark:block w-full max-w-[300px]">
        <div 
          className="badge-base LI-profile-badge" 
          data-locale="pt_BR" 
          data-size="large" 
          data-theme="dark" 
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
    </div>
  );
};

export default LinkedInBadge;
