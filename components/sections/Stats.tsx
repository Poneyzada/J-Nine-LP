"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950/50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-4xl font-black text-[#c5a059]">500k+</p>
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] mt-2">Streams Totais</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-4xl font-black text-[#c5a059]">150+</p>
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] mt-2">Composições</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <p className="text-4xl font-black text-[#c5a059]">12+</p>
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] mt-2">Colaborações</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <p className="text-4xl font-black text-[#c5a059]">SP/BR</p>
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] mt-2">Base Oficial</p>
        </motion.div>
      </div>
    </section>
  );
}
