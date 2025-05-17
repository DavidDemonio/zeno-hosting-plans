
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Users,
  Award,
  Globe,
  BarChart,
  Heart,
  Clock,
  Server,
  Shield,
  Rocket
} from "lucide-react";

const About = () => {
  const [language, setLanguage] = useState('es');
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const content = {
    es: {
      title: "Sobre Nosotros",
      subtitle: "Quiénes somos",
      description: "En ZenoScale, nos apasiona proporcionar soluciones de hosting de alta calidad para desarrolladores, gamers y empresas.",
      mission: "Nuestra misión",
      missionText: "Proporcionar servicios de alojamiento web confiables, seguros y de alto rendimiento que ayuden a nuestros clientes a alcanzar sus objetivos en línea.",
      vision: "Nuestra visión",
      visionText: "Convertirnos en el proveedor de hosting preferido para clientes que valoran la calidad, la innovación y el servicio personalizado.",
      history: "Nuestra historia",
      historyText: "Fundada en 2025, ZenoScale nació de la pasión por la tecnología y la necesidad de ofrecer servicios de hosting superiores a precios competitivos. Desde entonces, hemos crecido constantemente, ampliando nuestra infraestructura y mejorando nuestros servicios.",
      valuesTitle: "Nuestros valores fundamentales",
      team: "Nuestro equipo",
      teamText: "Contamos con un equipo de profesionales apasionados por la tecnología y dedicados a proporcionar el mejor servicio posible a nuestros clientes.",
      infrastructureTitle: "Infraestructura de Alto Rendimiento",
      infrastructureText: "Nuestros centros de datos de última generación garantizan rendimiento, seguridad y confiabilidad para todos tus proyectos.",
      technologies: "Nuestras Tecnologías"
    },
    en: {
      title: "About Us",
      subtitle: "Who We Are",
      description: "At ZenoScale, we're passionate about providing high-quality hosting solutions for developers, gamers, and businesses.",
      mission: "Our Mission",
      missionText: "To provide reliable, secure, and high-performance web hosting services that help our customers achieve their online goals.",
      vision: "Our Vision",
      visionText: "To become the preferred hosting provider for customers who value quality, innovation, and personalized service.",
      history: "Our History",
      historyText: "Founded in 2025, ZenoScale was born from a passion for technology and the need to offer superior hosting services at competitive prices. Since then, we have consistently grown, expanding our infrastructure and improving our services.",
      valuesTitle: "Our Core Values",
      team: "Our Team",
      teamText: "We have a team of professionals passionate about technology and dedicated to providing the best possible service to our customers.",
      infrastructureTitle: "High-Performance Infrastructure",
      infrastructureText: "Our state-of-the-art data centers ensure performance, security, and reliability for all your projects.",
      technologies: "Our Technologies"
    }
  };

  const values = [
    {
      icon: Users,
      titleEs: "Enfoque en el cliente",
      titleEn: "Customer Focus",
      descriptionEs: "Trabajamos incansablemente para superar las expectativas de nuestros clientes y proporcionarles un servicio excepcional.",
      descriptionEn: "We work tirelessly to exceed our customers' expectations and provide them with exceptional service."
    },
    {
      icon: Award,
      titleEs: "Excelencia",
      titleEn: "Excellence",
      descriptionEs: "Nos esforzamos por la excelencia en todo lo que hacemos, desde la calidad de nuestros servicios hasta el soporte al cliente.",
      descriptionEn: "We strive for excellence in everything we do, from the quality of our services to customer support."
    },
    {
      icon: Globe,
      titleEs: "Innovación",
      titleEn: "Innovation",
      descriptionEs: "Estamos constantemente innovando y mejorando nuestros servicios para mantenernos a la vanguardia de la tecnología.",
      descriptionEn: "We are constantly innovating and improving our services to stay at the forefront of technology."
    },
    {
      icon: BarChart,
      titleEs: "Rendimiento",
      titleEn: "Performance",
      descriptionEs: "Nos comprometemos a ofrecer el mejor rendimiento posible para todos nuestros servicios de hosting.",
      descriptionEn: "We are committed to delivering the best possible performance for all our hosting services."
    },
    {
      icon: Heart,
      titleEs: "Pasión",
      titleEn: "Passion",
      descriptionEs: "Nuestra pasión por la tecnología impulsa todo lo que hacemos y nos inspira a seguir mejorando.",
      descriptionEn: "Our passion for technology drives everything we do and inspires us to keep improving."
    },
    {
      icon: Clock,
      titleEs: "Fiabilidad",
      titleEn: "Reliability",
      descriptionEs: "Entendemos la importancia de la fiabilidad y nos esforzamos por mantener un tiempo de actividad del 99.9%.",
      descriptionEn: "We understand the importance of reliability and strive to maintain 99.9% uptime."
    }
  ];
  
  const technologies = [
    { icon: Server, name: "AMD EPYC" },
    { icon: Shield, name: "Firewall" },
    { icon: Rocket, name: "NVMe SSD" },
    { icon: Globe, name: "CDN" },
    { icon: Clock, name: "99.9% Uptime" },
    { icon: BarChart, name: "Analytics" }
  ];
  
  const validLanguage = language === 'en' ? 'en' : 'es';
  const pageContent = content[validLanguage];
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-[#070c14] text-white overflow-x-hidden">
      <StarsBackground density={80} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16 relative z-10">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4 gradient-text glow-text"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                {pageContent.title}
              </motion.h1>
              
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-zeno-purple to-zeno-blue mx-auto mb-6"
                initial={{ width: 0 }}
                animate={isLoaded ? { width: 96 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              
              <motion.p 
                className="text-xl text-zinc-300 max-w-2xl mx-auto"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {pageContent.description}
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-8 md:py-12 bg-zinc-800/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div 
                className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 backdrop-blur-sm relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)",
                  borderColor: "rgba(155, 135, 245, 0.4)"
                }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">{pageContent.mission}</h2>
                <p className="text-zinc-300">{pageContent.missionText}</p>
              </motion.div>
              
              <motion.div 
                className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 backdrop-blur-sm relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  boxShadow: "0 10px 25px -5px rgba(51, 195, 240, 0.2)",
                  borderColor: "rgba(51, 195, 240, 0.4)"
                }}
              >
                <h2 className="text-2xl font-bold mb-4 gradient-text">{pageContent.vision}</h2>
                <p className="text-zinc-300">{pageContent.visionText}</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Infrastructure Image Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="rounded-xl overflow-hidden border border-zinc-700 shadow-lg relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img 
                  src="/lovable-uploads/d2aa2bfa-9b68-4ece-9af0-da13bdef2ee1.png" 
                  alt="ZenoScale Data Center" 
                  className="w-full h-auto md:h-[400px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 gradient-text">
                      {pageContent.infrastructureTitle}
                    </h3>
                    <p className="text-zinc-100 text-sm md:text-base max-w-2xl">
                      {pageContent.infrastructureText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">{pageContent.history}</h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">{pageContent.historyText}</p>
            </motion.div>
            
            {/* Timeline visualization - Simplified for better performance */}
            <div className="relative py-8 mt-12">
              {!isMobile && (
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-zeno-purple to-zeno-blue"></div>
              )}
              
              <div className="relative z-10">
                <TimelineItem 
                  date="2025" 
                  title={language === 'es' ? 'Abril 2025' : 'April 2025'}
                  description={language === 'es' 
                    ? 'Lanzamiento de ZenoScale con servicios de Game Hosting para Minecraft y otros juegos.'
                    : 'Launch of ZenoScale with Game Hosting services for Minecraft and other games.'}
                  delay={0.3}
                  position="left"
                  isMobile={isMobile}
                />
                
                <TimelineItem 
                  date="2025" 
                  title={language === 'es' ? 'Mayo 2025' : 'May 2025'}
                  description={language === 'es' 
                    ? 'Expansión a Web Hosting, automatizaciones y servicios VPS para desarrolladores y empresas.'
                    : 'Expansion to Web Hosting, automations and VPS services for developers and companies.'}
                  delay={0.5}
                  position="right"
                  isMobile={isMobile}
                />
                
                <TimelineItem 
                  date="2025" 
                  title={language === 'es' ? 'Junio 2025' : 'June 2025'}
                  description={language === 'es' 
                    ? 'Inicio de los servicios de Bare Metal para aplicaciones con altos requisitos de rendimiento.'
                    : 'Start of Bare Metal services for applications with high performance requirements.'}
                  delay={0.7}
                  position="left"
                  isMobile={isMobile}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-12 md:py-16 bg-zinc-800/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">{pageContent.valuesTitle}</h2>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {values.map((value, index) => (
                <ValueCard 
                  key={index}
                  icon={value.icon}
                  title={language === 'es' ? value.titleEs : value.titleEn}
                  description={language === 'es' ? value.descriptionEs : value.descriptionEn}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">{pageContent.team}</h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">{pageContent.teamText}</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamMember 
                name="David Torres"
                position={language === 'es' ? "CEO & CTO" : "CEO & CTO"}
                description={language === 'es' 
                  ? "Apasionado por la tecnología y la innovación, con amplia experiencia en desarrollo e infraestructura de hosting."
                  : "Passionate about technology and innovation, with extensive experience in development and hosting infrastructure."}
                color="purple"
                delay={0.2}
              />
              
              <TeamMember 
                name="Carlos Alarcón"
                position={language === 'es' ? "CO-CEO & Business Assistant" : "CO-CEO & Business Assistant"}
                description={language === 'es' 
                  ? "Especialista en estrategia de negocio y marketing, responsable del crecimiento y relaciones comerciales de ZenoScale."
                  : "Specialist in business strategy and marketing, responsible for growth and commercial relations of ZenoScale."}
                color="blue"
                delay={0.3}
              />
            </div>
          </div>
        </section>
        
        {/* Tech Stack Section */}
        <section className="py-12 md:py-16 bg-zinc-800/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                {pageContent.technologies}
              </h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
                {language === 'es' 
                  ? 'Utilizamos lo último en tecnología para ofrecer el mejor rendimiento y seguridad para tus proyectos.'
                  : 'We use the latest technology to provide the best performance and security for your projects.'}
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {technologies.map((tech, i) => (
                <TechCard key={i} icon={tech.icon} name={tech.name} index={i} />
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Use AboutSection component */}
        <AboutSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

// Extracted components for better performance and maintainability
const TimelineItem = ({ date, title, description, delay, position, isMobile }) => {
  return (
    <motion.div 
      className={`flex flex-col ${isMobile ? '' : 'md:flex-row items-center'} mb-12 ${isMobile ? '' : position === 'right' ? 'md:justify-end' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={`bg-zinc-800 border border-zinc-700 p-6 rounded-xl ${
        isMobile ? 'mb-4 w-full' : 
        position === 'right' 
          ? 'mr-0 ml-6 md:w-[calc(50%-3rem)]' 
          : 'ml-0 mr-6 md:text-right md:w-[calc(50%-3rem)]'
      } relative z-10`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-300">{description}</p>
      </div>
      
      <motion.div 
        className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
          position === 'right' ? 'bg-zeno-blue' : 'bg-zeno-purple'
        } ${isMobile ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.5, boxShadow: `0 0 15px 5px ${position === 'right' ? 'rgba(51, 195, 240, 0.5)' : 'rgba(155, 135, 245, 0.5)'}` }}
      />
    </motion.div>
  );
};

const ValueCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700 backdrop-blur-sm group hover:border-zeno-purple/50 transition-all z-10 relative"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)"
      }}
    >
      <div className="p-3 mb-4 rounded-lg bg-zinc-700/50 w-fit group-hover:bg-zeno-purple/20 transition-colors">
        <Icon className="h-6 w-6 text-zeno-purple" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-300">{description}</p>
    </motion.div>
  );
};

const TeamMember = ({ name, position, description, color, delay }) => {
  const colorClass = color === 'purple' ? 'text-zeno-purple' : 'text-zeno-blue';
  const glowColor = color === 'purple' 
    ? 'rgba(155, 135, 245, 0.3)' 
    : 'rgba(51, 195, 240, 0.3)';
  
  return (
    <motion.div 
      className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -5, 
        boxShadow: `0 10px 30px -5px ${glowColor}`
      }}
    >
      <div className="h-64 bg-gradient-to-br from-zeno-purple/20 to-zeno-blue/20 flex items-center justify-center">
        <motion.div
          animate={{ 
            boxShadow: [`0 0 20px 10px ${glowColor}`, `0 0 40px 10px ${glowColor}`, `0 0 20px 10px ${glowColor}`],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Users className={`h-24 w-24 ${colorClass} opacity-70`} />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className={`${colorClass} mb-3`}>{position}</p>
        <p className="text-zinc-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const TechCard = ({ icon: Icon, name, index }) => {
  return (
    <motion.div
      className="bg-zinc-800 rounded-lg p-4 flex flex-col items-center justify-center text-center border border-zinc-700 hover:border-zeno-purple/30 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 8px 20px -5px rgba(155, 135, 245, 0.2)"
      }}
    >
      <motion.div 
        className="text-zeno-purple mb-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <h3 className="text-sm font-semibold">{name}</h3>
    </motion.div>
  );
};

export default About;
