"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MusicArtwork from "@/components/ui/music-artwork";

type FilterType = 'Todos' | 'Álbum' | 'Single' | 'Feat';

const albums = [
  {
    title: "Luz Púrpura",
    type: "Single" as FilterType,
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800",
    links: { spotify: "#", youtube: "#", apple: "#", deezer: "#" },
    isSong: true,
  },
  {
    title: "Fechamento (part. Jotta Nine)",
    type: "Feat" as FilterType,
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ddf45c5c53aec81dc3b18188",
    links: { spotify: "https://open.spotify.com/track/0oEdCkFMNH2wH0cgeWmS6i", youtube: "https://www.youtube.com/watch?v=ypezb2IZFI4", apple: "#" },
    isSong: true,
  },
  {
    title: "Ciclos",
    type: "Álbum" as FilterType,
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
    links: { spotify: "#", apple: "#", youtube: "#" },
    isSong: false,
  }
];

export default function Discography() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');

  const filteredAlbums = activeFilter === 'Todos' 
    ? albums 
    : albums.filter(a => a.type === activeFilter);

  return (
    <section id="music" className="py-32 relative overflow-hidden bg-[var(--background)]">
      
      {/* Background with J-nine-costa.jpeg acting as a subtle texture */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img 
          src="/J-nine-costa.jpeg" 
          alt="J-NINE" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/70 to-[var(--background)] backdrop-blur-sm" />
      </div>

      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] glow-orb opacity-20 -translate-y-1/2" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#c5a059]">Principais Faixas</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-2 text-white">
              <span className="text-[#c5a059] font-black">Em Alta</span> na Semana.
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-sm leading-relaxed">
              Explore os lançamentos mais recentes criados por Jotta Nine. Não perca as faixas mais tocadas e pedidas nos shows.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex gap-2 p-1.5 glass-panel rounded-2xl flex-wrap"
          >
            {[ 'Todos', 'Álbum', 'Single', 'Feat' ].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as FilterType)}
                className={`px-6 py-2.5 font-bold rounded-xl text-[10px] uppercase tracking-widest transition-all ${
                  activeFilter === filter 
                    ? "bg-[#c5a059] text-black font-extrabold" 
                    : "text-white/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
          <AnimatePresence>
            {filteredAlbums.map((album, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={album.title}
                className="flex flex-col items-center"
              >
                <MusicArtwork 
                  artist="Jotta Nine"
                  music={album.title}
                  albumArt={album.cover}
                  isSong={album.isSong}
                  links={album.links}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
