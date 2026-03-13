"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Component-specific styles
const componentStyles = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface MusicArtworkProps {
  artist: string;
  music: string;
  albumArt: string;
  isSong: boolean;
  isLoading?: boolean;
  links?: {
    spotify?: string;
    youtube?: string;
    apple?: string;
    deezer?: string;
  };
}

export default function MusicArtwork({
  artist,
  music,
  albumArt,
  isSong,
  isLoading = false,
  links
}: MusicArtworkProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const vinylRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);

  // Calculate spin duration based on type: songs (0.75 rev/sec) vs albums (0.55 rev/sec)
  const spinDuration = isSong ? (1 / 0.75) : (1 / 0.55); // Convert rev/sec to seconds per revolution

  const handlePlayPause = () => {
    if (isPlaying) {
      // Pause: capture current rotation
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
      // Resume: set start time for animation
      startTimeRef.current = Date.now();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const tooltipWidth = 300; // Increased for more content
        const tooltipHeight = 60; // Increased for multiple lines
        const offset = 20;
        
        let x = e.clientX + offset;
        let y = e.clientY - tooltipHeight - 10;
        
        // Prevent tooltip from going off right edge
        if (x + tooltipWidth > window.innerWidth) {
          x = e.clientX - tooltipWidth - offset;
        }
        
        // Prevent tooltip from going off top edge
        if (y < 0) {
          y = e.clientY + offset;
        }
        
        // Prevent tooltip from going off bottom edge
        if (y + tooltipHeight > window.innerHeight) {
          y = e.clientY - tooltipHeight - offset;
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
        <div className="relative group">
          {/* Loading skeleton */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Component-specific styles */}
      <style jsx>{componentStyles}</style>
      
      {/* Mobile Title - Visible only on small screens (Fixes user report) */}
      <div className="sm:hidden flex flex-col items-center mb-6">
          <div className="bg-neutral-900/90 backdrop-blur-xl text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 shadow-2xl">
            <span className="text-white">{artist}</span>
            <span className="text-[#c5a059] mx-2">•</span>
            <span className="text-white/60">{music}</span>
          </div>
      </div>

      {/* Enhanced Tooltip that follows cursor - Desktop only */}
      {isHovered && (
        <div
          className="fixed z-50 pointer-events-none hidden sm:block"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        >
          <div className="bg-neutral-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200">
            <span className="font-bold text-[#c5a059]">{artist}</span> &nbsp;•&nbsp; {music}
          </div>
        </div>
      )}

      {/* Main container */}
      <div className="relative group flex flex-col items-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          {/* Vinyl record with enhanced animation and glow */}
          <div
            className={`absolute -left-16 sm:-left-24 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-0 ${
              isHovered
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12 sm:translate-x-24'
            }`}
          >
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
                 width={256}
                 height={256}
                 className="w-full h-full object-contain"
                 unoptimized
               />
             </div>
          </div>

          {/* Album artwork */}
          <div
            className="relative z-10 w-full h-full overflow-hidden rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handlePlayPause}
          >
            <Image
              src={albumArt}
              alt={`${music} Cover`}
              width={256}
              height={256}
              className={`w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-110 ${
                !imageLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
              unoptimized
            />
            
            {!imageLoaded && (
              <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            )}
            
            {/* Play/Pause button with text on mobile */}
            <div className={`absolute bottom-3 left-3 flex items-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
                <div className="w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl">
                  {isPlaying ? (
                    <div className="flex gap-1 justify-center items-center">
                      <div className="w-1 h-3.5 bg-white rounded-sm"></div>
                      <div className="w-1 h-3.5 bg-white rounded-sm"></div>
                    </div>
                  ) : (
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  )}
                </div>
            </div>
          </div>
        </div>
            {/* Platform Buttons - Responsive and Refined */}
      <div className={`mt-6 flex justify-center gap-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 sm:opacity-60 sm:translate-y-0'}`}>
        {links?.spotify && (
          <a href={links.spotify} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#1DB954]/10 border border-[#1DB954]/20 rounded-full hover:bg-[#1DB954] transition-all group">
             <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" width={20} height={20} className="group-hover:brightness-0 group-hover:invert" />
          </a>
        )}
        {links?.youtube && (
          <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-[#FF0000]/10 border border-[#FF0000]/20 rounded-full hover:bg-[#FF0000] transition-all group">
             <Image src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" width={20} height={20} />
          </a>
        )}
        {links?.apple && (
          <a href={links.apple} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full hover:bg-white transition-all group">
             <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Music" width={20} height={20} className="invert group-hover:invert-0" />
          </a>
        )}
        {links?.deezer && (
          <a href={links.deezer} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-full hover:bg-white transition-all group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </a>
        )}
      </div>
      </div>
    </div>
  );
}
