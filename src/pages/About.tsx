
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { useState } from "react";

const About = () => {
  const [language, setLanguage] = useState('es');
  
  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        <AboutSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default About;
