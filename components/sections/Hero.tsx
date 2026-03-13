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
          className="object-cover opacity-60 grayscale hover:grayscale-0 transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-[#c5a059] font-bold tracking-[0.3em] text-xs mb-6 block uppercase">Official Artist Page</span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 text-white leading-none">
            JOTTA<span className="text-[#c5a059]">NINE</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium text-white/70 max-w-2xl mx-auto leading-relaxed font-outfit px-4">
            Transformando visão em som. Artista, compositor e visionário da <span className="text-white">Carrera's Produções</span>.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#c5a059] text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(197,160,89,0.2)]">
              OUVIR LANÇAMENTO
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all backdrop-blur-md">
              CONTRATAR SHOW
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar Integrated - Better Mobile Grid */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-2xl border-t border-white/10 py-10 z-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-[#c5a059]">150+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Composições</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-[#c5a059]">1M+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Streams</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-[#c5a059]">20+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Colaborações</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold text-[#c5a059]">Carrera</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Produções</div>
          </div>
        </div>
      </div>
    </section>
  );
}
