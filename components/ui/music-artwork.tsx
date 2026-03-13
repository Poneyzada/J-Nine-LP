"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// MusicArtworkProps interface
interface MusicArtworkProps {
  artist: string;
  music: string;
  albumArt: string;
  isSong: boolean;
  isLoading?: boolean;
}

export default function MusicArtwork({
  artist,
  music,
  albumArt,
  isSong,
  isLoading = false
}: MusicArtworkProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const vinylRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);

  // Calculate spin duration based on type: songs (0.75 rev/sec) vs albums (0.55 rev/sec)
  const spinDuration = isSong ? (1 / 0.75) : (1 / 0.55);

  const handlePlayPause = () => {
    if (isPlaying) {
      if (vinylRef.current) {
        const computedStyle = window.getComputedStyle(vinylRef.current);
        const transform = computedStyle.transform;
        if (transform && transform !== 'none') {
          const matrix = new DOMMatrix(transform);
          const angle = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
          setRotation(angle < 0 ? angle + 360 : angle);
        }
      }
    } else {
      startTimeRef.current = Date.now();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const tooltipWidth = 300;
        const tooltipHeight = 60;
        const offset = 20;
        
        let x = e.clientX + offset;
        let y = e.clientY - tooltipHeight - 10;
        
        if (x + tooltipWidth > window.innerWidth) {
          x = e.clientX - tooltipWidth - offset;
        }
        
        if (y < 0) {
          y = e.clientY + offset;
        }
        
        setMousePosition({ x, y });
      });
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  if (isLoading) {
    return (
      <div className="relative">
        <div className="w-40 h-40 sm:w-64 sm:h-64 bg-neutral-800 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Enhanced Tooltip - Desktop only */}
      {isHovered && (
        <div
          className="fixed z-50 pointer-events-none hidden sm:block"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translateZ(0)',
          }}
        >
          <div className="bg-neutral-900/95 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200">
            <span className="font-bold text-[#c5a059]">{artist}</span> &nbsp;•&nbsp; {music}
          </div>
        </div>
      )}

      {/* Main container */}
      <div 
        className="relative group transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Vinyl record - Responsive positioning */}
        <div
          className={`absolute transition-all duration-700 ease-out z-0 
            ${isHovered ? 'opacity-100' : 'opacity-0'}
            -left-12 sm:-left-20 top-1/2 -translate-y-1/2
            ${isHovered ? 'translate-x-0' : 'translate-x-12 sm:translate-x-20'}
          `}
        >
          <div className="relative w-40 h-40 sm:w-64 sm:h-64">
           <div
             ref={vinylRef}
             className="w-full h-full"
             style={{
               transform: isPlaying ? undefined : `rotate(${rotation}deg)`,
               animation: isPlaying ? `spin ${spinDuration}s linear infinite` : 'none',
               animationDelay: isPlaying ? `${-rotation / (360 / spinDuration)}s` : undefined
             }}
           >
             <Image
               src="https://pngimg.com/d/vinyl_PNG95.png"
               alt="Vinyl Record"
               fill
               className="object-contain"
               unoptimized
             />
           </div>
         </div>
        </div>

        {/* Album artwork */}
        <div
          className="relative z-10 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(197,160,89,0.3)] cursor-pointer w-40 h-40 sm:w-64 sm:h-64"
          onClick={handlePlayPause}
        >
          <Image
            src={albumArt}
            alt={`${music} Cover`}
            fill
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-110 ${
              !imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {!imageLoaded && (
            <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
          )}
          
          {/* Overlay info - Mobile focus fix */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-4 left-4 right-4 space-y-2">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#c5a059] flex items-center justify-center shadow-lg">
                    {isPlaying ? (
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-3 bg-black rounded"></div>
                        <div className="w-0.5 h-3 bg-black rounded"></div>
                      </div>
                    ) : (
                      <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5"></div>
                    )}
                 </div>
                 <div className="truncate pr-4 text-xs">
                    <p className="font-bold text-[#c5a059]">{artist}</p>
                    <p className="text-white/80">{music}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Platform Buttons - Responsive and Refined */}
      <div className={`mt-6 flex justify-center gap-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 sm:opacity-60 sm:translate-y-0'}`}>
        <a href="https://spotify.com" target="_blank" className="p-2.5 bg-[#1DB954]/10 border border-[#1DB954]/20 rounded-full hover:bg-[#1DB954] transition-all group">
           <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" width={18} height={18} className="group-hover:brightness-0 group-hover:invert" />
        </a>
        <a href="https://youtube.com" target="_blank" className="p-2.5 bg-[#FF0000]/10 border border-[#FF0000]/20 rounded-full hover:bg-[#FF0000] transition-all group">
           <Image src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" width={18} height={18} />
        </a>
        <a href="https://apple.com" target="_blank" className="p-2.5 bg-white/10 border border-white/20 rounded-full hover:bg-white transition-all group">
           <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Music" width={18} height={18} className="invert group-hover:invert-0" />
        </a>
      </div>
    </div>
  );
}
