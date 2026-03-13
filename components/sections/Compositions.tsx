"use client";

import { motion } from "framer-motion";
import { PenTool } from "lucide-react";

const compositions = [
  {
    title: "Diamante Bruto",
    artist: "Artista Convidado",
    cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800",
  },
  {
    title: "Sombra do Amanhã",
    artist: "Feat. Especial",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800",
  }
];

export default function Compositions() {
  return (
    <section id="compositions" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.7em] text-[#c5a059]/60 mb-4">Writer Experience</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">Obras <br/><span className="italic text-[#c5a059]">Compostas.</span></h2>
            <p className="text-white/30 mt-6 max-w-lg leading-relaxed">Letras, métricas e melodias que ganharam voz em diversos artistas do cenário nacional.</p>
            <div className="flex gap-4 pt-8">
              <a href="#business" className="inline-flex items-center gap-2 px-10 py-4 bg-[#c5a059] text-black font-black rounded-full text-[11px] uppercase tracking-[0.15em] hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(197,160,89,0.2)]">
                Contratar Composição
              </a>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {compositions.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square relative group overflow-hidden rounded-[2.5rem]"
              >
                <img src={item.cover} alt={item.title} className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between bg-black/40">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur text-[#c5a059]">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Interpretada por {item.artist}</span>
                    <h4 className="text-xl font-black uppercase mt-1 text-white">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
