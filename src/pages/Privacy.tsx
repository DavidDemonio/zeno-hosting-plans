
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const Privacy = () => {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 15 de Mayo, 2025",
      sections: [
        {
          title: "1. Introducción",
          content: "En ZenoScale, valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando utiliza nuestro servicio de alojamiento web. Por favor lea esta política de privacidad detenidamente."
        },
        {
          title: "2. Información que recopilamos",
          content: "Podemos recopilar información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, número de teléfono, dirección de facturación y detalles de pago cuando se registra para nuestros servicios o cuando se comunica con nosotros."
        },
        {
          title: "3. Cómo utilizamos su información",
          content: "Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, procesar transacciones, enviar comunicaciones relacionadas con el servicio y responder a sus consultas."
        },
        {
          title: "4. Divulgación de datos",
          content: "No vendemos, comercializamos ni alquilamos su información personal a terceros. Podemos compartir su información con proveedores de servicios y socios comerciales para ayudarnos a operar nuestro negocio."
        },
        {
          title: "5. Seguridad de datos",
          content: "Implementamos medidas de seguridad diseñadas para proteger su información personal contra el acceso no autorizado y el uso indebido."
        },
        {
          title: "6. Sus derechos de privacidad",
          content: "Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, como el derecho a acceder, corregir o eliminar la información personal que tenemos sobre usted."
        },
        {
          title: "7. Cambios a esta política",
          content: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página."
        },
        {
          title: "8. Contáctenos",
          content: "Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en: privacy@zenoscale.es"
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: May 15, 2025",
      sections: [
        {
          title: "1. Introduction",
          content: "At ZenoScale, we value and respect your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web hosting service. Please read this privacy policy carefully."
        },
        {
          title: "2. Information We Collect",
          content: "We may collect personal information that you provide to us directly, such as your name, email address, phone number, billing address, and payment details when you register for our services or when you communicate with us."
        },
        {
          title: "3. How We Use Your Information",
          content: "We use the collected information to provide, maintain, and improve our services, process transactions, send service-related communications, and respond to your inquiries."
        },
        {
          title: "4. Disclosure of Data",
          content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers and business partners to help us operate our business."
        },
        {
          title: "5. Data Security",
          content: "We implement security measures designed to protect your personal information from unauthorized access and misuse."
        },
        {
          title: "6. Your Privacy Rights",
          content: "Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the personal information we hold about you."
        },
        {
          title: "7. Changes to This Policy",
          content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
        },
        {
          title: "8. Contact Us",
          content: "If you have questions or comments about this Privacy Policy, please contact us at: privacy@zenoscale.es"
        }
      ]
    }
  };

  // Make sure language is 'es' or 'en', with 'es' as default
  const validLanguage = language === 'en' ? 'en' : 'es';
  
  const { title, lastUpdated, sections } = content[validLanguage];

  return (
    <div className="min-h-screen relative">
      <StarsBackground density={100} />
      
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-800/30 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-zinc-400 mb-8">{lastUpdated}</p>
            
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-zeno-purple">{section.title}</h2>
                <p className="text-zinc-300">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Privacy;
