
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const Partners = () => {
  const [language, setLanguage] = useState('es');
  
  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'es' ? 'Programa de Partners' : 'Partners Program'}
            </h1>
            
            <p className="text-zinc-300 mb-8">
              {language === 'es' 
                ? 'Información sobre nuestro programa de partners estará disponible pronto.' 
                : 'Information about our partners program will be available soon.'}
            </p>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Partners;
