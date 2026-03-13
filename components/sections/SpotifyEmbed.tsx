"use client";

import { motion } from "framer-motion";

export default function SpotifyEmbed() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#111111]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1DB954]/5 blur-[100px] rounded-full" />
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            
            <div className="md:w-1/3 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/20 text-[#1DB954] text-xs font-bold tracking-widest uppercase">
                Spotify Official
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">OUÇA O SOM DO MOMENTO</h2>
              <p className="text-white/60 leading-relaxed font-outfit">
                Explore a playlist oficial do JOTTANINE. Todas as composições, lançamentos e referências em um só lugar.
              </p>
              <a 
                href="https://open.spotify.com/user/31yspvh5mwsopagom4m7zxc6antm?si=Bk8s-LqyQqqoBOHnr6Pshw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold hover:text-[#1DB954] transition-colors"
              >
                SEGUIR PERFIL <span className="text-[#1DB954]">→</span>
              </a>
            </div>

            <div className="md:w-2/3 w-full">
              <iframe 
                style={{ borderRadius: "12px" }} 
                src="https://open.spotify.com/embed/user/31yspvh5mwsopagom4m7zxc6antm?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
