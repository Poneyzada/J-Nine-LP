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

  useEffect(() => {
    const checkRelease = () => {
      const now = new Date();
      const releaseDate = new Date(RELEASE_CONFIG.releaseDate);
      setIsReleased(now >= releaseDate);
    };
    checkRelease();
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0d0b0a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto h-full min-h-[300px] overflow-hidden">
                <div className={`absolute inset-0 transition-all duration-1000 ${!isReleased ? 'blur-xl' : ''}`}>
                  <Image src={RELEASE_CONFIG.coverImage} alt="Cover" fill className="object-cover" unoptimized />
                </div>
                {!isReleased && (
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-center">
                      <span className="text-xs font-bold tracking-widest uppercase">DISPONÍVEL EM {new Date(RELEASE_CONFIG.releaseDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="text-4xl font-bold tracking-tighter mb-2 text-white">{RELEASE_CONFIG.title}</h2>
                  <p className="text-[#c5a059] text-lg font-serif italic">{RELEASE_CONFIG.subtitle}</p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-base font-bold text-white/80 tracking-widest uppercase">FAÇA O PRE-SAVE E SEJA O PRIMEIRO A OUVIR</h3>
                  <form className="flex flex-col space-y-4">
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail" 
                      className="w-full px-6 py-4 bg-black border border-white/10 rounded-xl focus:border-[#c5a059] outline-none transition-colors text-white"
                      required
                    />
                    <button className="w-full py-4 bg-[#c5a059] text-black font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-xl">
                       SOLICITAR ACESSO
                    </button>
                  </form>
                  <p className="text-white/40 text-[10px] text-center uppercase tracking-widest">Sem login. Apenas música.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
