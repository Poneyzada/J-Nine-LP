"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MusicArtwork from "../ui/music-artwork";

const tracks = [
  { id: 1, music: "Planos", artist: "JOTTANINE", albumArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17", isSong: true },
  { id: 2, music: "Resiliência", artist: "JOTTANINE", albumArt: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9", isSong: true },
  { id: 3, music: "Visão de Ouro", artist: "JOTTANINE", albumArt: "https://images.unsplash.com/photo-1514525253361-b8748332397f", isSong: true },
];

export default function Discography() {
  return (
    <section className="relative py-24 min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Background with J-nine-costa.jpeg */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/J-nine-costa.jpeg" 
          alt="Discografia Background" 
          fill 
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            DISCO<span className="text-[#c5a059]">GRAFIA</span>
          </h2>
          <div className="w-24 h-1 bg-[#c5a059] rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 justify-items-center">
          <MusicArtwork 
            artist="JOTTANINE" 
            music="Planos" 
            albumArt="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop"
            isSong={true}
          />
          <MusicArtwork 
            artist="JOTTANINE" 
            music="Visão de Ouro" 
            albumArt="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop"
            isSong={true}
          />
          <MusicArtwork 
            artist="JOTTANINE" 
            music="Resiliência" 
            albumArt="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
            isSong={true}
          />
        </div>
      </div>
    </section>
  );
}
