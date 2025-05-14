
import { Logo } from '@/components/ui/logo';

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const content = {
    es: {
      description: "Soluciones de alojamiento profesional para tus aplicaciones y juegos.",
      services: "Servicios",
      serviceLinks: [
        "Minecraft Hosting",
        "VPS Hosting",
        "Servidores dedicados",
        "Discord Bot Hosting"
      ],
      company: "Empresa",
      companyLinks: [
        "Sobre nosotros",
        "Contacto",
        "Panel",
        "Partners"
      ],
      legal: "Legal",
      legalLinks: [
        "Política de Privacidad",
        "Términos de Servicio",
        "Reembolsos",
        "DMCA"
      ],
      copyright: "Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      terms: "Términos de Servicio"
    },
    en: {
      description: "Professional hosting solutions for your applications and games.",
      services: "Services",
      serviceLinks: [
        "Minecraft Hosting",
        "VPS Hosting",
        "Dedicated Servers",
        "Discord Bot Hosting"
      ],
      company: "Company",
      companyLinks: [
        "About Us",
        "Contact",
        "Panel",
        "Partners"
      ],
      legal: "Legal",
      legalLinks: [
        "Privacy Policy",
        "Terms of Service",
        "Refunds",
        "DMCA"
      ],
      copyright: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Service"
    }
  };

  const { 
    description, services, serviceLinks, company, companyLinks, 
    legal, legalLinks, copyright, privacyPolicy, terms 
  } = content[language as keyof typeof content];

  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4 hover-lift" />
            <p className="text-zinc-400 text-sm mb-4">
              {description}
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://discord.zenoscale.es" label="Discord">
                <DiscordIcon />
              </SocialLink>
              <SocialLink href="#" label="Twitter">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                <YouTubeIcon />
              </SocialLink>
            </div>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              {services}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <FooterLink key={index} href="#">{link}</FooterLink>
              ))}
            </ul>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              {company}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <FooterLink key={index} href="#">{link}</FooterLink>
              ))}
            </ul>
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              {legal}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <FooterLink key={index} href="#">{link}</FooterLink>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} ZenoScale. {copyright}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-400 text-xs hover-button">
              {privacyPolicy}
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-400 text-xs hover-button">
              {terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-zinc-400 hover:text-white transition-colors text-sm hover-button">
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full hover:glow"
    >
      {children}
    </a>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M15.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M15.5 17c0 1-1.5 3-3.5 3s-3.5-2-3.5-3" />
      <path d="M20 8c0 0 1 1 1 4c0 5-2.5 6-2.5 6H5.5c0 0-2.5-1-2.5-6c0-3 1-4 1-4C4 4 8 4 8 4h8c0 0 4 0 4 4z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}
