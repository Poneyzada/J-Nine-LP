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
    <section id="music" className="py-24 sm:py-32 bg-black relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#c5a059]">Discografia</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-2">
              Hot <span className="text-[#c5a059] italic">Trending.</span>
            </h2>
            <p className="text-white/20 text-sm mt-4 max-w-sm">Os lançamentos que estão definindo a nova era do J NINE.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-[2.5rem] bg-[#161311] border border-white/5"
            >
              <img 
                src={album.cover} 
                alt={album.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest">{album.type}</span>
                <h3 className="text-2xl font-bold text-white uppercase mt-1">{album.title}</h3>
                <div className="flex gap-2 mt-4">
                  <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white">OUVIR AGORA</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
