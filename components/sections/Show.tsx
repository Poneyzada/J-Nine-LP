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
  { id: "dQw4w9WgXcQ", title: "Clipe Oficial: Luz Púrpura", type: "Music Video" },
  { id: "dQw4w9WgXcQ", title: "Bastidores: Ciclos (Doc)", type: "Behind the Scenes" },
  { id: "dQw4w9WgXcQ", title: "Ao Vivo no Studio 18h", type: "Live Performance" },
];

export default function Show() {
  const [activeVideo, setActiveVideo] = useState(showVideos[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="relative py-32 bg-black px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Visual <br/><span className="text-[#c5a059] italic">Statement.</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl relative aspect-video group bg-zinc-900"
          >
            {!isPlaying ? (
              <div 
                className="w-full h-full relative cursor-pointer" 
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="/J-nine-foto.jpeg" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                  alt="Video Thumbnail"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#c5a059]/80 backdrop-blur flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Play className="text-white w-8 h-8 fill-white ml-1" />
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
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {showVideos.map((video) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setActiveVideo(video.id);
                  setIsPlaying(true);
                }}
                className={`p-4 rounded-[2rem] bg-[#161311] border border-white/5 flex gap-5 cursor-pointer group hover:border-[#c5a059]/30 transition-all ${activeVideo === video.id && isPlaying ? 'border-[#c5a059]/50 bg-[#1c1815]' : ''}`}
              >
                <div className="w-24 h-16 rounded-2xl overflow-hidden relative shrink-0">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={16} className="fill-white text-white" />
                  </div>
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <h5 className="text-[10px] font-black uppercase leading-tight truncate text-white">{video.title}</h5>
                  <p className="text-[8px] text-[#c5a059] uppercase mt-1 tracking-widest font-bold font-mono">{video.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
