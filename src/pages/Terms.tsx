
import { StarsBackground } from "@/components/ui/stars-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";

const Terms = () => {
  const [language, setLanguage] = useState('es');

  const content = {
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 15 de Mayo, 2025",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content: "Al acceder o utilizar los servicios de ZenoScale, usted acuerda estar legalmente vinculado por estos Términos de Servicio. Si no está de acuerdo con estos términos, no debe utilizar nuestros servicios."
        },
        {
          title: "2. Descripción del Servicio",
          content: "ZenoScale proporciona servicios de alojamiento web, alojamiento de servidores de juegos y soluciones relacionadas según lo descrito en nuestro sitio web y en los acuerdos específicos de servicio."
        },
        {
          title: "3. Cuentas de Usuario",
          content: "Para utilizar ciertos aspectos de nuestros servicios, debe crear una cuenta. Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta."
        },
        {
          title: "4. Pagos y Facturación",
          content: "Los precios de nuestros servicios están sujetos a cambios. Le notificaremos con al menos 30 días de anticipación sobre cualquier cambio de precio. Los pagos son no reembolsables excepto según se especifique en nuestra Política de Reembolsos."
        },
        {
          title: "5. Política de Uso Aceptable",
          content: "Usted acuerda utilizar nuestros servicios solo para fines legales y de una manera que no infrinja los derechos de otros usuarios o restrinja su uso de los servicios. Está prohibido el uso de nuestros servicios para actividades ilegales, fraudulentas o perjudiciales."
        },
        {
          title: "6. Propiedad Intelectual",
          content: "Todos los derechos de propiedad intelectual en los servicios y su contenido son propiedad de ZenoScale o nuestros licenciantes. Usted no tiene derecho a utilizar nuestra propiedad intelectual sin nuestro consentimiento previo por escrito."
        },
        {
          title: "7. Terminación",
          content: "Podemos terminar o suspender el acceso a nuestros servicios inmediatamente, sin previo aviso ni responsabilidad, por cualquier razón, incluyendo sin limitación si viola estos Términos de Servicio."
        },
        {
          title: "8. Limitación de Responsabilidad",
          content: "En ningún caso ZenoScale, sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo."
        },
        {
          title: "9. Cambios a estos Términos",
          content: "Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos términos en cualquier momento. Le notificaremos de cualquier cambio publicando los nuevos Términos de Servicio en esta página."
        },
        {
          title: "10. Contacto",
          content: "Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en: legal@zenoscale.es"
        }
      ]
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: May 15, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing or using ZenoScale's services, you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you should not use our services."
        },
        {
          title: "2. Service Description",
          content: "ZenoScale provides web hosting services, game server hosting, and related solutions as described on our website and in specific service agreements."
        },
        {
          title: "3. User Accounts",
          content: "To use certain aspects of our services, you must create an account. You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account."
        },
        {
          title: "4. Payments and Billing",
          content: "The prices for our services are subject to change. We will notify you at least 30 days in advance of any price changes. Payments are non-refundable except as specified in our Refund Policy."
        },
        {
          title: "5. Acceptable Use Policy",
          content: "You agree to use our services only for lawful purposes and in a way that does not infringe the rights of other users or restrict their use of the services. The use of our services for illegal, fraudulent, or harmful activities is prohibited."
        },
        {
          title: "6. Intellectual Property",
          content: "All intellectual property rights in the services and their content are owned by ZenoScale or our licensors. You have no right to use our intellectual property without our prior written consent."
        },
        {
          title: "7. Termination",
          content: "We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms of Service."
        },
        {
          title: "8. Limitation of Liability",
          content: "In no event shall ZenoScale, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages."
        },
        {
          title: "9. Changes to These Terms",
          content: "We reserve the right, at our sole discretion, to modify or replace these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page."
        },
        {
          title: "10. Contact",
          content: "If you have any questions about these Terms, please contact us at: legal@zenoscale.es"
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

export default Terms;
