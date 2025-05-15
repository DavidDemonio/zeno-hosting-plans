
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, BarChart, Heart, Clock, Server, Shield, Rocket } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const About = () => {
  const [language, setLanguage] = useState('es');
  const { toast } = useToast();
  
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
      historyText: "Fundada en 2023, ZenoScale nació de la pasión por la tecnología y la necesidad de ofrecer servicios de hosting superiores a precios competitivos. Desde entonces, hemos crecido constantemente, ampliando nuestra infraestructura y mejorando nuestros servicios.",
      valuesTitle: "Nuestros valores fundamentales",
      values: [
        {
          icon: Users,
          title: "Enfoque en el cliente",
          description: "Trabajamos incansablemente para superar las expectativas de nuestros clientes y proporcionarles un servicio excepcional."
        },
        {
          icon: Award,
          title: "Excelencia",
          description: "Nos esforzamos por la excelencia en todo lo que hacemos, desde la calidad de nuestros servicios hasta el soporte al cliente."
        },
        {
          icon: Globe,
          title: "Innovación",
          description: "Estamos constantemente innovando y mejorando nuestros servicios para mantenernos a la vanguardia de la tecnología."
        },
        {
          icon: BarChart,
          title: "Rendimiento",
          description: "Nos comprometemos a ofrecer el mejor rendimiento posible para todos nuestros servicios de hosting."
        },
        {
          icon: Heart,
          title: "Pasión",
          description: "Nuestra pasión por la tecnología impulsa todo lo que hacemos y nos inspira a seguir mejorando."
        },
        {
          icon: Clock,
          title: "Fiabilidad",
          description: "Entendemos la importancia de la fiabilidad y nos esforzamos por mantener un tiempo de actividad del 99.9%."
        }
      ],
      team: "Nuestro equipo",
      teamText: "Contamos con un equipo de profesionales apasionados por la tecnología y dedicados a proporcionar el mejor servicio posible a nuestros clientes."
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
      historyText: "Founded in 2023, ZenoScale was born from a passion for technology and the need to offer superior hosting services at competitive prices. Since then, we have consistently grown, expanding our infrastructure and improving our services.",
      valuesTitle: "Our Core Values",
      values: [
        {
          icon: Users,
          title: "Customer Focus",
          description: "We work tirelessly to exceed our customers' expectations and provide them with exceptional service."
        },
        {
          icon: Award,
          title: "Excellence",
          description: "We strive for excellence in everything we do, from the quality of our services to customer support."
        },
        {
          icon: Globe,
          title: "Innovation",
          description: "We are constantly innovating and improving our services to stay at the forefront of technology."
        },
        {
          icon: BarChart,
          title: "Performance",
          description: "We are committed to delivering the best possible performance for all our hosting services."
        },
        {
          icon: Heart,
          title: "Passion",
          description: "Our passion for technology drives everything we do and inspires us to keep improving."
        },
        {
          icon: Clock,
          title: "Reliability",
          description: "We understand the importance of reliability and strive to maintain 99.9% uptime."
        }
      ],
      team: "Our Team",
      teamText: "We have a team of professionals passionate about technology and dedicated to providing the best possible service to our customers."
    }
  };

  const validLanguage = language === 'en' ? 'en' : 'es';
  const pageContent = content[validLanguage];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      }
    },
  };

  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4 gradient-text glow-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {pageContent.title}
              </motion.h1>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-zeno-purple to-zeno-blue mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.p 
                className="text-xl text-zinc-300 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {pageContent.description}
              </motion.p>
              
              <motion.button
                className="mt-6 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-lg px-6 py-2 text-sm font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toast({
                  title: "¡Gracias por tu interés!",
                  description: "Estamos construyendo una comunidad de clientes satisfechos."
                })}
              >
                {language === 'es' ? 'Descubre más' : 'Learn more'}
              </motion.button>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-12 bg-zinc-800/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 backdrop-blur-sm hover-lift"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
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
                className="bg-zinc-800/50 rounded-xl p-8 border border-zinc-700 backdrop-blur-sm hover-lift"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
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
        
        {/* History Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text glow-text">{pageContent.history}</h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">{pageContent.historyText}</p>
            </motion.div>
            
            <div className="relative py-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-zeno-purple to-zeno-blue"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl ml-6 md:ml-0 md:mr-6 md:text-right md:w-[calc(50%-3rem)]">
                    <h3 className="text-xl font-bold mb-2">Abril 2023</h3>
                    <p className="text-zinc-300">Lanzamiento de ZenoScale con servicios de Game Hosting para Minecraft y otros juegos.</p>
                  </div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-zeno-purple"
                    whileHover={{ scale: 1.5, boxShadow: "0 0 15px 5px rgba(155, 135, 245, 0.5)" }}
                  ></motion.div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center mb-12 justify-end"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl mr-6 md:mr-0 md:ml-6 md:w-[calc(50%-3rem)]">
                    <h3 className="text-xl font-bold mb-2">Mayo 2023</h3>
                    <p className="text-zinc-300">Expansión a Web Hosting, automatizaciones y servicios VPS para desarrolladores y empresas.</p>
                  </div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-zeno-blue"
                    whileHover={{ scale: 1.5, boxShadow: "0 0 15px 5px rgba(51, 195, 240, 0.5)" }}
                  ></motion.div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl ml-6 md:ml-0 md:mr-6 md:text-right md:w-[calc(50%-3rem)]">
                    <h3 className="text-xl font-bold mb-2">Junio 2023</h3>
                    <p className="text-zinc-300">Inicio de los servicios de Bare Metal para aplicaciones con altos requisitos de rendimiento.</p>
                  </div>
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-zeno-purple to-zeno-blue"
                    animate={{ 
                      boxShadow: ["0 0 5px 0px rgba(155, 135, 245, 0.5)", "0 0 15px 5px rgba(51, 195, 240, 0.5)", "0 0 5px 0px rgba(155, 135, 245, 0.5)"],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-zinc-800/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text glow-text">{pageContent.valuesTitle}</h2>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {pageContent.values.map((value, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700 backdrop-blur-sm hover-lift group hover:border-zeno-purple/50 transition-all"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)"
                  }}
                >
                  <div className="p-3 mb-4 rounded-lg bg-zinc-700/50 w-fit group-hover:bg-zeno-purple/20 transition-colors">
                    <value.icon className="h-6 w-6 text-zeno-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-zinc-300">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text glow-text">{pageContent.team}</h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">{pageContent.teamText}</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 30px -5px rgba(155, 135, 245, 0.3)"
                }}
              >
                <div className="h-64 bg-gradient-to-br from-zeno-purple/20 to-zeno-blue/20 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      boxShadow: ["0 0 20px 10px rgba(155, 135, 245, 0.2)", "0 0 40px 10px rgba(155, 135, 245, 0.4)", "0 0 20px 10px rgba(155, 135, 245, 0.2)"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Users className="h-24 w-24 text-zeno-purple opacity-70" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Torres</h3>
                  <p className="text-zeno-purple mb-3">CEO & CTO</p>
                  <p className="text-zinc-300 text-sm">Apasionado por la tecnología y la innovación, con amplia experiencia en desarrollo e infraestructura de hosting.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 30px -5px rgba(51, 195, 240, 0.3)"
                }}
              >
                <div className="h-64 bg-gradient-to-br from-zeno-purple/20 to-zeno-blue/20 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      boxShadow: ["0 0 20px 10px rgba(51, 195, 240, 0.2)", "0 0 40px 10px rgba(51, 195, 240, 0.4)", "0 0 20px 10px rgba(51, 195, 240, 0.2)"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Users className="h-24 w-24 text-zeno-blue opacity-70" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Carlos Alarcón</h3>
                  <p className="text-zeno-blue mb-3">CO-CEO & Business Assistant</p>
                  <p className="text-zinc-300 text-sm">Especialista en estrategia de negocio y marketing, responsable del crecimiento y relaciones comerciales de ZenoScale.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Tech Stack Section - New Addition */}
        <section className="py-16 bg-zinc-800/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text glow-text">
                {language === 'es' ? 'Nuestras Tecnologías' : 'Our Technologies'}
              </h2>
              <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
                {language === 'es' 
                  ? 'Utilizamos lo último en tecnología para ofrecer el mejor rendimiento y seguridad para tus proyectos.'
                  : 'We use the latest technology to provide the best performance and security for your projects.'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: <Server className="h-8 w-8" />, name: "AMD EPYC" },
                { icon: <Shield className="h-8 w-8" />, name: "Firewall" },
                { icon: <Rocket className="h-8 w-8" />, name: "NVMe" },
                { icon: <Globe className="h-8 w-8" />, name: "CDN" },
                { icon: <Clock className="h-8 w-8" />, name: "99.9% Uptime" },
                { icon: <BarChart className="h-8 w-8" />, name: "Analytics" }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center text-center border border-zinc-700 hover:border-zeno-purple/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
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
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-sm font-semibold">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <AboutSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default About;
