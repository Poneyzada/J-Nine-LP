"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

interface ShowVideo {
  id: string;
  title: string;
  type: string;
}

const showVideos: ShowVideo[] = [
  { id: "ypezb2IZFI4", title: "Jottanine - YouTube Video", type: "Videoclipe" },
  { id: "dQw4w9WgXcQ", title: "Bastidores: Ciclos (Doc)", type: "Bastidores" },
  { id: "dQw4w9WgXcQ", title: "Ao Vivo no Studio 18h", type: "Performance ao Vivo" },
];

export default function Show() {
  const [activeVideo, setActiveVideo] = useState(showVideos[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="relative py-32 bg-[var(--background)] px-6 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] glow-orb opacity-20 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-16 md:text-center"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#c5a059] block mb-2">Visão Cinematográfica</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Declaração <span className="text-[#c5a059] font-black">Visual.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video Player */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 overflow-hidden rounded-[3rem] glass-card p-2 relative aspect-[16/10] group"
          >
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
              {!isPlaying ? (
                <div 
                  className="w-full h-full relative cursor-pointer" 
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Keeping thumbnail dynamic based on selection */}
                  <img 
                    src={`https://img.youtube.com/vi/${activeVideo}/maxresdefault.jpg`} 
                    onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${activeVideo}/hqdefault.jpg`; }}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                    alt="Video Thumbnail"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.4)] hover:scale-110 transition-transform duration-300">
                      <Play className="text-[#c5a059] w-10 h-10 ml-2 fill-[#c5a059]" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe 
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                />
              )}
            </div>
          </motion.div>

          {/* Playlist */}
          <div className="lg:col-span-4 flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {showVideos.map((video) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setActiveVideo(video.id);
                  setIsPlaying(true);
                }}
                className={`p-4 rounded-[2rem] glass-card flex gap-5 cursor-pointer group hover:border-[#c5a059]/50 transition-all ${activeVideo === video.id ? 'border-[#c5a059] bg-[var(--background-card)]' : ''}`}
              >
                <div className="w-28 h-20 rounded-2xl overflow-hidden relative shrink-0">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0"
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="fill-[#c5a059] text-[#c5a059]" />
                  </div>
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <h5 className="text-[12px] font-bold uppercase leading-tight text-white mb-2">{video.title}</h5>
                  <span className="px-3 py-1 rounded-full glass-panel text-[8px] text-[#c5a059] uppercase tracking-widest font-bold w-max">
                    {video.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
