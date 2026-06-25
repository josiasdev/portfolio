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
        <div className="p-6 font-mono text-sm space-y-4">
          <div className="flex items-center gap-3 text-green-500">
            <ShieldAlert className="w-8 h-8 animate-pulse" />
            <h3 className="text-xl font-bold tracking-wider">{t('web3.secret.title')}</h3>
          </div>
          
          <div className="space-y-2 text-green-400/80">
            <p>{'>'} INITIALIZING DECENTRALIZED PROTOCOL...</p>
            <p>{'>'} VERIFYING SIGNATURE FOR: <span className="text-white">{account}</span></p>
            <p>{'>'} STATUS: <span className="text-green-500 font-bold">CONFIRMED</span></p>
          </div>

          <div className="pt-4 border-t border-green-900/30">
            <p className="text-gray-300 leading-relaxed font-sans">
              {t('web3.secret.desc')}
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <Button 
              onClick={() => setIsVisible(false)}
              className="bg-green-500/20 text-green-500 hover:bg-green-500/30 border border-green-500/50 rounded-md font-mono"
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
