import React, { useState, useEffect } from 'react';
import { Play, TrendingUp, AlertCircle, FileSpreadsheet } from 'lucide-react';

export default function Hero() {
  const [activeKPI, setActiveKPI] = useState('ventas');
  const [animate, setAnimate] = useState(false);

  const whatsappLink = "https://api.whatsapp.com/send?phone=584120000000&text=Hola%20ModelSistem,%20quiero%20solicitar%20una%20demostración%20sin%20costo%20del%20ERP.";

  // Trigger animation when active KPI changes
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [activeKPI]);

  const kpis = {
    ventas: {
      title: "Desempeño de Ventas",
      color: "bg-tech-cyan",
      textColor: "text-tech-cyan",
      borderColor: "border-tech-cyan/40",
      bgHover: "hover:bg-tech-cyan/5",
      shadow: "shadow-[0_0_15px_rgba(0,128,168,0.3)]",
      values: [20, 45, 30, 70, 50, 85, 40, 65, 45, 95]
    },
    stock: {
      title: "Nivel de Almacén Crítico",
      color: "bg-[#10B981]",
      textColor: "text-[#10B981]",
      borderColor: "border-[#10B981]/40",
      bgHover: "hover:bg-[#10B981]/5",
      shadow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]",
      values: [85, 70, 60, 45, 30, 20, 15, 12, 8, 4]
    },
    facturas: {
      title: "Facturas Procesadas",
      color: "bg-amber-500",
      textColor: "text-amber-500",
      borderColor: "border-amber-500/40",
      bgHover: "hover:bg-amber-500/5",
      shadow: "shadow-[0_0_15px_rgba(245,158,11,0.3)]",
      values: [10, 20, 35, 50, 75, 90, 80, 60, 40, 25]
    }
  };

  return (
    <section id="inicio" className="bg-deep-corporate pt-32 pb-section-gap w-full relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_50%)] from-tech-cyan/10">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0080A8_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tech-cyan/10 border border-tech-cyan/20 text-tech-cyan text-xs font-semibold self-start tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-tech-cyan animate-pulse"></span>
              ERP Homologado y Multimoneda
            </div>
            
            <h1 className="font-bold text-4xl md:text-5xl lg:text-5xl text-white tracking-tight leading-tight">
              La plataforma integral que centraliza, automatiza y protege la gestión de su empresa.
            </h1>
            
            <p className="text-lg text-secondary-container leading-relaxed">
              ModelSistem unifica sus inventarios, ventas, compras y tesorería en tiempo real. Una solución robusta, escalable y completamente homologada ante las normativas fiscales vigentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                className="bg-brand-green text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-[#0ea371] font-semibold text-base flex items-center justify-center gap-2 group" 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Demostración Sin Costo
                <Play className="w-4 h-4 fill-current transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#modulos" 
                className="border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10 px-8 py-4 rounded-xl transition-all font-semibold text-base flex items-center justify-center"
              >
                Explorar Módulos
              </a>
            </div>
          </div>
          
          {/* Hero Interactive Mockup */}
          <div className="col-span-1 lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-xl aspect-[16/10] bg-slate-950 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
              
              {/* Mockup Windows Header */}
              <div className="h-10 bg-slate-900 border-b border-white/10 flex items-center px-4 gap-2 justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-6 w-48 bg-white/5 rounded-md flex items-center justify-center text-[10px] text-gray-500 font-mono">
                  modelsistem-cloud-erp.com
                </div>
                <div className="w-6"></div>
              </div>
              
              {/* Mockup Dashboard Content */}
              <div className="flex-1 p-6 flex flex-col gap-6 justify-between select-none">
                
                {/* Dashboard Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white text-sm font-bold font-geist">Panel General de Operaciones</h3>
                    <p className="text-[10px] text-gray-400">Actualizado hace unos segundos</p>
                  </div>
                  <span className="text-[10px] bg-tech-cyan/25 text-tech-cyan px-2 py-0.5 rounded border border-tech-cyan/30 font-semibold uppercase">
                    En Vivo
                  </span>
                </div>

                {/* KPI Selector Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* KPI 1 */}
                  <button 
                    onClick={() => setActiveKPI('ventas')}
                    className={`text-left bg-deep-corporate border rounded-xl p-3 flex flex-col gap-1 transition-all duration-300 ${
                      activeKPI === 'ventas' 
                        ? 'border-tech-cyan shadow-[0_0_15px_rgba(0,128,168,0.2)] bg-tech-cyan/5 scale-[1.02]' 
                        : 'border-white/10 hover:border-tech-cyan/50 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Ventas Hoy</span>
                      <TrendingUp className="w-3.5 h-3.5 text-tech-cyan" />
                    </div>
                    <span className="text-white text-base md:text-lg font-bold">$12,450.00</span>
                    <div className="h-1 w-full bg-white/5 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-tech-cyan w-[75%]"></div>
                    </div>
                  </button>

                  {/* KPI 2 */}
                  <button 
                    onClick={() => setActiveKPI('stock')}
                    className={`text-left bg-deep-corporate border rounded-xl p-3 flex flex-col gap-1 transition-all duration-300 ${
                      activeKPI === 'stock' 
                        ? 'border-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-[#10B981]/5 scale-[1.02]' 
                        : 'border-white/10 hover:border-[#10B981]/50 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Stock Crítico</span>
                      <AlertCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                    <span className="text-white text-base md:text-lg font-bold">08 ítems</span>
                    <div className="h-1 w-full bg-white/5 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-[#10B981] w-[40%]"></div>
                    </div>
                  </button>

                  {/* KPI 3 */}
                  <button 
                    onClick={() => setActiveKPI('facturas')}
                    className={`text-left bg-deep-corporate border rounded-xl p-3 flex flex-col gap-1 transition-all duration-300 ${
                      activeKPI === 'facturas' 
                        ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-amber-500/5 scale-[1.02]' 
                        : 'border-white/10 hover:border-amber-500/50 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Facturas</span>
                      <FileSpreadsheet className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <span className="text-white text-base md:text-lg font-bold">142 docs</span>
                    <div className="h-1 w-full bg-white/5 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-amber-500 w-[90%]"></div>
                    </div>
                  </button>
                </div>

                {/* Animated Chart Display */}
                <div className="bg-slate-900/40 border border-white/5 rounded-xl p-4 flex-1 flex flex-col gap-3 min-h-[140px] justify-between">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs text-white font-medium">{kpis[activeKPI].title}</span>
                    <span className={`text-[10px] font-bold ${kpis[activeKPI].textColor}`}>Visualización Activa</span>
                  </div>
                  
                  <div className="flex-1 flex items-end justify-between gap-2 h-24 pt-2">
                    {kpis[activeKPI].values.map((val, idx) => (
                      <div 
                        key={idx} 
                        style={{ height: animate ? `${val}%` : '5%' }}
                        className={`w-full ${kpis[activeKPI].color} rounded-t transition-all duration-700 ease-out`}
                      ></div>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
