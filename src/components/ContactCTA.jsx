import React from 'react';
import { MessageSquareCode } from 'lucide-react';

export default function ContactCTA() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=584120000000&text=Hola%20ModelSistem,%20quiero%20solicitar%20una%20demostración%20sin%20costo%20del%20ERP.";

  return (
    <section id="contacto" className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-20 scroll-mt-28">
      <div className="bg-deep-corporate rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_12px_30px_rgba(19,46,82,0.25)] relative overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-geist leading-tight">
              Transforme la administración de su negocio hoy mismo.
            </h2>
            <p className="text-base md:text-lg text-secondary-container leading-relaxed">
              Implemente ModelSistem y optimice sus procesos con la velocidad y seguridad de una plataforma ERP empresarial de última generación.
            </p>
          </div>
          
          {/* Button */}
          <div className="shrink-0 z-10">
            <a 
              className="bg-brand-green hover:bg-[#0ea371] text-white px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 font-bold text-base flex items-center justify-center gap-3.5" 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquareCode className="w-5.5 h-5.5" />
              <span>Contactar con Consultor Especializado</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
