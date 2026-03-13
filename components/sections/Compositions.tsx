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
    <section id="compositions" className="py-32 bg-[var(--background-card)] px-6 relative overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] glow-orb opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#c5a059] mb-4 block">Experiência de Composição</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
              Obras <br/><span className="text-[#c5a059] font-black">Compostas.</span>
            </h2>
            <p className="text-white/40 mt-6 max-w-lg leading-relaxed">
              Letras, métricas e melodias que ganharam voz em diversos artistas do cenário nacional. A assinatura Jotta Nine nos bastidores dos hits.
            </p>
            <div className="flex gap-4 pt-8">
              <a href="#business" className="inline-flex items-center gap-2 px-10 py-4 glass-panel border border-[#c5a059]/30 text-white font-black rounded-full text-[10px] uppercase tracking-[0.15em] hover:bg-[#c5a059] hover:text-black hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(197,160,89,0.1)]">
                Contratar Composição
              </a>
            </div>
          </motion.div>

          <div className="w-full relative z-10">
            <iframe 
              style={{ borderRadius: "2.5rem" }} 
              src="https://open.spotify.com/embed/playlist/2e5286A86YD0qG9systX3C?utm_source=generator&theme=0" 
              width="100%" 
              height="450" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="glass-card border border-white/5 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
