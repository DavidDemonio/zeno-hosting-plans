
import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "@/components/ui/terminal";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TerminalSectionProps {
  language: string;
}

export function TerminalSection({ language }: TerminalSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // 30% of the element is visible
      }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  const content = {
    es: {
      title: "Acceso completo de root",
      description: "Toma el control total de tu VPS con acceso root y nuestra interfaz de terminal intuitiva.",
      accessButton: "Acceso a Terminal",
      secureAccess: "Acceso seguro",
      secureAccessDesc: "La autenticación de claves SSH y los protocolos seguros aseguran que tu VPS se mantiene protegida mientras mantienes el control total.",
      rootPrivileges: "Privilegios de root",
      rootPrivilegesDesc: "El acceso completo de root te permite instalar cualquier software, configurar servicios y personalizar tu entorno del servidor.",
      commandLinePower: "Poder de la Línea de Comandos",
      commandLinePowerDesc: "Accede a herramientas y utilidades de línea de comandos poderosas para la gestión avanzada y automatización del servidor."
    },
    en: {
      title: "Complete Root Access",
      description: "Take full control of your VPS with root access and our intuitive terminal interface.",
      accessButton: "Terminal Access",
      secureAccess: "Secure Access",
      secureAccessDesc: "SSH key authentication and secure protocols ensure your VPS remains protected while you maintain full control.",
      rootPrivileges: "Root Privileges",
      rootPrivilegesDesc: "Full root access allows you to install any software, configure services, and customize your server environment.",
      commandLinePower: "Command Line Power",
      commandLinePowerDesc: "Access powerful command line tools and utilities for advanced server management and automation."
    }
  };

  // Make sure language is 'es' or 'en', with 'es' as default
  const validLanguage = language && (language === 'en' || language === 'es') ? language : 'es';
  const { 
    title, 
    description, 
    accessButton, 
    secureAccess, 
    secureAccessDesc,
    rootPrivileges,
    rootPrivilegesDesc,
    commandLinePower,
    commandLinePowerDesc
  } = content[validLanguage];

  return (
    <section className="py-16 md:py-24 lg:py-28 relative overflow-hidden scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text glow-text">
            {title}
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-6">
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:bg-blue-950/20 transition-all space-x-2"
            >
              <span>{accessButton}</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div 
            ref={terminalRef}
            className={`order-2 md:order-1 flex justify-center transition-all duration-700 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-20"
            }`}
          >
            <Terminal language={validLanguage} />
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <div className="bg-black/30 p-6 rounded-lg border border-blue-900/50 backdrop-blur-sm">
              <h3 className="flex items-start text-xl font-semibold mb-2 text-blue-400">
                <span className="text-blue-500 mr-2">🔒</span>
                {secureAccess}
              </h3>
              <p className="text-zinc-300">
                {secureAccessDesc}
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg border border-blue-900/50 backdrop-blur-sm">
              <h3 className="flex items-start text-xl font-semibold mb-2 text-blue-400">
                <span className="text-blue-500 mr-2">⚙️</span>
                {rootPrivileges}
              </h3>
              <p className="text-zinc-300">
                {rootPrivilegesDesc}
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg border border-blue-900/50 backdrop-blur-sm">
              <h3 className="flex items-start text-xl font-semibold mb-2 text-blue-400">
                <span className="text-blue-500 mr-2">💻</span>
                {commandLinePower}
              </h3>
              <p className="text-zinc-300">
                {commandLinePowerDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
