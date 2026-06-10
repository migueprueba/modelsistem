import React, { useState } from 'react';
import { Server, Monitor, Network, CheckCircle } from 'lucide-react';

export default function Specs() {
  const [activeTab, setActiveTab] = useState('servidor');

  const tabs = [
    { id: 'servidor', label: 'Servidor Principal', icon: Server },
    { id: 'estaciones', label: 'Estaciones de Trabajo', icon: Monitor },
    { id: 'red', label: 'Infraestructura de Red', icon: Network }
  ];

  const specData = {
    servidor: {
      title: "Especificaciones del Servidor",
      description: "El motor de la base de datos de su empresa. Requiere estabilidad y rendimiento contínuo.",
      specs: [
        { name: "Procesador", min: "Intel Core i5 o AMD Ryzen 5", rec: "Intel Core i7 / Xeon o AMD Ryzen 7" },
        { name: "Memoria RAM", min: "16 GB de RAM", rec: "32 GB de RAM" },
        { name: "Almacenamiento", min: "Disco SSD de 500 GB", rec: "Disco SSD NVMe de alta velocidad" },
        { name: "Sistema Operativo", min: "Windows 10 Pro o Windows Server", rec: "Windows Server con Active Directory" },
        { name: "Protección y Respaldo", min: "Red Gigabit Ethernet", rec: "UPS de protección eléctrica & Respaldos Automáticos" }
      ]
    },
    estaciones: {
      title: "Especificaciones de las Estaciones",
      description: "Equipos clientes desde donde los operadores realizarán ventas, facturación y consultas.",
      specs: [
        { name: "Procesador", min: "Intel Core i3 o AMD Ryzen 3", rec: "Intel Core i5 o AMD Ryzen 5" },
        { name: "Memoria RAM", min: "8 GB de RAM", rec: "16 GB de RAM" },
        { name: "Almacenamiento", min: "Disco SSD de 240 GB", rec: "Disco SSD de 480 GB o superior" },
        { name: "Resolución Pantalla", min: "Mínima: 1366x768 píxeles", rec: "Recomendada: Full HD (1920x1080)" },
        { name: "Conexión", min: "Red local cableada", rec: "Red local cableada Gigabit Ethernet" }
      ]
    },
    red: {
      title: "Infraestructura de Red local",
      description: "Garantiza la conectividad en tiempo real de todo el ecosistema ERP de la organización.",
      specs: [
        { name: "Conexión Física", min: "Red local cableada Gigabit", rec: "Red local cableada Gigabit (Categoría 6 o superior)" },
        { name: "Enrutador", min: "Router empresarial estándar", rec: "Router empresarial avanzado con políticas de QoS" },
        { name: "Acceso Remoto", min: "VPN Opcional", rec: "Acceso remoto seguro mediante VPN dedicada" },
        { name: "Respaldos en Nube", min: "Conexión a Internet básica", rec: "Conexión a Internet estable para respaldos y servicios en la nube" }
      ]
    }
  };

  const currentSpec = specData[activeTab];

  return (
    <section id="requisitos" className="bg-surface-alt py-20 border-y border-border-light scroll-mt-20">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        
        {/* Header Title */}
        <div className="flex flex-col items-center gap-3 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main font-geist tracking-tight">
            Especificaciones y Requisitos Técnicos
          </h2>
          <p className="text-base text-text-muted max-w-2xl">
            Asegure el óptimo desempeño de ModelSistem en su infraestructura local u remota cumpliendo con los siguientes requerimientos.
          </p>
        </div>

        {/* Tab Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center bg-white border border-border-light rounded-xl p-1.5 shadow-sm max-w-2xl mx-auto mb-10 gap-1.5">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isSelected 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-text-muted hover:text-primary hover:bg-gray-50'
                }`}
              >
                <IconComponent className="w-4.5 h-4.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Specs Table Container */}
        <div className="bg-white border border-border-light rounded-2xl shadow-xl overflow-hidden transition-all duration-300 max-w-4xl mx-auto">
          {/* Table Header Section */}
          <div className="p-6 md:p-8 bg-deep-corporate border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-white font-geist">{currentSpec.title}</h3>
              <p className="text-xs md:text-sm text-secondary-container">{currentSpec.description}</p>
            </div>
            <div className="inline-flex shrink-0 items-center gap-1.5 px-3 py-1 bg-[#10B981]/25 border border-[#10B981]/30 text-brand-green text-xs font-semibold rounded-md">
              <CheckCircle className="w-3.5 h-3.5" />
              Verificado
            </div>
          </div>

          {/* Specs Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-deep-corporate text-xs font-bold uppercase tracking-wider border-b border-border-light">
                  <th className="p-4 md:p-5 w-1/4">Componente</th>
                  <th className="p-4 md:p-5 w-3/8 text-gray-700">Requisito Mínimo</th>
                  <th className="p-4 md:p-5 w-3/8 text-primary">Recomendado</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {currentSpec.specs.map((spec, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border-light transition-colors hover:bg-gray-50/50 ${
                      index % 2 === 0 ? 'bg-surface-alt/40' : 'bg-white'
                    }`}
                  >
                    <td className="p-4 md:p-5 font-bold text-text-main">{spec.name}</td>
                    <td className="p-4 md:p-5 text-gray-600 font-mono text-xs md:text-sm">{spec.min}</td>
                    <td className="p-4 md:p-5 text-primary font-mono text-xs md:text-sm font-semibold">{spec.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
