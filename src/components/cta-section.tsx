
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  language: string;
}

export function CTASection({ language }: CTASectionProps) {
  const content = {
    es: {
      title: "¿Listo para",
      highlight: "comenzar",
      description: "Únete a miles de clientes satisfechos que confían en ZenoScale para sus necesidades de hosting.",
      button: "Comienza tu viaje"
    },
    en: {
      title: "Ready to",
      highlight: "start",
      description: "Join thousands of satisfied customers who trust ZenoScale for their hosting needs.",
      button: "Start your journey"
    }
  };

  const { title, highlight, description, button } = content[language as keyof typeof content];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zeno-dark/80 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title} <span className="gradient-text">{highlight}?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-8">
            {description}
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all hover-lift"
            onClick={() => window.location.href = "https://dash.zenoscale.es"}
          >
            {button}
          </Button>
        </div>
      </div>
    </section>
  );
}
