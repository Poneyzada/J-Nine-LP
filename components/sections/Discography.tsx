"use client";

import { motion } from "framer-motion";

const albums = [
  {
    title: "Luz Púrpura",
    type: "Single",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800",
    links: { spotify: "#", youtube: "#", apple: "#", deezer: "#" }
  },
  {
    title: "Noites Curtas",
    type: "Feat",
    cover: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800",
    links: { spotify: "#", youtube: "#", apple: "#" }
  },
  {
    title: "Ciclos",
    type: "Álbum",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
    links: { spotify: "#", apple: "#", youtube: "#" }
  }
];

export default function Discography() {
  return (
    <section id="music" className="py-32 relative overflow-hidden bg-[var(--background)]">
      
      {/* Background with J-nine-costa.jpeg acting as a subtle texture */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img 
          src="/J-nine-costa.jpeg" 
          alt="J-NINE" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[var(--background)]/80 backdrop-blur-3xl" />
      </div>

      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] glow-orb opacity-20 -translate-y-1/2" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#c5a059]">Top Tracks</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-2 text-white">
              <span className="text-[#c5a059] italic heading-serif font-medium">Trending</span> On This Week.
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-sm leading-relaxed">
              Explore the latest sonic environments crafted by JOTTANINE. Don't miss out on the most streamed tracks.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex gap-2 p-1.5 glass-panel rounded-2xl flex-wrap"
          >
            <button className="px-6 py-2.5 bg-[#c5a059] text-black font-extrabold rounded-xl text-[10px] uppercase tracking-widest transition-all">All</button>
            <button className="px-6 py-2.5 text-white/50 font-bold hover:text-white rounded-xl text-[10px] uppercase tracking-widest transition-all">Albums</button>
            <button className="px-6 py-2.5 text-white/50 font-bold hover:text-white rounded-xl text-[10px] uppercase tracking-widest transition-all">Singles</button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[2.5rem] p-4 group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem] mb-6">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center shadow-2xl">
                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#c5a059] border-b-[8px] border-b-transparent ml-1" />
                   </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white uppercase">{album.title}</h3>
                    <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest block mt-1">{album.type}</span>
                  </div>
                  {/* Pseudo-Price/Stat typical in NFT templates */}
                  <div className="text-right">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block">Streams</span>
                    <span className="text-sm font-bold text-white uppercase">+100k</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
