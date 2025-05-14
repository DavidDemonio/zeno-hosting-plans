
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  textOnly?: boolean;
}

export function Logo({ className, size = 'md', textOnly = false }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-5xl',
  };

  const logoSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={cn('flex items-center', className)}>
      {!textOnly && (
        <div className={cn('mr-2', logoSizes[size])}>
          <img 
            src="/lovable-uploads/29ae7a2f-8957-4abc-aa16-19ef06e4ddad.png" 
            alt="ZenoScale Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
      )}
      <span className={cn('font-bold gradient-text', sizeClasses[size])}>
        ZenoScale
      </span>
    </div>
  );
}
