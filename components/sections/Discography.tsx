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
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">DISCOGRAFIA</h2>
          <p className="text-[#c5a059] italic text-xl font-serif">O som por trás do homem</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-24">
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: track.id * 0.1 }}
            >
              <MusicArtwork 
                artist={track.artist}
                music={track.music}
                albumArt={track.albumArt}
                isSong={track.isSong}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
