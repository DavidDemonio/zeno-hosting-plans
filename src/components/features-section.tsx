
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Características <span className="gradient-text">Excepcionales</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-300">
            Todo lo que necesitas para ejecutar tus aplicaciones y juegos sin problemas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<RocketIcon />}
            title="Alto rendimiento"
            description="Impulsado por hardware de última generación para máxima velocidad"
            className="animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          />
          
          <FeatureCard
            icon={<ShieldIcon />}
            title="Protección DDoS"
            description="Protección 24/7 contra ataques DDoS incluida"
            className="animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          />
          
          <FeatureCard
            icon={<ClockIcon />}
            title="Configuración instantánea"
            description="Pon en marcha tu servidor en minutos"
            className="animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          />
          
          <FeatureCard
            icon={<ServerIcon />}
            title="Acceso root completo"
            description="Control total sobre tu servidor virtual"
            className="animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          />
          
          <FeatureCard
            icon={<ChipIcon />}
            title="Hardware potente"
            description="CPUs de última generación y SSDs NVMe"
            className="animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          />
          
          <FeatureCard
            icon={<GamepadIcon />}
            title="Panel intuitivo"
            description="Panel de control fácil de usar para tus juegos"
            className="animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, className, ...props }: FeatureCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "relative p-6 rounded-xl bg-card-gradient border border-zinc-800 hover:border-zeno-purple/50 transition-all group",
        className
      )}
      {...props}
    >
      <div className="p-3 mb-4 rounded-lg bg-zinc-800/50 w-fit group-hover:bg-zeno-purple/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">{description}</p>
      <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-zeno-purple/10 to-zeno-blue/10 blur-lg transition-opacity"></div>
    </div>
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
