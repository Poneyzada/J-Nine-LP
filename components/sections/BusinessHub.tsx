"use client";

import { motion } from "framer-motion";
import { Mic, PenTool } from "lucide-react";

export default function BusinessHub() {
  return (
    <section id="business" className="relative py-40 px-6 min-h-[90vh] flex items-center bg-[var(--background)]">
      
      {/* Background Image: J-nine-foto.jpeg (Singing Photo) */}
      <div className="absolute inset-0 z-0">
         <img 
           src="/J-nine-foto.jpeg"
           alt="JOTTANINE Live"
           className="w-full h-full object-cover object-top opacity-50 grayscale transition-opacity duration-1000"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/90 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]" />
      </div>

      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] glow-orb opacity-30" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Col: Text */}
        <div className="space-y-12">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="relative"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#c5a059] block mb-4">Subscribe to Get</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] text-white tracking-tighter">
              Direct <span className="text-[#c5a059] italic heading-serif font-medium">Booking.</span>
            </h2>
            <p className="text-white/50 mt-8 text-lg leading-relaxed max-w-md">
              Secure priority access for live performances, exclusive features, and composition slots through <span className="text-white font-bold">CARRERA’S</span>.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex gap-6 items-center p-6 rounded-3xl glass-panel group hover:bg-white/5 transition-colors"
            >
              <div className="p-4 bg-[var(--background)] rounded-2xl border border-white/5 shrink-0 group-hover:border-[#c5a059]/30 transition-colors">
                <Mic className="text-[#c5a059] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg uppercase text-white tracking-wide">Live Shows</h4>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">National Tour & Festivals</p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
               className="flex gap-6 items-center p-6 rounded-3xl glass-panel group hover:bg-white/5 transition-colors"
            >
              <div className="p-4 bg-[var(--background)] rounded-2xl border border-white/5 shrink-0 group-hover:border-[#c5a059]/30 transition-colors">
                <PenTool className="text-[#c5a059] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg uppercase text-white tracking-wide">Composição</h4>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Writing & Licensing</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Col: Glass Form */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="p-8 md:p-12 rounded-[3.5rem] glass-card space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Send Proposal</h3>
            <p className="text-xs text-white/40 uppercase tracking-widest">Premium Access Only</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-[#c5a059] tracking-[0.2em] ml-1">Category</label>
              <div className="relative">
                <select className="w-full bg-[var(--background-card)] border border-white/10 rounded-2xl py-5 px-6 text-sm font-bold text-white focus:border-[#c5a059] focus:outline-none appearance-none cursor-pointer hover:border-white/20 transition-colors">
                  <option>CONTRATAR SHOWS</option>
                  <option>SOLICITAR COMPOSIÇÃO</option>
                  <option>FEAT / COLAB</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#c5a059]">▼</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-[#c5a059] tracking-[0.2em] ml-1">Entity Name</label>
              <input type="text" placeholder="Nome ou Empresa" className="w-full bg-[var(--background-card)] border border-white/10 rounded-2xl py-5 px-6 text-sm font-bold text-white focus:border-[#c5a059] transition-all focus:outline-none hover:border-white/20 placeholder:text-white/20" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-[#c5a059] tracking-[0.2em] ml-1">Direct Contact</label>
              <input type="tel" placeholder="WhatsApp" className="w-full bg-[var(--background-card)] border border-white/10 rounded-2xl py-5 px-6 text-sm font-bold text-white focus:border-[#c5a059] transition-all focus:outline-none hover:border-white/20 placeholder:text-white/20" />
            </div>

            <button className="w-full py-6 mt-4 bg-[#c5a059] text-black font-extrabold rounded-2xl shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:scale-[1.02] transition-transform uppercase tracking-widest text-[11px]">
              Submit Request
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
