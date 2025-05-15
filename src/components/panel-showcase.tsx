
import { Button } from "@/components/ui/button";
import { ArrowRight, Server } from "lucide-react";

interface PanelShowcaseProps {
  language: string;
}

export function PanelShowcase({ language }: PanelShowcaseProps) {
  const content = {
    es: {
      title: "Nuestro",
      highlight: "Panel de Control",
      description: "Gestiona tus servicios con facilidad a través de nuestro intuitivo panel de control. Monitoriza el rendimiento, administra tus servidores y obtén información en tiempo real.",
      features: [
        "Interfaz intuitiva y moderna",
        "Estadísticas en tiempo real",
        "Gestión completa de servidores",
        "Acceso a consola",
        "Notificaciones instantáneas",
        "Soporte técnico integrado"
      ],
      ctaButton: "Acceder al Panel"
    },
    en: {
      title: "Our",
      highlight: "Control Panel",
      description: "Manage your services with ease through our intuitive control panel. Monitor performance, manage your servers, and get real-time information.",
      features: [
        "Intuitive, modern interface",
        "Real-time statistics",
        "Complete server management",
        "Console access",
        "Instant notifications",
        "Integrated technical support"
      ],
      ctaButton: "Access Panel"
    }
  };

  // Make sure language is 'es' or 'en', with 'es' as default
  const validLanguage = language === 'en' ? 'en' : 'es';
  
  const { title, highlight, description, features, ctaButton } = content[validLanguage];

  return (
    <section id="panel" className="py-16 lg:py-24 bg-gradient-to-b from-zinc-900/50 to-zinc-900/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title} <span className="gradient-text glow-text">{highlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-300">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal order-2 lg:order-1" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700 p-6">
              <h3 className="font-semibold text-xl mb-4">{language === 'es' ? 'Características del Panel' : 'Panel Features'}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 rounded-full bg-zeno-purple/20 text-zeno-purple">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button 
                  className="bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white hover:glow group"
                  onClick={() => window.location.href = "https://panel.zenoscale.es"}
                >
                  <span className="flex items-center">
                    <Server className="mr-2 h-4 w-4" />
                    {ctaButton}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-zeno-purple/20 to-zeno-blue/20 opacity-30 z-0"></div>
              <img 
                src="/lovable-uploads/d2aa2bfa-9b68-4ece-9af0-da13bdef2ee1.png" 
                alt="ZenoScale Panel" 
                className="w-full h-auto object-cover rounded-lg relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
