"use client";

import { motion } from "framer-motion";

export default function SpotifyEmbed() {
  return (
    <section className="py-24 px-6 bg-[var(--background)] relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb opacity-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto glass-card p-4 rounded-[2.5rem] relative z-10"
      >
        <div className="absolute top-4 left-6 px-4 py-1.5 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/20 text-[#1DB954] text-[9px] font-black tracking-widest uppercase z-20 backdrop-blur-md">
          Spotify Official
        </div>
        <iframe 
          style={{ borderRadius: "2rem" }} 
          src="https://open.spotify.com/embed/artist/37i9dQZF1DXcBWIGoYBM3M?utm_source=generator&theme=0" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
