
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import { AboutSection } from "@/components/about-section";
import { PanelShowcase } from "@/components/panel-showcase";

const Index = () => {
  const [shootingStars, setShootingStars] = useState<{ id: number, delay: number, duration: number, top: string, offset: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('es');
  
  // Initial loading animation
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Create shooting stars with random positions and timing
    const stars = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: Math.random() * 20,
      duration: Math.random() * 3 + 4,
      top: `${Math.random() * 30}vh`,
      offset: Math.random() * 5 - 2
    }));
    
    setShootingStars(stars);
    
    // Scroll animation
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-reveal');
      
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        if (isVisible) {
          element.classList.add('show');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zeno-dark relative overflow-hidden">
        <StarsBackground density={100} />
        <div className="initial-animation text-center z-10 relative">
          <div className="w-28 h-28 mx-auto mb-8">
            <img 
              src="/lovable-uploads/29ae7a2f-8957-4abc-aa16-19ef06e4ddad.png" 
              alt="ZenoScale" 
              className="w-full h-full object-contain" 
            />
          </div>
          <h1 className="text-5xl font-bold text-white">ZenoScale</h1>
          <div className="mt-6 flex justify-center space-x-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
          </div>
        </div>
        <div className="initial-shooting-star vertical"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <StarsBackground density={150} />
      
      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star vertical"
          style={{
            '--offset': star.offset,
            '--delay': star.delay
          } as React.CSSProperties}
        />
      ))}
      
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <FeaturesSection language={language} />
        <PricingSection language={language} />
        <AboutSection language={language} />
        <PanelShowcase language={language} />
        <CTASection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
