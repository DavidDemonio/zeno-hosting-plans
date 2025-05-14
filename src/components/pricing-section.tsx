
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Server, Cpu, Database, HardDrive } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PlanProps {
  name: string;
  emoji: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  specs: {
    ram: string;
    cpu: string;
    storage: string;
    databases: number;
    backups: number;
    credits: number;
    serverLimit: string;
  };
  idealFor: string;
  perfectFor: string;
  packName?: string;
}

const plans: PlanProps[] = [
  {
    name: "FreePlan",
    emoji: "🪁",
    price: "0",
    period: "mes",
    specs: {
      ram: "4.7 GB",
      cpu: "2 vCores",
      storage: "8.1 GB",
      databases: 1,
      backups: 1,
      credits: 0,
      serverLimit: "1",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito"
    ],
    idealFor: "Testing, aprendizaje, y experimentos rápidos",
    perfectFor: "Probar antes de hacer upgrade",
  },
  {
    name: "MiniCube",
    emoji: "🧩",
    price: "2",
    period: "mes",
    packName: "Starter Pack",
    specs: {
      ram: "2.0 GB",
      cpu: "1.5 vCores",
      storage: "10.2 GB",
      databases: 1,
      backups: 1,
      credits: 20,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium"
    ],
    idealFor: "Pequeños proyectos, pruebas, bots ligeros",
    perfectFor: "Empezar con cargas mínimas",
  },
  {
    name: "Galaxy",
    emoji: "🌌",
    price: "2,80",
    period: "mes",
    packName: "Explorer Pack",
    specs: {
      ram: "3.0 GB",
      cpu: "2 vCores",
      storage: "15.0 GB",
      databases: 1,
      backups: 1,
      credits: 28,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado"
    ],
    idealFor: "Juegos simples o sitios web ligeros",
    perfectFor: "Aplicaciones básicas o entornos modded ligeros",
  },
  {
    name: "Obsidian",
    emoji: "🖤",
    price: "4,20",
    period: "mes",
    packName: "Shadow Pack",
    popular: true,
    specs: {
      ram: "4.0 GB",
      cpu: "2.5 vCores",
      storage: "20.0 GB",
      databases: 2,
      backups: 2,
      credits: 42,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos"
    ],
    idealFor: "Juegos multijugador, modpacks moderados",
    perfectFor: "Tráfico medio y apps web medianas",
  },
  {
    name: "Inferno",
    emoji: "🔥",
    price: "5,60",
    period: "mes",
    packName: "Blaze Pack",
    specs: {
      ram: "5.0 GB",
      cpu: "3.5 vCores",
      storage: "25.0 GB",
      databases: 3,
      backups: 2,
      credits: 56,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado"
    ],
    idealFor: "Modpacks exigentes, mundos multijugador medianos",
    perfectFor: "Proyectos que necesitan mejor rendimiento",
  },
  {
    name: "Storm",
    emoji: "⚡",
    price: "7",
    period: "mes",
    packName: "Thunder Pack",
    specs: {
      ram: "8.0 GB",
      cpu: "4 vCores",
      storage: "51.2 GB",
      databases: 4,
      backups: 3,
      credits: 70,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores"
    ],
    idealFor: "Muchos jugadores, grandes modpacks, apps web pesadas",
    perfectFor: "Proyectos intensivos en recursos",
  },
  {
    name: "Dragon",
    emoji: "🐉",
    price: "11,20",
    period: "mes",
    packName: "Mythic Pack",
    specs: {
      ram: "10.0 GB",
      cpu: "5.5 vCores",
      storage: "71.7 GB",
      databases: 6,
      backups: 4,
      credits: 112,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario"
    ],
    idealFor: "Modpacks como Pixelmon o RLCraft",
    perfectFor: "Servidores de comunidad de alto rendimiento",
  },
  {
    name: "Quantum",
    emoji: "⚡",
    price: "14",
    period: "mes",
    packName: "Apex Pack",
    specs: {
      ram: "12.0 GB",
      cpu: "6 vCores",
      storage: "102.4 GB",
      databases: 8,
      backups: 5,
      credits: 140,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad"
    ],
    idealFor: "Servidores avanzados, mundos personalizados, apps web grandes",
    perfectFor: "Rendimiento alto y múltiples usuarios",
  },
  {
    name: "Nebula",
    emoji: "🌌",
    price: "17",
    period: "mes",
    packName: "Cosmic Pack",
    specs: {
      ram: "16.0 GB",
      cpu: "6.5 vCores",
      storage: "190.4 GB",
      databases: 16,
      backups: 12,
      credits: 170,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad",
      "IP dedicada"
    ],
    idealFor: "Redes a gran escala, juegos de alto rendimiento",
    perfectFor: "Proyectos extensos y grandes comunidades",
  },
  {
    name: "Titan",
    emoji: "👑",
    price: "21",
    period: "mes",
    packName: "Royal Pack",
    specs: {
      ram: "20.0 GB",
      cpu: "7.5 vCores",
      storage: "254.8 GB",
      databases: 25,
      backups: 20,
      credits: 210,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad",
      "IP dedicada",
      "Recursos garantizados"
    ],
    idealFor: "Entornos masivos multijugador, eventos",
    perfectFor: "Gaming profesional, flexibilidad y alto rendimiento",
  },
  {
    name: "ZenoScale",
    emoji: "💎",
    price: "30",
    period: "mes",
    packName: "Zeno Pack",
    specs: {
      ram: "29.3 GB",
      cpu: "9.5 vCores",
      storage: "512.7 GB",
      databases: 100,
      backups: 100,
      credits: 300,
      serverLimit: "∞",
    },
    features: [
      "Instalación con un clic",
      "Protección DDoS",
      "Subdominio gratuito",
      "Soporte premium",
      "Panel avanzado",
      "Backups automáticos",
      "Dominio personalizado",
      "API para desarrolladores",
      "Soporte prioritario",
      "Alta disponibilidad",
      "IP dedicada",
      "Recursos garantizados",
      "Infraestructura dedicada"
    ],
    idealFor: "Proyectos de máximo nivel, redes a gran escala",
    perfectFor: "Aplicaciones exigentes y eventos de gran escala",
  },
];

export function PricingSection() {
  const [filter, setFilter] = useState('all');
  
  const visiblePlans = filter === 'all' 
    ? plans 
    : filter === 'basic' 
      ? plans.slice(0, 4) 
      : plans.slice(4);

  return (
    <section id="pricing" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes de <span className="gradient-text">Hosting</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-300">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1 bg-zinc-800/50 rounded-lg">
              <button 
                onClick={() => setFilter('all')}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  filter === 'all' 
                    ? "bg-zeno-purple text-white" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                Todos
              </button>
              <button 
                onClick={() => setFilter('basic')}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  filter === 'basic' 
                    ? "bg-zeno-purple text-white" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                Básicos
              </button>
              <button 
                onClick={() => setFilter('premium')}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  filter === 'premium' 
                    ? "bg-zeno-purple text-white" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                Premium
              </button>
            </div>
          </div>
        </div>
        
        <Carousel 
          className="w-full" 
          opts={{
            align: 'start',
            loop: true
          }}
        >
          <CarouselContent className="-ml-4">
            {visiblePlans.map((plan) => (
              <CarouselItem key={plan.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <PlanCard plan={plan} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 translate-y-0 left-0" />
            <CarouselNext className="relative static ml-2 translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: PlanProps }) {
  return (
    <div 
      className={cn(
        "flex flex-col rounded-xl overflow-hidden transition-all h-full",
        plan.popular ? "price-card-highlight" : "border border-zinc-800"
      )}
    >
      <div className="p-6 bg-card-gradient relative">
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-zeno-purple to-zeno-blue text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Popular
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{plan.emoji}</span>
            <h3 className="font-bold text-xl">{plan.name}</h3>
          </div>
        </div>
        
        <div className="flex items-baseline mb-6">
          <span className="text-3xl md:text-4xl font-bold">€{plan.price}</span>
          <span className="text-zinc-400 ml-1">/{plan.period}</span>
        </div>
        
        {plan.packName && (
          <div className="mb-4 text-sm bg-purple-900/30 border border-purple-700/30 rounded-md px-3 py-2 text-purple-300">
            {plan.packName}
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-sm text-zinc-400">RAM</div>
            </div>
            <div className="font-semibold">{plan.specs.ram}</div>
          </div>
          <div className="p-3 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-sm text-zinc-400">CPU</div>
            </div>
            <div className="font-semibold">{plan.specs.cpu}</div>
          </div>
          <div className="p-3 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-sm text-zinc-400">Almacenamiento</div>
            </div>
            <div className="font-semibold">{plan.specs.storage}</div>
          </div>
          <div className="p-3 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-sm text-zinc-400">Bases de datos</div>
            </div>
            <div className="font-semibold">{plan.specs.databases}</div>
          </div>
        </div>
        
        <Button 
          className={cn(
            "w-full hover:glow", 
            plan.popular 
              ? "bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90" 
              : "bg-zinc-800 hover:bg-zinc-700"
          )}
          onClick={() => window.location.href = "https://dash.zenoscale.es"}
        >
          Crear servidor
        </Button>
      </div>
      
      <div className="p-6 bg-zinc-900/50 flex-grow">
        <div className="mb-4">
          <div className="text-sm font-medium text-zinc-400">Ideal para:</div>
          <div>{plan.idealFor}</div>
        </div>
        <div className="mb-6">
          <div className="text-sm font-medium text-zinc-400">Perfecto para:</div>
          <div>{plan.perfectFor}</div>
        </div>
        
        <ul className="space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-zeno-purple" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
