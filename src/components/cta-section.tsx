
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zeno-dark/80 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in animate-float">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">comenzar</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-8">
            Únete a miles de clientes satisfechos que confían en ZenoScale para
            sus necesidades de hosting.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all">
            Comienza tu viaje
          </Button>
        </div>
      </div>
    </section>
  );
}
