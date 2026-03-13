"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// CONFIG Mock (could be in a separate file)
const RELEASE_CONFIG = {
  releaseDate: "2024-05-20", // ISO format
  coverImage: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=2070",
  title: "NOVO SINGLE",
  subtitle: "Em breve em todas as plataformas"
};

export default function PreSave() {
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
    <section className="relative py-32 flex items-center justify-center bg-[#0d0b0a]">
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#c5a059]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className={`relative aspect-square rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${!isReleased ? 'blur-xl' : ''}`}>
             <Image src={RELEASE_CONFIG.coverImage} alt="Cover" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {!isReleased && (
               <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                  <span className="text-sm font-bold tracking-widest uppercase">DISPONÍVEL EM {new Date(RELEASE_CONFIG.releaseDate).toLocaleDateString('pt-BR')}</span>
               </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-6xl font-bold tracking-tighter mb-4 text-white">{RELEASE_CONFIG.title}</h2>
            <p className="text-[#c5a059] text-xl font-serif italic">{RELEASE_CONFIG.subtitle}</p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6">FAÇA O PRE-SAVE E SEJA O PRIMEIRO A OUVIR</h3>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full px-6 py-4 bg-black border border-white/10 rounded-xl focus:border-[#c5a059] outline-none transition-colors"
                required
              />
              <button className="w-full py-4 bg-[#c5a059] text-black font-bold rounded-xl hover:scale-[1.02] transition-transform">
                 GARANTIR ACESSO ANTECIPADO
              </button>
            </form>
            <p className="text-white/40 text-xs mt-4 text-center">Nenhum login é necessário. Entraremos em contato via e-mail.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
