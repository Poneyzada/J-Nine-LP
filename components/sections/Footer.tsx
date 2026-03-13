"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 bg-black text-center border-t border-white/5 px-6 relative overflow-hidden">
      <h2 className="text-[15vw] font-black uppercase select-none leading-none mb-12 opacity-[0.03] text-white">
        JOTTANINE
      </h2>
      <div className="flex justify-center gap-8 mb-12 flex-wrap">
        <a 
          href="#" 
          className="text-white/20 hover:text-[#c5a059] transition-all font-bold uppercase text-[10px] tracking-widest"
        >
          Spotify
        </a>
        <a 
          href="#" 
          className="text-white/20 hover:text-[#c5a059] transition-all font-bold uppercase text-[10px] tracking-widest"
        >
          YouTube
        </a>
        <a 
          href="https://www.instagram.com/jottanine9?igsh=MTRiaTR5bzdndmlqOA==" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-[#c5a059] transition-all font-bold uppercase text-[10px] tracking-widest"
        >
          Instagram
        </a>
      </div>
      <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
        2024 · CARRERA'S PRODUÇÕES · HUB OFICIAL
      </p>
    </footer>
  );
}
