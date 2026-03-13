"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showVideos = [
  { id: 1, title: "Ao Vivo em SP", thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a" },
  { id: 2, title: "Show de Lançamento", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30" },
  { id: 3, title: "Bastidores", thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14" },
];

export default function Show() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background with J-nine-foto.jpeg */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/J-nine-foto.jpeg" 
          alt="Show Background" 
          fill 
          className="object-cover opacity-40 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">LIVE EXPERIENCE</h2>
            <p className="text-[#c5a059] font-serif italic text-2xl mt-2">A energia do palco, capturada.</p>
          </motion.div>
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-opacity-90 transition-all">
            VER TOUR 2024
          </button>
        </div>

        {/* Cinematic Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700">
               <Image src={showVideos[0].thumbnail} alt="Main Video" fill className="object-cover opacity-80" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[15px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-2" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6">
               <h3 className="text-2xl font-bold">{showVideos[0].title}</h3>
            </div>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {showVideos.slice(1).map((v) => (
              <motion.div 
                key={v.id}
                whileHover={{ scale: 0.98 }}
                className="relative group overflow-hidden rounded-xl bg-neutral-900 aspect-video md:aspect-auto"
              >
                <Image src={v.thumbnail} alt={v.title} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-bold text-sm tracking-widest uppercase">{v.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="md:col-span-2 relative rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/20 p-8 flex flex-col justify-end">
             <div className="text-4xl font-bold text-[#c5a059] mb-4">MOMENTOS REAIS</div>
             <p className="text-white/60 mb-6">Assista a performances exclusivas e sinta a atmosfera de cada show.</p>
             <button className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                CANAL YOUTUBE <span className="text-[#c5a059]">→</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
