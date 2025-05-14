
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

  return (
    <div className={cn('flex items-center', className)}>
      {!textOnly && (
        <div className="mr-2 rounded-md w-8 h-8 flex items-center justify-center bg-gradient-to-br from-zeno-purple to-zeno-blue text-white font-bold text-xl">
          Z
        </div>
      )}
      <span className={cn('font-bold gradient-text', sizeClasses[size])}>
        ZenoScale
      </span>
    </div>
  );
}
