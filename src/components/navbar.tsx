
import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Menu, Server, Activity, MessageSquare, Globe } from 'lucide-react';

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zeno-dark/80 backdrop-blur-md animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className="hover:opacity-90 transition-opacity" />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#features" icon={<Server className="w-4 h-4 mr-1" />}>
              {language === 'es' ? 'Características' : 'Features'}
            </NavLink>
            <NavLink href="#pricing" icon={<Activity className="w-4 h-4 mr-1" />}>
              {language === 'es' ? 'Planes' : 'Plans'}
            </NavLink>
            
            <div className="language-selector ml-4">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-1 rounded-full bg-zinc-800/50 hover:bg-zinc-700/60 transition-all ${animating ? 'animate-spin' : ''}`}
                disabled={animating}
              >
                <Globe className={`w-4 h-4 ${animating ? 'animate-pulse' : ''}`} />
                <span className={animating ? 'animate-pulse' : ''}>{language === 'es' ? 'ES' : 'EN'}</span>
              </button>
            </div>
            
            <NavLink href="https://dash.zenoscale.es" external icon={<Server className="w-4 h-4 mr-1" />}>
              {language === 'es' ? 'Acceso plataforma' : 'Platform Access'}
            </NavLink>
            <NavLink href="https://status.zenoscale.es" external icon={<Activity className="w-4 h-4 mr-1" />}>Status</NavLink>
            <NavLink href="https://panel.zenoscale.es" external icon={<Server className="w-4 h-4 mr-1" />}>Panel</NavLink>
            <NavLink href="https://discord.zenoscale.es" external icon={<MessageSquare className="w-4 h-4 mr-1" />}>Discord</NavLink>
            <Button 
              className="bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white hover:glow"
              onClick={() => window.location.href = "https://dash.zenoscale.es"}
            >
              {language === 'es' ? 'Comenzar' : 'Start'}
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <div className="language-selector mr-2">
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-zinc-800/50 ${animating ? 'animate-spin' : ''}`}
                disabled={animating}
              >
                <Globe className={`w-4 h-4 ${animating ? 'animate-pulse' : ''}`} />
                <span className={animating ? 'animate-pulse' : ''}>{language === 'es' ? 'ES' : 'EN'}</span>
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
            <MobileNavLink href="https://dash.zenoscale.es" external icon={<Server className="w-4 h-4 mr-2" />}>
              {language === 'es' ? 'Acceso plataforma' : 'Platform Access'}
            </MobileNavLink>
            <MobileNavLink href="https://status.zenoscale.es" external icon={<Activity className="w-4 h-4 mr-2" />}>Status</MobileNavLink>
            <MobileNavLink href="https://panel.zenoscale.es" external icon={<Server className="w-4 h-4 mr-2" />}>Panel</MobileNavLink>
            <MobileNavLink href="https://discord.zenoscale.es" external icon={<MessageSquare className="w-4 h-4 mr-2" />}>Discord</MobileNavLink>
            <div className="pt-2">
              <Button 
                className="w-full bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white"
                onClick={() => window.location.href = "https://dash.zenoscale.es"}
              >
                {language === 'es' ? 'Comenzar' : 'Start'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, icon, external = false }: { href: string; children: React.ReactNode; icon: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium group hover-button"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className="group-hover:text-zeno-purple transition-colors">{icon}</span>
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, icon, external = false }: { href: string; children: React.ReactNode; icon: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      className="flex items-center py-2 px-3 text-base font-medium text-zinc-300 hover:text-white transition-colors duration-200"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className="text-zeno-purple">{icon}</span>
      {children}
    </a>
  );
}
