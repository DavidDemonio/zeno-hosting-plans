
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface StarsBackgroundProps {
  className?: string;
  density?: number;
}

export function StarsBackground({ className, density = 150 }: StarsBackgroundProps) {
  const [stars, setStars] = useState<Array<{ 
    id: number; 
    size: number; 
    top: string; 
    left: string; 
    delay: number; 
    brightness: number;
    blinkSpeed: number;
  }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: density }, (_, i) => {
      const size = Math.random() * 2.5 + 0.8;
      const brightness = Math.random() * 0.7 + 0.3;
      const blinkSpeed = Math.random() * 4 + 2; // Random blink speed between 2-6s
      
      return {
        id: i,
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        brightness,
        blinkSpeed
      };
    });
    setStars(newStars);
  }, [density]);

  return (
    <div className={cn('fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#070c14]', className)}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: star.brightness,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.blinkSpeed}s`,
            boxShadow: star.size > 1.8 ? `0 0 ${star.size * 2}px rgba(255,255,255,${star.brightness * 0.5})` : 'none',
            animation: `twinkle ${star.blinkSpeed}s infinite ease-in-out`
          }}
        />
      ))}
    </div>
  );
}
