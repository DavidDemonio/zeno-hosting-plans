
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [shootingStars, setShootingStars] = useState<{ id: number, delay: number, duration: number, top: string }[]>([]);

  useEffect(() => {
    // Create shooting stars with random positions and timing
    const stars = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: Math.random() * 20,
      duration: Math.random() * 3 + 4,
      top: `${Math.random() * 30}vh`
    }));
    
    setShootingStars(stars);
  }, []);

  return (
    <div className="min-h-screen relative">
      <StarsBackground density={150} />
      
      {/* Shooting stars */}
      {shootingStars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
      
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
