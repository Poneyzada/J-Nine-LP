"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PreSaveModal from "./PreSaveModal";
import { Music2 } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Shows", href: "#show" },
    { name: "Bio", href: "#" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-white group">
            Jotta <span className="text-[#c5a059] group-hover:text-white transition-colors">nine</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-white/60 hover:text-[#c5a059] transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-white/5 border border-white/10 text-white font-bold rounded-full text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              Pre-save
            </button>
            <a 
              href="https://open.spotify.com/user/31yspvh5mwsopagom4m7zxc6antm?si=Bk8s-LqyQqqoBOHnr6Pshw" 
              target="_blank" 
              className="px-6 py-2.5 bg-[#1DB954] text-white font-bold rounded-full text-[10px] tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_20px_rgba(29,185,84,0.3)]"
            >
              Spotify
            </a>
          </div>

          {/* Mobile Navigation - Balanced */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={() => setIsModalOpen(true)}
              className="text-[#c5a059] font-bold text-[10px] uppercase tracking-widest"
            >
              Pre-save
            </button>
            <a 
              href="https://open.spotify.com/user/31yspvh5mwsopagom4m7zxc6antm?si=Bk8s-LqyQqqoBOHnr6Pshw" 
              target="_blank" 
              className="p-2 bg-[#1DB954] text-white rounded-full transition-all"
            >
              <Music2 size={16} />
            </a>
          </div>
        </div>
      </nav>

      <PreSaveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
