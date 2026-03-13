"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-20 overflow-hidden bg-black">
      {/* BACKGROUND PHOTO (Hand on face) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/J-rosto.jpeg" 
          className="w-full h-full object-cover object-center grayscale opacity-80" 
          alt="J NINE" 
        />
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to bottom, rgba(13,11,10,0.2) 0%, rgba(13,11,10,0.6) 60%, rgba(13,11,10,1) 100%)' }} 
        />
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to right, rgba(13,11,10,0.8) 0%, transparent 50%)' }} 
        />
      </div>

      <div className="relative z-10 max-w-5xl space-y-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] tracking-[0.7em] text-[#c5a059] uppercase"
        >
          Artista & Compositor · Lifestyle
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(4rem,12vw,10rem)] font-black tracking-tighter leading-[0.8] uppercase text-white"
        >
          JOTTA<br/><span className="text-[#c5a059]">NINE.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/50 text-xl md:text-2xl font-serif italic max-w-lg leading-relaxed"
        >
          "A caneta é o meu instrumento.<br/>Do Underground às paradas de sucesso."
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-6"
        >
          <a href="#music" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c5a059] text-white font-black rounded-full text-[10px] tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-[#c5a059]/30">
            Ouça os Lançamentos
          </a>
          <a href="#business" className="inline-flex items-center gap-3 px-10 py-4 border border-white/10 text-white/60 font-black rounded-full text-[10px] tracking-widest uppercase hover:border-[#c5a059] hover:text-white transition-all">
            Booking & Rights
          </a>
        </motion.div>
      </div>
    </header>
  );
}
