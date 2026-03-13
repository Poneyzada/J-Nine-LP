"use client";

import { motion } from "framer-motion";

export default function SpotifyEmbed() {
  return (
    <section className="py-16 px-6 bg-[#0d0b0a]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <iframe 
          style={{ borderRadius: "30px" }} 
          src="https://open.spotify.com/embed/artist/37i9dQZF1DXcBWIGoYBM3M?utm_source=generator&theme=0" 
          width="100%" 
          height="200" 
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}

