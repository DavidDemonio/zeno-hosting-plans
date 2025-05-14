
import React, { useState } from 'react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zeno-dark/90 backdrop-blur-md animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className="hover:opacity-90 transition-opacity" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Características</NavLink>
            <NavLink href="#pricing">Planes</NavLink>
            <NavLink href="#about">Nosotros</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <Button className="bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white">
              Comenzar
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
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
            <MobileNavLink href="#features">Características</MobileNavLink>
            <MobileNavLink href="#pricing">Planes</MobileNavLink>
            <MobileNavLink href="#about">Nosotros</MobileNavLink>
            <MobileNavLink href="#contact">Contacto</MobileNavLink>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-zeno-purple to-zeno-blue hover:opacity-90 transition-all text-white">
                Comenzar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block py-2 px-3 text-base font-medium text-zinc-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}
