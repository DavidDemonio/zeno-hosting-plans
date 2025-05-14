
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export function HeroSection() {
  return (
    <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Logo size="lg" className="mx-auto mb-6" />
        </div>
        
        <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ animationDelay: '0.4s' }}>
          Soluciones de Hosting <span className="gradient-text">Profesionales</span>
        </h1>
        
        <p className="animate-fade-in mx-auto max-w-2xl text-lg md:text-xl text-zinc-300 mb-8 md:mb-10" style={{ animationDelay: '0.6s' }}>
          Hosting de alto rendimiento con configuración instantánea y soporte 24/7.
          Ideal para gaming, aplicaciones, y proyectos de cualquier escala.
        </p>
        
        <div className="animate-fade-in flex flex-col sm:flex-row justify-center gap-4" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white">
            Comenzar Ahora
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 transition-all">
            Más Información
          </Button>
        </div>
        
        <div className="animate-fade-in mt-12 relative" style={{ animationDelay: '1s' }}>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 flex justify-center">
            <div className="w-5 h-5 border-b-2 border-r-2 border-white/50 rotate-45 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
