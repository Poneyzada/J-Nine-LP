"use client";

import { motion } from "framer-motion";
import { Mic, PenTool } from "lucide-react";

export default function BusinessHub() {
  return (
    <section id="business" className="py-40 bg-zinc-950 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="reveal-up"
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] text-white">Hub de <br /> <span className="text-[#c5a059] italic">Negócios.</span></h2>
            <p className="text-white/40 mt-8 text-xl leading-relaxed font-serif italic">Conexão direta para contratações, composições e parcerias através da <span className="text-white font-bold tracking-widest not-italic">CARRERA’S PRODUÇÕES</span>.</p>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex gap-6 items-start p-6 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="p-4 bg-[#c5a059]/10 rounded-2xl border border-[#c5a059]/20 shrink-0">
                <Mic className="text-[#c5a059] w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-lg uppercase text-white">Shows</h4>
                <p className="text-sm text-white/30 mt-1">Tour nacional e performances lives.</p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="flex gap-6 items-start p-6 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="p-4 bg-[#c5a059]/10 rounded-2xl border border-[#c5a059]/20 shrink-0">
                <PenTool className="text-[#c5a059] w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-lg uppercase text-white">Composição</h4>
                <p className="text-sm text-white/30 mt-1">Sessões de escrita e licenciamento.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="p-10 md:p-14 rounded-[4rem] bg-[#161311] border border-white/5 space-y-6 shadow-2xl"
        >
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase text-white/20 tracking-[0.2em] ml-1">Assunto</label>
            <select className="w-full bg-zinc-900 border border-white/5 rounded-3xl py-5 px-8 text-sm font-bold text-white focus:border-[#c5a059] focus:outline-none appearance-none cursor-pointer">
              <option>CONTRATAR SHOWS</option>
              <option>SOLICITAR COMPOSIÇÃO</option>
              <option>FEAT / COLAB</option>
            </select>
          </div>
          <input type="text" placeholder="Seu Nome ou Empresa" className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-8 text-sm font-bold text-white focus:border-[#c5a059] transition-all focus:outline-none" />
          <input type="tel" placeholder="WhatsApp para Contato" className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-8 text-sm font-bold text-white focus:border-[#c5a059] transition-all focus:outline-none" />
          <button className="w-full py-6 bg-[#c5a059] text-white font-black rounded-3xl shadow-2xl shadow-[#c5a059]/20 hover:scale-[1.02] transition-all uppercase tracking-widest text-[10px]">Enviar Proposta</button>
        </motion.div>
      </div>
    </section>
  );
}
