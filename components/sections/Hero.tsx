"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--background)]">
      {/* BACKGROUND & GLOW ORBS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] glow-orb opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] glow-orb opacity-30" />
      </div>

      {/* FOREGROUND CONTENT GRID (EnDaemu Inspired) */}
      <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-12 h-full">
        
        {/* Left Column: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-[#c5a059] font-bold tracking-[0.3em] text-[10px] uppercase">
            Hub Oficial do Artista
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9] text-white">
            Descubra <br/>
            JOTTA<span className="text-[#c5a059] font-black">NINE.</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/50 max-w-lg leading-relaxed mt-4">
            JOTTANINE é uma experiência musical imersiva que mistura as raízes do underground baiano (BA/BR) com estética premium. Explore singles, composições e contratação de shows.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href="#music" className="px-10 py-4 bg-[#c5a059] text-black font-extrabold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(197,160,89,0.3)] text-xs tracking-widest uppercase">
              Ouvir Agora
            </a>
            <a href="#business" className="group flex items-center gap-3 text-white/70 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
              Contratar <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Image (Hand on face) structured like an NFT feature */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] lg:aspect-square max-h-[80vh] ml-auto animate-float flex justify-center lg:justify-end"
        >
            <div className="relative w-full max-w-md h-full rounded-[3rem] overflow-hidden glass-card">
              <img 
                src="/J-rosto.jpeg" 
                alt="J NINE" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating Badge inside the image */}
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-white/20 glass-panel flex items-center justify-center animate-[spin_10s_linear_infinite]">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-white/70">
                    <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[14px] font-bold uppercase tracking-[4px]" fill="currentColor">
                      <textPath href="#curve">JOTTANINE • ARTISTA ORIGINAL •</textPath>
                    </text>
                 </svg>
                 <div className="absolute w-2 h-2 bg-[#c5a059] rounded-full" />
              </div>

              {/* Stats Footer inside the image */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-3xl p-6 flex justify-between items-center">
                 <div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block mb-1">Plays</span>
                    <span className="text-2xl font-black text-white">1M+</span>
                 </div>
                 <div className="w-px h-10 bg-white/10" />
                 <div>
                    <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest block mb-1">Gravadora</span>
                    <span className="text-xl font-bold text-[#c5a059]">Carrera's</span>
                 </div>
              </div>
            </div>
        </motion.div>
      </div>
    </header>
  );
}
