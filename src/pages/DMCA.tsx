
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const DMCA = () => {
  const [language, setLanguage] = useState('es');
  
  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'es' ? 'Política DMCA' : 'DMCA Policy'}
            </h1>
            <p className="text-zinc-400 mb-8">
              {language === 'es' ? 'Última actualización: 15 de Mayo, 2025' : 'Last updated: May 15, 2025'}
            </p>
            
            <p className="text-zinc-300">
              {language === 'es' 
                ? 'Información sobre nuestra política DMCA estará disponible pronto.' 
                : 'Information about our DMCA policy will be available soon.'}
            </p>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default DMCA;
