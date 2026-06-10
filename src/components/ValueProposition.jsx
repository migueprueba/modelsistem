import React from 'react';
import { Scale, Warehouse, BarChart3 } from 'lucide-react';

export default function ValueProposition() {
  const cards = [
    {
      icon: Scale,
      title: "Cumplimiento Legal Automatizado",
      desc: "Garantice el cumplimiento de las normativas fiscales y requerimientos del SENIAT de manera automática.",
      bgIcon: "bg-tech-cyan/10",
      borderIcon: "border-tech-cyan/25",
      colorIcon: "text-tech-cyan"
    },
    {
      icon: Warehouse,
      title: "Trazabilidad Multialmacén",
      desc: "Control de inventario en tiempo real, gestión de Kardex y visibilidad completa a través de múltiples ubicaciones.",
      bgIcon: "bg-[#10B981]/10",
      borderIcon: "border-[#10B981]/25",
      colorIcon: "text-[#10B981]"
    },
    {
      icon: BarChart3,
      title: "Analítica Gerencial Inmediata",
      desc: "Tome decisiones informadas con tableros de control en tiempo real y reportes financieros consolidados.",
      bgIcon: "bg-amber-500/10",
      borderIcon: "border-amber-500/25",
      colorIcon: "text-amber-500"
    }
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx}
                className="bg-deep-corporate border border-white/5 rounded-2xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl hover:border-white/10 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group"
              >
                {/* Background Large Icon effect */}
                <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 select-none">
                  <IconComponent className="w-44 h-44 text-white" />
                </div>
                
                {/* Icon Container */}
                <div className={`w-14 h-14 ${card.bgIcon} rounded-xl border ${card.borderIcon} flex items-center justify-center mb-2`}>
                  <IconComponent className={`w-7 h-7 ${card.colorIcon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white font-geist">
                  {card.title}
                </h3>
                
                <p className="text-sm md:text-base text-secondary-container leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
