"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ShowVideo {
  id: number;
  title: string;
  thumbnail: string;
}

const showVideos: ShowVideo[] = [
  { id: 1, title: "Ao Vivo em SP", thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a" },
  { id: 2, title: "Show de Lançamento", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30" },
  { id: 3, title: "Bastidores", thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14" },
];

export default function Show() {
  return (
    <section id="show" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Background with J-nine-foto.jpeg */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/J-nine-foto.jpeg" 
          alt="Live Experience" 
          fill 
          className="object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              LIVE <span className="text-[#c5a059]">EXPERIENCE</span>
            </h2>
            <p className="text-lg text-white/60 font-outfit leading-relaxed max-w-xl">
              Sinta a energia do palco. Performances ao vivo que transcendem a música e conectam almas.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Masonry Grid - Responsive Fix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Video Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <Image 
              src={showVideos[0].thumbnail} 
              alt={showVideos[0].title} 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[15px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-2" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold tracking-widest uppercase mb-1 block text-[#c5a059]">Destaque</span>
              <h3 className="text-xl font-bold">{showVideos[0].title}</h3>
            </div>
          </motion.div>
          
          {/* Small Video Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <Image 
              src={showVideos[1].thumbnail} 
              alt={showVideos[1].title} 
              fill 
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                 <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1" />
              </div>
            </div>
          </motion.div>
          
          {/* Small Video Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:row-span-1 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
             <Image 
              src={showVideos[2].thumbnail} 
              alt={showVideos[2].title} 
              fill 
              className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                 <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Social Call to Action Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl bg-[#c5a059]/10 border border-[#c5a059]/20 p-8 flex flex-col justify-center items-center text-center"
          >
             <div className="text-2xl font-bold text-[#c5a059] mb-4">MOMENTOS REAIS</div>
             <p className="text-white/60 text-sm mb-6">Assista a performances exclusivas e sinta a energia de cada show.</p>
             <button className="px-6 py-3 bg-[#c5a059] text-black font-bold rounded-full hover:scale-105 transition-all text-sm">
                VER NO YOUTUBE
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
