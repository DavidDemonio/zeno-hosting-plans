import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detailedDescription: string;
  className?: string;
}

interface FeaturesSectionProps {
  language: string;
}

export function FeaturesSection({ language }: FeaturesSectionProps) {
  const content = {
    es: {
      title: "Características",
      highlight: "Excepcionales",
      description: "Todo lo que necesitas para ejecutar tus aplicaciones y juegos sin problemas",
      features: [
        {
          title: "Alto rendimiento",
          description: "Impulsado por hardware de última generación para máxima velocidad",
          detailedDescription: "Nuestros servidores utilizan procesadores de última generación, memoria DDR4 de alta velocidad y discos SSD NVMe para ofrecer un rendimiento excepcional. La optimización de redes garantiza latencias mínimas y máxima estabilidad incluso en los momentos de mayor carga."
        },
        {
          title: "Protección DDoS",
          description: "Protección 24/7 contra ataques DDoS incluida",
          detailedDescription: "Nuestra protección DDoS avanzada mitiga automáticamente ataques de hasta 1Tbps sin interrumpir tu servicio. Sistema de detección de anomalías en tiempo real y filtrado inteligente para garantizar que tu aplicación esté siempre disponible."
        },
        {
          title: "Configuración instantánea",
          description: "Pon en marcha tu servidor en minutos",
          detailedDescription: "Nuestro sistema automatizado permite desplegar servidores en menos de 60 segundos. Selecciona tu configuración, realiza el pago y tu servidor estará listo para usar inmediatamente con todas las herramientas preconfiguradas."
        },
        {
          title: "Acceso root completo",
          description: "Control total sobre tu servidor virtual",
          detailedDescription: "Obtén acceso total a tu máquina con privilegios de superusuario. Instala cualquier software, personaliza configuraciones a nivel de sistema operativo y ejecuta tus aplicaciones exactamente como necesitas sin restricciones."
        },
        {
          title: "Hardware potente",
          description: "CPUs de última generación y SSDs NVMe",
          detailedDescription: "Equipados con procesadores Intel Xeon o AMD EPYC de última generación, memoria RAM DDR4 ECC y almacenamiento NVMe con velocidades de lectura/escritura superiores a 3000MB/s para garantizar que tus aplicaciones se ejecuten sin cuellos de botella."
        },
        {
          title: "Panel intuitivo",
          description: "Panel de control fácil de usar para tus juegos",
          detailedDescription: "Nuestro panel de administración está diseñado pensando en la facilidad de uso. Interfaz limpia e intuitiva que permite gestionar todos los aspectos de tu servidor sin conocimientos técnicos avanzados. Incluye herramientas de monitorización en tiempo real."
        }
      ]
    },
    en: {
      title: "Exceptional",
      highlight: "Features",
      description: "Everything you need to run your applications and games smoothly",
      features: [
        {
          title: "High performance",
          description: "Powered by cutting-edge hardware for maximum speed",
          detailedDescription: "Our servers use the latest generation processors, high-speed DDR4 memory, and NVMe SSDs to deliver exceptional performance. Network optimization ensures minimal latency and maximum stability even during peak loads."
        },
        {
          title: "DDoS Protection",
          description: "24/7 protection against DDoS attacks included",
          detailedDescription: "Our advanced DDoS protection automatically mitigates attacks of up to 1Tbps without interrupting your service. Real-time anomaly detection system and intelligent filtering to ensure your application is always available."
        },
        {
          title: "Instant Setup",
          description: "Get your server up and running in minutes",
          detailedDescription: "Our automated system allows you to deploy servers in less than 60 seconds. Select your configuration, make the payment, and your server will be ready to use immediately with all tools preconfigured."
        },
        {
          title: "Full Root Access",
          description: "Total control over your virtual server",
          detailedDescription: "Get complete access to your machine with superuser privileges. Install any software, customize system-level configurations, and run your applications exactly as you need them without restrictions."
        },
        {
          title: "Powerful Hardware",
          description: "Latest generation CPUs and NVMe SSDs",
          detailedDescription: "Equipped with the latest generation Intel Xeon or AMD EPYC processors, ECC DDR4 RAM, and NVMe storage with read/write speeds above 3000MB/s to ensure your applications run without bottlenecks."
        },
        {
          title: "Intuitive Panel",
          description: "Easy-to-use control panel for your games",
          detailedDescription: "Our administration panel is designed with ease of use in mind. Clean and intuitive interface that allows you to manage all aspects of your server without advanced technical knowledge. Includes real-time monitoring tools."
        }
      ]
    }
  };

  const { title, highlight, description, features } = content[language as keyof typeof content];

  return (
    <section id="features" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title} <span className="gradient-text">{highlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-300">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TooltipProvider delayDuration={2000}>
            <FeatureCard
              icon={<RocketIcon />}
              title={features[0].title}
              description={features[0].description}
              detailedDescription={features[0].detailedDescription}
              className="scroll-reveal"
              style={{ transitionDelay: '0.1s' }}
            />
            
            <FeatureCard
              icon={<ShieldIcon />}
              title={features[1].title}
              description={features[1].description}
              detailedDescription={features[1].detailedDescription}
              className="scroll-reveal"
              style={{ transitionDelay: '0.2s' }}
            />
            
            <FeatureCard
              icon={<ClockIcon />}
              title={features[2].title}
              description={features[2].description}
              detailedDescription={features[2].detailedDescription}
              className="scroll-reveal"
              style={{ transitionDelay: '0.3s' }}
            />
            
            <FeatureCard
              icon={<ServerIcon />}
              title={features[3].title}
              description={features[3].description}
              detailedDescription={features[3].detailedDescription}
              className="scroll-reveal"
              style={{ transitionDelay: '0.4s' }}
            />
            
            <FeatureCard
              icon={<ChipIcon />}
              title={features[4].title}
              description={features[4].description}
              detailedDescription={features[4].detailedDescription}
              className="scroll-reveal"
              style={{ transitionDelay: '0.5s' }}
            />
            
            <FeatureCard
              icon={<GamepadIcon />}
              title={features[5].title}
              description={features[5].description}
              detailedDescription={features[5].detailedDescription}
              className="scroll-reveal"
              style={{ transitionDelay: '0.6s' }}
            />
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, detailedDescription, className, ...props }: FeatureCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Tooltip open={isHovering}>
      <TooltipTrigger asChild>
        <div 
          className={cn(
            "relative p-6 rounded-xl bg-card-gradient border border-zinc-800 hover:border-zeno-purple/50 transition-all group hover-lift",
            className
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          {...props}
        >
          <div className="p-3 mb-4 rounded-lg bg-zinc-800/50 w-fit group-hover:bg-zeno-purple/20 transition-colors">
            {icon}
          </div>
          <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">{description}</p>
          <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-zeno-purple/10 to-zeno-blue/10 blur-lg transition-opacity"></div>
        </div>
      </TooltipTrigger>
      <TooltipContent 
        side="right" 
        className="max-w-xs p-4 bg-zinc-900/95 border-zinc-700 backdrop-blur-lg animate-fade-in"
      >
        <p className="text-sm">{detailedDescription}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// Simple Icon Components
function RocketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zeno-purple">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zeno-purple">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zeno-purple">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zeno-purple">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zeno-purple">
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M9 2v2"></path>
      <path d="M15 2v2"></path>
      <path d="M9 20v2"></path>
      <path d="M15 20v2"></path>
      <path d="M2 9h2"></path>
      <path d="M2 15h2"></path>
      <path d="M20 9h2"></path>
      <path d="M20 15h2"></path>
    </svg>
  );
}

function GamepadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zeno-purple">
      <line x1="6" y1="12" x2="10" y2="12"></line>
      <line x1="8" y1="10" x2="8" y2="14"></line>
      <circle cx="15" cy="13" r="1"></circle>
      <circle cx="17" cy="11" r="1"></circle>
      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
    </svg>
  );
}
