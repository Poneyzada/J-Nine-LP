"use client";

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container px-6 mx-auto text-center">
        <h2 className="text-8xl md:text-[12rem] font-bold tracking-tighter text-white/5 select-none mb-12">
          JOTTANINE
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/10">
          <div className="text-white/40 text-sm font-bold tracking-widest uppercase">
            © 2024 Carrera's Produções
          </div>
          
          <div className="flex items-center gap-12 text-sm font-bold tracking-widest uppercase">
            <a href="https://open.spotify.com/user/31yspvh5mwsopagom4m7zxc6antm?si=Bk8s-LqyQqqoBOHnr6Pshw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#c5a059] transition-colors">Spotify</a>
            <a href="#" className="text-white hover:text-[#c5a059] transition-colors">YouTube</a>
            <a href="#" className="text-white hover:text-[#c5a059] transition-colors">Instagram</a>
          </div>

          <div className="text-white/40 text-xs">
            Feito com visão artística
          </div>
        </div>
      </div>
    </footer>
  );
}
