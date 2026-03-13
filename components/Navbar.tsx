"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Shows", href: "#show" },
    { name: "Bio", href: "#" },
    { name: "Social", href: "#" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white group">
          JOTTA<span className="text-[#c5a059] group-hover:text-white transition-colors">NINE</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-[#c5a059] transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://open.spotify.com/user/31yspvh5mwsopagom4m7zxc6antm?si=Bk8s-LqyQqqoBOHnr6Pshw" 
            target="_blank" 
            className="px-6 py-2.5 bg-[#1DB954] text-white font-bold rounded-full text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(29,185,84,0.3)]"
          >
            OUVIR AGORA
          </a>
        </div>

        {/* Mobile Navigation - Simplified for better fit */}
        <div className="md:hidden flex items-center gap-4">
           <a 
            href="#show" 
            className="text-[10px] font-bold text-white/60 uppercase tracking-tighter"
          >
            Shows
          </a>
          <a 
            href="https://open.spotify.com/user/31yspvh5mwsopagom4m7zxc6antm?si=Bk8s-LqyQqqoBOHnr6Pshw" 
            target="_blank" 
            className="px-4 py-2 bg-[#1DB954] text-white font-bold rounded-full text-[10px] hover:scale-105 transition-all"
          >
            SPOTIFY
          </a>
        </div>
      </div>
    </nav>
  );
}
