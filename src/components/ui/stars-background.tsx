
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface StarsBackgroundProps {
  className?: string;
  density?: number;
}

export function StarsBackground({ className, density = 50 }: StarsBackgroundProps) {
  const [stars, setStars] = useState<Array<{ id: number; size: number; top: string; left: string; delay: number }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: density }, (_, i) => {
      const size = Math.random() * 2 + 1;
      return {
        id: i,
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
      };
    });
    setStars(newStars);
  }, [density]);

  return (
    <div className={cn('fixed inset-0 z-0 overflow-hidden pointer-events-none', className)}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            opacity: Math.random() * 0.7 + 0.3,
            animationDelay: `${star.delay}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}
