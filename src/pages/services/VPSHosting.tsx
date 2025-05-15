
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const VPSHosting = () => {
  const [language, setLanguage] = useState('es');
  
  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'es' ? 'VPS Hosting' : 'VPS Hosting'}
            </h1>
            <p className="mx-auto max-w-2xl text-zinc-300">
              {language === 'es' 
                ? 'Servidores virtuales de alto rendimiento para todas sus necesidades.' 
                : 'High-performance virtual servers for all your needs.'}
            </p>
          </div>

          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 md:p-10">
            <p className="text-zinc-300">
              {language === 'es' 
                ? 'Información detallada sobre nuestros servicios de VPS Hosting estará disponible pronto.' 
                : 'Detailed information about our VPS Hosting services will be available soon.'}
            </p>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default VPSHosting;
