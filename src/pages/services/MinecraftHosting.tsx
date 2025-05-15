
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const MinecraftHosting = () => {
  const [language, setLanguage] = useState('es');
  
  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'es' ? 'Minecraft Hosting' : 'Minecraft Hosting'}
            </h1>
            <p className="mx-auto max-w-2xl text-zinc-300">
              {language === 'es' 
                ? 'Soluciones de hosting optimizadas para servidores de Minecraft.' 
                : 'Hosting solutions optimized for Minecraft servers.'}
            </p>
          </div>

          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 md:p-10">
            <p className="text-zinc-300">
              {language === 'es' 
                ? 'Información detallada sobre nuestros servicios de Minecraft Hosting estará disponible pronto.' 
                : 'Detailed information about our Minecraft Hosting services will be available soon.'}
            </p>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default MinecraftHosting;
