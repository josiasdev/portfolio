import { useEffect, useState } from "react";
import { useWeb3 } from "@/hooks/useWeb3";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldAlert, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Web3EasterEgg = () => {
  const { isConnected, account } = useWeb3();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    if (isConnected && account && !hasSeen) {
      // Small delay for dramatic effect
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasSeen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isConnected, account, hasSeen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative w-full max-w-lg mx-4 bg-[#0a0a0a] border border-[#333] rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#333]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-500" />
            <span className="text-xs font-mono text-green-500">system_auth.exe</span>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm space-y-5">
          <div className="flex items-center gap-3 text-green-500">
            <ShieldAlert className="w-8 h-8 animate-pulse" />
            <h3 className="text-xl font-bold tracking-wider">{t('web3.secret.title')}</h3>
          </div>
          
          <div className="space-y-2 text-green-400/80">
            <p>{'>'} INITIALIZING DECENTRALIZED PROTOCOL...</p>
            <p>{'>'} VERIFYING SIGNATURE FOR: <span className="text-white">{account}</span></p>
            <p>{'>'} STATUS: <span className="text-green-500 font-bold">CONFIRMED</span></p>
          </div>

          <div className="pt-2">
            <p className="text-gray-300 leading-relaxed font-sans mb-4">
              {t('web3.secret.desc')}
            </p>
            
            {/* SyloPay Feature Block */}
            <div className="border border-green-500/30 bg-green-500/5 p-4 rounded-md space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-green-500/70 mb-1">{'// DECRYPTED_FILE: PROJECT_SYLOPAY'}</p>
                  <h4 className="text-lg font-bold text-green-400">SyloPay (Stellar Network)</h4>
                </div>
                <span className="px-2 py-1 bg-green-500/20 text-green-500 text-[10px] rounded animate-pulse">
                  CLASSIFIED
                </span>
              </div>
              
              <p className="text-gray-400 text-sm">
                A Buy Now, Pay Later (BNPL) platform built on the Stellar blockchain, enabling instant merchant settlements using Smart Contracts.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {['NestJS', 'Stellar SDK', 'PostgreSQL', 'Docker'].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-black border border-[#333] rounded text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-3">
                <a 
                  href="https://github.com/Sylopay/sylopay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 hover:underline transition-all"
                >
                  {'>'} ACCESS_SOURCE_CODE
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button 
              onClick={() => setIsVisible(false)}
              className="bg-green-500/20 text-green-500 hover:bg-green-500/30 border border-green-500/50 rounded-md font-mono transition-colors"
            >
              ACKNOWLEDGE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3EasterEgg;
