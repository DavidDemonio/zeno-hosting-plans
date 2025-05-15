
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AboutSectionProps {
  language: string;
}

export function AboutSection({ language }: AboutSectionProps) {
  const navigate = useNavigate();
  
  const content = {
    es: {
      title: "Sobre",
      highlight: "Nosotros",
      description: "Somos un equipo de entusiastas de la tecnología comprometidos con ofrecer las mejores soluciones de hosting para tus proyectos. Con años de experiencia en la industria, entendemos las necesidades de nuestros clientes y trabajamos para superarlas.",
      mission: "Nuestra misión es proporcionar servicios de alojamiento web confiables, seguros y de alto rendimiento que ayuden a nuestros clientes a alcanzar sus objetivos en línea.",
      values: "Valores",
      valuesList: [
        "Calidad y rendimiento excepcional",
        "Atención al cliente personalizada",
        "Innovación constante",
        "Seguridad y protección de datos"
      ],
      ctaButton: "Contáctanos",
      learnMore: "Conoce más"
    },
    en: {
      title: "About",
      highlight: "Us",
      description: "We are a team of technology enthusiasts committed to providing the best hosting solutions for your projects. With years of experience in the industry, we understand our customers' needs and work to exceed them.",
      mission: "Our mission is to provide reliable, secure, and high-performance web hosting services that help our customers achieve their online goals.",
      values: "Values",
      valuesList: [
        "Exceptional quality and performance",
        "Personalized customer service",
        "Constant innovation",
        "Security and data protection"
      ],
      ctaButton: "Contact Us",
      learnMore: "Learn More"
    }
  };

  // Make sure language is 'es' or 'en', with 'es' as default
  const validLanguage = language === 'en' ? 'en' : 'es';
  
  const { title, highlight, description, mission, values, valuesList, ctaButton, learnMore } = content[validLanguage];

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  return (
    <section id="about" className="py-16 lg:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {title} <span className="gradient-text glow-text">{highlight}</span>
            </h2>
            
            <p className="text-zinc-300 mb-6">
              {description}
            </p>
            
            <div className="bg-zinc-800/50 rounded-lg p-6 mb-6 border border-zinc-700">
              <h3 className="font-semibold text-xl mb-2 gradient-text">{language === 'es' ? 'Nuestra Misión' : 'Our Mission'}</h3>
              <p className="text-zinc-300">
                {mission}
              </p>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white hover:glow group"
              onClick={() => window.location.href = "/contact"}
            >
              <span className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                {ctaButton}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
          
          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700 p-8">
              <h3 className="font-semibold text-xl mb-4 gradient-text">{values}</h3>
              <ul className="space-y-4">
                {valuesList.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-3 rounded-full bg-zeno-purple/20 text-zeno-purple">
                      <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 text-right">
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  handleLearnMoreClick();
                }} className="text-zeno-purple hover:text-white hover-button inline-flex items-center text-sm">
                  {learnMore}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
