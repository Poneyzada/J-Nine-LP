"use client";

export default function Marquee() {
  return (
    <div className="py-10 bg-[#0d0b0a] overflow-hidden border-b border-white/5">
      <div className="flex animate-[marquee_20s_linear_infinite] opacity-20 hover:opacity-100 transition-opacity w-max">
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-white">■ Spotify</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-[#c5a059]">■ YouTube Music</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-white">■ Apple Music</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-[#c5a059]">■ Deezer</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-white">■ Tidal</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-[#c5a059]">■ Amazon Music</span>
        {/* Duplicate for infinite effect */}
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-white">■ Spotify</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-[#c5a059]">■ YouTube Music</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-white">■ Apple Music</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-[#c5a059]">■ Deezer</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-white">■ Tidal</span>
        <span className="mx-16 text-xs font-black uppercase tracking-[0.5em] text-[#c5a059]">■ Amazon Music</span>
      </div>
    </div>
  );
}
