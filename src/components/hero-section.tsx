
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  language: string;
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = {
    es: {
      title: "Hosting de Alto Rendimiento",
      highlight: "ZenoScale",
      description: "Hosting de alto rendimiento con configuración instantánea y soporte 24/7. Ideal para gaming, aplicaciones, y proyectos de cualquier escala.",
      primaryButton: "Comenzar Ahora",
      secondaryButton: "Más Información"
    },
    en: {
      title: "High Performance",
      highlight: "Hosting Solutions",
      description: "High-performance hosting with instant setup and 24/7 support. Ideal for gaming, applications, and projects of any scale.",
      primaryButton: "Start Now",
      secondaryButton: "Learn More"
    }
  };

  // Make sure language is 'es' or 'en', with 'es' as default
  const validLanguage = language && (language === 'en' || language === 'es') ? language : 'es';
  
  const { title, highlight, description, primaryButton, secondaryButton } = content[validLanguage];

  // Scroll to pricing section
  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 md:py-36 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070c14] to-[#0a1020] opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center stagger-animation stagger-1">
          <Logo size="lg" className="mx-auto mb-8 glow-animation" />
        </div>
        
        <div className="overflow-visible mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight stagger-animation stagger-2 text-center">
            <div className="mb-2">
              <span className="gradient-text glow-text">{highlight}</span>
            </div>
            <div className="mt-2">
              <span className="text-white">{title}</span>
            </div>
          </h1>
        </div>
        
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-300 mb-8 md:mb-10 stagger-animation stagger-3">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 stagger-animation stagger-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-zeno-purple to-zeno-blue transition-all text-white relative overflow-hidden group z-10"
            onClick={() => window.location.href = "https://dash.zenoscale.es"}
          >
            <span className="relative z-10 flex items-center">
              {primaryButton}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-zeno-purple to-zeno-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'brightness(1.3)' }}></span>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-zinc-700 text-white hover:bg-zinc-800 transition-all group z-10"
            onClick={scrollToPricing}
          >
            <span className="relative z-10 flex items-center">
              {secondaryButton}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
        
        <div className="mt-16 relative stagger-animation stagger-4">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 flex justify-center animate-bounce">
            <div className="w-5 h-5 border-b-2 border-r-2 border-white/50 rotate-45 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
