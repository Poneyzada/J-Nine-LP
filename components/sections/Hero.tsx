"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with J-rosto.jpeg */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/J-rosto.jpeg" 
          alt="JOTTANINE" 
          fill 
          className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-[#c5a059]">
            JOTTANINE
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/80 max-w-2xl mx-auto leading-relaxed font-outfit">
            Artista • Compositor • Visionário
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-[#c5a059] text-black font-bold rounded-full hover:scale-105 transition-transform">
              MAIS RECENTE
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-full transition-colors backdrop-blur-md">
              CONTRATAR SHOW
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar Integrated */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/10 py-8 z-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#c5a059]">150+</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Composições</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#c5a059]">1M+</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Streams</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#c5a059]">20+</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Colaborações</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#c5a059]">01</div>
            <div className="text-xs uppercase tracking-widest text-white/50">Foco Total</div>
          </div>
        </div>
      </div>
    </section>
  );
}
