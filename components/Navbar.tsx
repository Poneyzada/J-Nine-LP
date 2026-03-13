"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
        <div className="text-[#c5a059] font-bold tracking-tighter text-xl">JN.</div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/70">
          <Link href="#" className="hover:text-[#c5a059] transition-colors">Início</Link>
          <a href="https://open.spotify.com/user/31yspvh5mwsopagom4m7zxc6antm?si=Bk8s-LqyQqqoBOHnr6Pshw" target="_blank" rel="noopener noreferrer" className="hover:text-[#c5a059] transition-colors font-bold text-[#1DB954]">Spotify</a>
          <Link href="#" className="hover:text-[#c5a059] transition-colors">Shows</Link>
          <Link href="#" className="hover:text-[#c5a059] transition-colors">Negócios</Link>
        </div>

        <button className="bg-[#c5a059] text-black text-[10px] font-bold px-5 py-2 rounded-full hover:scale-105 transition-transform uppercase tracking-widest">
          Pre-save
        </button>
      </div>
    </motion.nav>
  );
}
