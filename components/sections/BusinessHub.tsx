"use client";

import { motion } from "framer-motion";

export default function BusinessHub() {
  return (
    <section className="relative py-32 bg-black">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">CONTATO & NEGÓCIOS</h2>
              <div className="h-1 w-24 bg-[#c5a059]" />
            </div>

            <div className="space-y-8">
              <div className="group">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-2 font-bold group-hover:text-[#c5a059] transition-colors">Booking & Labels</p>
                <h3 className="text-3xl font-bold">Carrera's Produções</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-white/50 text-sm mb-1 font-bold">Shows & Eventos</p>
                  <a href="mailto:contato@carreras.com" className="text-lg hover:text-[#c5a059] transition-colors underline decoration-[#c5a059]/30">contato@carreras.com</a>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1 font-bold">Imprensa/Assessoria</p>
                  <p className="text-lg">+55 (11) 99999-0000</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 blur-3xl rounded-full" />
            
            <h3 className="text-2xl font-bold mb-8">ENVIE UMA PROPOSTA</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                   <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Nome</label>
                   <input type="text" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5a059]" />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Empresa</label>
                   <input type="text" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5a059]" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Assunto</label>
                 <select className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5a059]">
                    <option>Show / Turnê</option>
                    <option>Composição / Obra</option>
                    <option>Publicidade</option>
                    <option>Outros</option>
                 </select>
              </div>

              <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Mensagem</label>
                 <textarea rows={4} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#c5a059]"></textarea>
              </div>

              <button className="w-full py-4 bg-[#c5a059] text-black font-bold rounded-xl hover:scale-[1.01] transition-transform">
                 ENVIAR MENSAGEM
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
