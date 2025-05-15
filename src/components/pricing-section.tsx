
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Cpu, Database, HardDrive } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from 'framer-motion';
import { Plan, plans } from '@/config/plans';

interface PricingSectionProps {
  language: string;
}

export function PricingSection({ language }: PricingSectionProps) {
  const [filter, setFilter] = useState('all');
  
  const visiblePlans = filter === 'all' 
    ? plans 
    : filter === 'basic' 
      ? plans.slice(0, 4) 
      : plans.slice(4);

  const content = {
    es: {
      title: "Planes de",
      highlight: "Hosting",
      description: "Elige el plan que mejor se adapte a tus necesidades",
      filters: {
        all: "Todos",
        basic: "Básicos",
        premium: "Premium"
      },
      createBtn: "Crear servidor",
      idealFor: "Ideal para:",
      perfectFor: "Perfecto para:",
      period: "/mes"
    },
    en: {
      title: "Hosting",
      highlight: "Plans",
      description: "Choose the plan that best suits your needs",
      filters: {
        all: "All",
        basic: "Basic",
        premium: "Premium"
      },
      createBtn: "Create server",
      idealFor: "Ideal for:",
      perfectFor: "Perfect for:",
      period: "/month"
    }
  };

  // Asegurarse de que language sea 'es' o 'en', con 'es' como valor predeterminado
  const validLanguage = language && (language === 'en' || language === 'es') ? language : 'es';

  const { title, highlight, description, filters, createBtn, idealFor, perfectFor, period } = 
    content[validLanguage];

  return (
    <section id="pricing" className="py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title} <span className="gradient-text glow-text">{highlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-300">
            {description}
          </p>
          
          <div className="flex justify-center mt-6">
            <div className="inline-flex p-1 bg-zinc-800/50 rounded-lg backdrop-blur-sm">
              <button 
                onClick={() => setFilter('all')}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  filter === 'all' 
                    ? "bg-zeno-purple text-white" 
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {filters.all}
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
                {filters.basic}
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
                {filters.premium}
              </button>
            </div>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Carousel 
              className="w-full scroll-reveal" 
              opts={{
                align: 'start',
                loop: true
              }}
            >
              <CarouselContent className="-ml-4">
                {visiblePlans.map((plan, index) => (
                  <CarouselItem key={plan.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: index * 0.1
                        }
                      }}
                    >
                      <PlanCard 
                        plan={plan} 
                        language={validLanguage} 
                        idealForLabel={idealFor} 
                        perfectForLabel={perfectFor} 
                        createBtnText={createBtn}
                        periodText={period}
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static mr-2 translate-y-0 left-0" />
                <CarouselNext className="relative static ml-2 translate-y-0 right-0" />
              </div>
            </Carousel>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PlanCard({ plan, language, idealForLabel, perfectForLabel, createBtnText, periodText }: { 
  plan: Plan; 
  language: string;
  idealForLabel: string;
  perfectForLabel: string;
  createBtnText: string;
  periodText: string;
}) {
  return (
    <div 
      className={cn(
        "flex flex-col rounded-xl overflow-hidden transition-all h-full hover-lift",
        plan.popular ? "price-card-highlight" : "border border-zinc-800"
      )}
    >
      <div className="p-5 bg-card-gradient relative">
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-zeno-purple to-zeno-blue text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            {language === 'es' ? 'Popular' : 'Popular'}
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{plan.emoji}</span>
            <h3 className="font-bold text-xl">{plan.name}</h3>
          </div>
        </div>
        
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">€{plan.price}</span>
          <span className="text-zinc-400 ml-1">{periodText}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-2 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-1">
              <Cpu className="h-3 w-3 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-xs text-zinc-400">RAM</div>
            </div>
            <div className="font-semibold text-sm">{plan.specs.ram}</div>
          </div>
          <div className="p-2 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-1">
              <Cpu className="h-3 w-3 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-xs text-zinc-400">CPU</div>
            </div>
            <div className="font-semibold text-sm">{plan.specs.cpu}</div>
          </div>
          <div className="p-2 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-1">
              <HardDrive className="h-3 w-3 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-xs text-zinc-400">{language === 'es' ? 'Almacenamiento' : 'Storage'}</div>
            </div>
            <div className="font-semibold text-sm">{plan.specs.storage}</div>
          </div>
          <div className="p-2 bg-zinc-800/50 rounded-lg group hover:bg-zinc-800/80 transition-all cursor-pointer hover:glow">
            <div className="flex items-center gap-1">
              <Database className="h-3 w-3 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
              <div className="text-xs text-zinc-400">{language === 'es' ? 'Bases de datos' : 'Databases'}</div>
            </div>
            <div className="font-semibold text-sm">{plan.specs.databases}</div>
          </div>
        </div>
        
        <Button 
          className={cn(
            "w-full transition-all hover-button", 
            plan.popular 
              ? "bg-gradient-to-r from-zeno-purple to-zeno-blue hover:glow hover:brightness-110" 
              : "bg-zinc-800 hover:bg-zinc-700 hover:glow"
          )}
          onClick={() => window.location.href = "https://dash.zenoscale.es"}
        >
          {createBtnText}
        </Button>
      </div>
      
      <div className="p-5 bg-zinc-900/50 flex-grow">
        <div className="mb-3">
          <div className="text-sm font-medium text-zinc-400">{idealForLabel}</div>
          <div className="text-sm">{plan.idealFor}</div>
        </div>
        <div className="mb-4">
          <div className="text-sm font-medium text-zinc-400">{perfectForLabel}</div>
          <div className="text-sm">{plan.perfectFor}</div>
        </div>
        
        <ul className="space-y-1">
          {plan.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center text-sm">
              <Check className="h-3 w-3 mr-2 text-zeno-purple" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
