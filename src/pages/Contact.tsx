
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const Contact = () => {
  const [language, setLanguage] = useState('es');
  
  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h1>
            
            <p className="text-zinc-300 mb-8">
              {language === 'es' 
                ? 'Puedes ponerte en contacto con nosotros a través de los siguientes canales.' 
                : 'You can contact us through the following channels.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-zeno-purple">
                  {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
                </h2>
                <ul className="space-y-4 text-zinc-300">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:info@zenoscale.es" className="text-zeno-blue hover:underline">info@zenoscale.es</a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Discord:</span>
                    <a href="https://discord.zenoscale.es" className="text-zeno-blue hover:underline">discord.zenoscale.es</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Contact;
