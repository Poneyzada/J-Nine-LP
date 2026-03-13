"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-[var(--background-surface)]/80 backdrop-blur-2xl relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-4xl lg:text-5xl font-black text-[#c5a059]">81M+</p>
          <p className="font-mono text-[9px] text-white/50 uppercase tracking-[0.4em] mt-3 font-bold">Plays Totais</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-4xl lg:text-5xl font-black text-[#c5a059]">500k+</p>
          <p className="font-mono text-[9px] text-white/50 uppercase tracking-[0.4em] mt-3 font-bold">Streams Totais</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <p className="text-4xl lg:text-5xl font-black text-[#c5a059]">40+</p>
          <p className="font-mono text-[9px] text-white/50 uppercase tracking-[0.4em] mt-3 font-bold">Composições</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <p className="text-4xl lg:text-5xl font-black text-[#c5a059]">1+</p>
          <p className="font-mono text-[9px] text-white/50 uppercase tracking-[0.4em] mt-3 font-bold">Colaborações</p>
        </motion.div>
      </div>
    </section>
  );
}
