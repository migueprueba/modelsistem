import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Módulos', href: '#modulos' },
    { name: 'Finanzas', href: '#finanzas' },
    { name: 'Requisitos', href: '#requisitos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const whatsappLink = "https://api.whatsapp.com/send?phone=584120000000&text=Hola%20ModelSistem,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20ERP%20y%20la%20promoci%C3%B3n%20de%20instalaci%C3%B3n%20t%C3%A9cnica%20gratuita.";

  return (
    <header className="bg-white/95 backdrop-blur-md fixed top-0 w-full z-50 border-b border-border-light shadow-sm transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <div className="flex items-center gap-2 font-bold text-primary text-xl tracking-tight">
          <Cpu className="w-8 h-8 text-tech-cyan" />
          <span>ModelSistem</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-gutter">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA in Navbar */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green hover:bg-[#0ea371] text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
          >
            Contáctenos
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-secondary hover:text-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-border-light px-6 py-4 flex flex-col gap-4 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-base font-medium text-secondary hover:text-primary py-2 border-b border-gray-50 transition-colors"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green hover:bg-[#0ea371] text-white text-sm font-medium py-3 rounded-lg text-center shadow transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contáctenos
          </a>
        </nav>
      )}
    </header>
  );
}
