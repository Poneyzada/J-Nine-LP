"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface PreSaveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RELEASE_CONFIG = {
  releaseDate: "2024-05-20",
  coverImage: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2070",
  title: "NOVO SINGLE",
  subtitle: "Em breve em todas as plataformas"
};

export default function PreSaveModal({ isOpen, onClose }: PreSaveModalProps) {
  const [isReleased, setIsReleased] = useState(false);
  const [step, setStep] = useState<"platforms" | "community">("platforms");

  useEffect(() => {
    const checkRelease = () => {
      const now = new Date();
      const releaseDate = new Date(RELEASE_CONFIG.releaseDate);
      setIsReleased(now >= releaseDate);
    };
    checkRelease();
  }, []);

  // Reset step when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setStep("platforms"), 300);
    }
  }, [isOpen]);

  const handlePreSave = (url: string) => {
    window.open(url, "_blank");
    setStep("community");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0d0b0a] rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(197,160,89,0.1)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto h-full min-h-[400px] overflow-hidden">
                <div className={`absolute inset-0 transition-transform duration-[3000ms] ease-out scale-110 ${!isReleased ? 'blur-2xl opacity-50' : 'opacity-80'}`}>
                  <Image src={RELEASE_CONFIG.coverImage} alt="Cover" fill className="object-cover" unoptimized />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-transparent to-transparent" />
                
                {!isReleased && (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="bg-white/5 backdrop-blur-2xl px-8 py-4 rounded-3xl border border-white/10 text-center">
                      <span className="text-[10px] font-black tracking-[0.5em] text-[#c5a059] uppercase block mb-1">Pre-Save Ativo</span>
                      <span className="text-xs font-bold text-white/70 uppercase">{new Date(RELEASE_CONFIG.releaseDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-10 md:p-16 flex flex-col justify-center relative bg-gradient-to-br from-white/[0.02] to-transparent">
                <AnimatePresence mode="wait">
                  {step === "platforms" ? (
                    <motion.div
                      key="platforms"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div>
                        <h2 className="text-5xl font-bold tracking-tighter mb-4 text-white uppercase italic">{RELEASE_CONFIG.title}</h2>
                        <p className="text-[#c5a059] text-base font-bold uppercase tracking-widest opacity-80">{RELEASE_CONFIG.subtitle}</p>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-white/30 tracking-[0.3em] uppercase mb-6">Selecione sua plataforma</p>
                        <button 
                          onClick={() => handlePreSave("#")} 
                          className="w-full py-5 bg-[#1DB954] text-black font-black rounded-2xl flex items-center justify-center hover:scale-[1.02] transition-all shadow-xl shadow-[#1DB954]/20 uppercase tracking-widest text-xs"
                        >
                           Pre-Save no Spotify
                        </button>
                        <button 
                          onClick={() => handlePreSave("#")} 
                          className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center hover:scale-[1.02] transition-all shadow-xl uppercase tracking-widest text-xs"
                        >
                           Pre-Save na Apple Music
                        </button>
                        <button 
                          onClick={() => handlePreSave("#")} 
                          className="w-full py-5 bg-[#000000] border border-white/20 text-white font-black rounded-2xl flex items-center justify-center hover:scale-[1.02] transition-all shadow-xl uppercase tracking-widest text-xs"
                        >
                           Pre-Save na Deezer
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="community"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div>
                        <div className="w-16 h-1 bg-[#c5a059] mb-8 rounded-full" />
                        <h2 className="text-4xl font-bold tracking-tighter mb-4 text-white uppercase">Pre-save <br/><span className="text-[#c5a059]">Confirmado!</span></h2>
                        <p className="text-white/50 text-base leading-relaxed">Não pare por aqui. Entre para as comunidades oficiais do <span className="text-white font-bold">Jottanine</span> e receba spoilers, bastidores e sorteios exclusivos.</p>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-[#c5a059] tracking-[0.3em] uppercase mb-6">Entrar para o Inner Circle</p>
                        <a href="https://wa.me/..." target="_blank" className="w-full py-5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-black rounded-2xl flex items-center justify-center hover:bg-[#25D366] hover:text-black transition-all uppercase tracking-widest text-xs">
                           Comunidade no WhatsApp
                        </a>
                        <a href="https://t.me/..." target="_blank" className="w-full py-5 bg-[#24A1DE]/10 border border-[#24A1DE]/20 text-[#24A1DE] font-black rounded-2xl flex items-center justify-center hover:bg-[#24A1DE] hover:text-black transition-all uppercase tracking-widest text-xs">
                           Canal no Telegram
                        </a>
                        <a href="https://discord.gg/..." target="_blank" className="w-full py-5 bg-[#5865F2]/10 border border-[#5865F2]/20 text-[#5865F2] font-black rounded-2xl flex items-center justify-center hover:bg-[#5865F2] hover:text-black transition-all uppercase tracking-widest text-xs">
                           Server no Discord
                        </a>
                      </div>

                      <button 
                        onClick={() => setStep("platforms")}
                        className="text-[10px] text-white/30 uppercase tracking-widest font-black hover:text-white transition-colors block w-full text-center"
                      >
                        ← Voltar para plataformas
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
