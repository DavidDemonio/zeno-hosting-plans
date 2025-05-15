
import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Menu, Server, Activity, MessageSquare, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  language: string;
  setLanguage: (language: string) => void;
}

export function Navbar({ language, setLanguage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleLanguage = () => {
    setAnimating(true);
    setTimeout(() => {
      setLanguage(language === 'es' ? 'en' : 'es');
      setTimeout(() => setAnimating(false), 300);
    }, 300);
  };

  const subpagesContent = {
    es: {
      title: "Subpáginas",
      items: [
        { name: "Inicio", path: "/" },
        { name: "Sobre Nosotros", path: "/about" },
        { name: "Contacto", path: "/contact" },
        { name: "Privacidad", path: "/privacy" },
        { name: "Términos", path: "/terms" },
        { name: "Reembolsos", path: "/refunds" },
        { name: "DMCA", path: "/dmca" },
        { name: "Partners", path: "/partners" }
      ]
    },
    en: {
      title: "Subpages",
      items: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy", path: "/privacy" },
        { name: "Terms", path: "/terms" },
        { name: "Refunds", path: "/refunds" },
        { name: "DMCA", path: "/dmca" },
        { name: "Partners", path: "/partners" }
      ]
    }
  };

  // Make sure language is 'es' or 'en', with 'es' as default
  const validLanguage = language === 'en' ? 'en' : 'es';
  
  const subpages = subpagesContent[validLanguage];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zeno-dark/80 backdrop-blur-md animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo className="hover:opacity-90 transition-opacity" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#features" icon={<Server className="w-4 h-4 mr-1" />}>
              {language === 'es' ? 'Características' : 'Features'}
            </NavLink>
            <NavLink href="#pricing" icon={<Activity className="w-4 h-4 mr-1" />}>
              {language === 'es' ? 'Planes' : 'Plans'}
            </NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium group hover-button">
                  {subpages.title}
                  <ChevronDown className="h-4 w-4 ml-1 text-zinc-400 group-hover:text-zeno-purple transition-colors" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-zinc-800/95 backdrop-blur-md border-zinc-700 mt-2 animate-fade-in">
                {subpages.items.map((item, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link 
                      to={item.path}
                      className="text-zinc-300 hover:text-white hover:bg-zinc-700 cursor-pointer focus:bg-zinc-700"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="language-selector ml-4">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-800/50 hover:bg-zinc-700/60 transition-all border border-transparent ${animating ? 'scale-95' : ''} hover:border-zeno-purple/50 hover:shadow-[0_0_10px_rgba(155,135,245,0.3)]`}
                disabled={animating}
              >
                <Globe className={`w-4 h-4 ${animating ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
                <span className={`${animating ? 'opacity-0' : 'opacity-100'} transition-opacity`}>{language === 'es' ? 'ES' : 'EN'}</span>
              </button>
            </div>
            
            <a href="https://dash.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium group hover-button">
              <span className="group-hover:text-zeno-purple transition-colors"><Server className="w-4 h-4 mr-1" /></span>
              {language === 'es' ? 'Acceso plataforma' : 'Platform Access'}
            </a>
            <a href="https://status.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium group hover-button">
              <span className="group-hover:text-zeno-purple transition-colors"><Activity className="w-4 h-4 mr-1" /></span>
              Status
            </a>
            <a href="https://panel.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium group hover-button">
              <span className="group-hover:text-zeno-purple transition-colors"><Server className="w-4 h-4 mr-1" /></span>
              Panel
            </a>
            <a href="https://discord.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium group hover-button">
              <span className="group-hover:text-zeno-purple transition-colors"><MessageSquare className="w-4 h-4 mr-1" /></span>
              Discord
            </a>
            <a 
              href="https://dash.zenoscale.es" 
              className="inline-block bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white hover:glow rounded-md px-4 py-2 text-sm font-medium"
            >
              {language === 'es' ? 'Comenzar' : 'Start'}
            </a>
          </div>
          
          <div className="flex items-center md:hidden">
            <div className="language-selector mr-2">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-zinc-800/50 ${animating ? 'scale-95' : ''} border border-transparent hover:border-zeno-purple/50 hover:shadow-[0_0_10px_rgba(155,135,245,0.3)]`}
                disabled={animating}
              >
                <Globe className={`w-4 h-4 ${animating ? 'opacity-0' : 'opacity-100'} transition-opacity`} />
                <span className={`${animating ? 'opacity-0' : 'opacity-100'} transition-opacity`}>{language === 'es' ? 'ES' : 'EN'}</span>
              </button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zeno-dark/95 backdrop-blur-md border-t border-zinc-800 animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <MobileNavLink href="#features" icon={<Server className="w-4 h-4 mr-2" />}>
              {language === 'es' ? 'Características' : 'Features'}
            </MobileNavLink>
            <MobileNavLink href="#pricing" icon={<Activity className="w-4 h-4 mr-2" />}>
              {language === 'es' ? 'Planes' : 'Plans'}
            </MobileNavLink>
            
            {/* Subpages in mobile menu */}
            <div className="pt-2 pb-1 px-3 text-zinc-400 text-sm font-medium">
              {subpages.title}
            </div>
            {subpages.items.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="block py-2 px-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-700/50 transition-colors duration-200 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            
            <a href="https://dash.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 px-3 text-base font-medium text-zinc-300 hover:text-white transition-colors duration-200">
              <span className="text-zeno-purple"><Server className="w-4 h-4 mr-2" /></span>
              {language === 'es' ? 'Acceso plataforma' : 'Platform Access'}
            </a>
            <a href="https://status.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 px-3 text-base font-medium text-zinc-300 hover:text-white transition-colors duration-200">
              <span className="text-zeno-purple"><Activity className="w-4 h-4 mr-2" /></span>
              Status
            </a>
            <a href="https://panel.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 px-3 text-base font-medium text-zinc-300 hover:text-white transition-colors duration-200">
              <span className="text-zeno-purple"><Server className="w-4 h-4 mr-2" /></span>
              Panel
            </a>
            <a href="https://discord.zenoscale.es" target="_blank" rel="noopener noreferrer" className="flex items-center py-2 px-3 text-base font-medium text-zinc-300 hover:text-white transition-colors duration-200">
              <span className="text-zeno-purple"><MessageSquare className="w-4 h-4 mr-2" /></span>
              Discord
            </a>
            <div className="pt-2">
              <a 
                href="https://dash.zenoscale.es"
                className="block w-full text-center bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white py-2 px-4 rounded-md font-medium"
              >
                {language === 'es' ? 'Comenzar' : 'Start'}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium group hover-button"
    >
      <span className="group-hover:text-zeno-purple transition-colors">{icon}</span>
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-center py-2 px-3 text-base font-medium text-zinc-300 hover:text-white transition-colors duration-200"
    >
      <span className="text-zeno-purple">{icon}</span>
      {children}
    </a>
  );
}
