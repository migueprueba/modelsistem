import React, { useState } from 'react';
import { CheckCircle2, Warehouse, FileText, Landmark, RefreshCw } from 'lucide-react';

export default function Modules() {
  // 1. Inventario States
  const [stockLevels, setStockLevels] = useState({
    prodA: 85,
    prodB: 12,
    prodC: 62
  });
  
  const handleRestock = () => {
    setStockLevels(prev => ({
      ...prev,
      prodB: prev.prodB === 12 ? 92 : 12
    }));
  };

  // 2. Ventas Invoice States
  const invoices = [
    {
      client: "Distribuidora Andina C.A.",
      rif: "J-40283726-1",
      date: "10-06-2026",
      items: [
        { desc: "Servicio Cloud ERP ERP-S2", price: 1200 },
        { desc: "Licencia Anual Estación", price: 350 },
        { desc: "Soporte Técnico Premium", price: 200 }
      ],
      subtotal: 1750,
      iva: 280,
      total: 2030
    },
    {
      client: "Inversiones Caracas C.A.",
      rif: "J-30985721-0",
      date: "09-06-2026",
      items: [
        { desc: "Lector Código de Barras Industrial", price: 450 },
        { desc: "Impresora Fiscal Homologada", price: 890 },
        { desc: "Rollo Térmico 80mm (Caja x 50)", price: 60 }
      ],
      subtotal: 1400,
      iva: 224,
      total: 1624
    }
  ];
  
  const [invoiceIndex, setInvoiceIndex] = useState(0);
  const activeInvoice = invoices[invoiceIndex];

  const handleNextInvoice = () => {
    setInvoiceIndex((prev) => (prev + 1) % invoices.length);
  };

  // 3. Tesorería currency switcher
  const [currency, setCurrency] = useState('VES');
  const exchangeRate = 40.00; // 40 Bs per USD

  const balanceVES = 1450230.00;
  const balanceUSD = balanceVES / exchangeRate;

  // Chart paths depending on currency
  const chartPaths = {
    VES: "M0 50 Q 25 45, 50 35 T 100 40 T 150 15 T 200 5",
    USD: "M0 45 Q 25 35, 50 40 T 100 25 T 150 30 T 200 12"
  };

  return (
    <section id="modulos" className="py-20 max-w-container-max mx-auto px-6 md:px-margin-desktop flex flex-col gap-24">
      
      {/* ----------------- Module 1: Inventarios ----------------- */}
      <div id="inventarios" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-margin-desktop items-center scroll-mt-28">
        
        {/* Mockup Container */}
        <div className="order-2 lg:order-1 relative aspect-video bg-deep-corporate rounded-2xl border border-white/5 overflow-hidden shadow-lg flex flex-col p-6 justify-between select-none">
          
          <div className="bg-white/5 rounded-xl border border-tech-cyan/20 flex flex-col p-5 flex-1 justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Warehouse className="w-5 h-5 text-tech-cyan" />
                <span className="text-white text-sm font-bold">Reporte de Existencias</span>
              </div>
              <button 
                onClick={handleRestock}
                className="flex items-center gap-1.5 bg-tech-cyan/25 hover:bg-tech-cyan/40 border border-tech-cyan/30 text-white text-[10px] font-bold px-2.5 py-1 rounded transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${stockLevels.prodB === 92 ? 'rotate-180 transition-transform duration-500' : ''}`} />
                {stockLevels.prodB === 12 ? 'Simular Entrada' : 'Restablecer'}
              </button>
            </div>
            
            <div className="space-y-4 pt-4">
              {/* Product 1 */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-secondary-container uppercase">
                  <span>Producto A-203 (Servidor CPU)</span>
                  <span className="text-white font-bold">{stockLevels.prodA}%</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${stockLevels.prodA}%` }} 
                    className="h-full bg-tech-cyan rounded-full shadow-[0_0_8px_rgba(0,128,168,0.5)] transition-all duration-500"
                  ></div>
                </div>
              </div>

              {/* Product 2 (Critical / Interactive) */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-secondary-container uppercase">
                  <span>Insumo Industrial B (Filtros)</span>
                  {stockLevels.prodB === 12 ? (
                    <span className="text-red-500 font-bold animate-pulse">12% - Crítico</span>
                  ) : (
                    <span className="text-brand-green font-bold">92% - Óptimo</span>
                  )}
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${stockLevels.prodB}%` }} 
                    className={`h-full rounded-full transition-all duration-500 ${
                      stockLevels.prodB === 12 
                        ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' 
                        : 'bg-brand-green shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-secondary-container uppercase">
                  <span>Repuestos Genéricos</span>
                  <span className="text-brand-green font-bold">{stockLevels.prodC}%</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${stockLevels.prodC}%` }} 
                    className="h-full bg-brand-green rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-500"
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-3 mt-2 flex justify-between items-center text-[10px] text-gray-400">
              <span>Módulo Inventario Activo</span>
              <span>Visualizador ERP</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2 flex flex-col gap-5">
          <div className="w-12 h-12 bg-tech-cyan/10 rounded-xl border border-tech-cyan/20 flex items-center justify-center">
            <Warehouse className="w-6 h-6 text-tech-cyan" />
          </div>
          <h2 className="text-3xl font-bold text-text-main font-geist leading-tight">
            Gestión de Inventarios
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            Controle existencias físicas y valoradas, maneje lotes y seriales, y automatice reposiciones con alertas tempranas.
          </p>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              "Múltiples depósitos y almacenes físicos.",
              "Transferencias rápidas y controladas entre almacenes.",
              "Trazabilidad completa de productos y control de Kardex histórico.",
              "Manejo de presentaciones y múltiples unidades de medida.",
              "Ajustes de inventario automatizados con auditoría."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-tech-cyan shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ----------------- Module 2: Ventas/Compras ----------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-margin-desktop items-center">
        
        {/* Content Section */}
        <div className="flex flex-col gap-5">
          <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl border border-[#10B981]/20 flex items-center justify-center">
            <FileText className="w-6 h-6 text-brand-green" />
          </div>
          <h2 className="text-3xl font-bold text-text-main font-geist leading-tight">
            Ciclo de Ventas y Compras
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            Gestión de proveedores, órdenes de compra, cotizaciones y facturación integrada con control de cuentas por cobrar y pagar.
          </p>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              "Emisión de Facturas y Documentos Fiscales (Homologado SENIAT).",
              "Análisis y evaluación continua de proveedores.",
              "Emisión ágil de cotizaciones, pedidos, notas de entrega y facturación legal.",
              "Gestión integrada de cuentas por cobrar y cuentas por pagar en tiempo real.",
              "Órdenes de compra y recepción automatizada de mercancía."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-tech-cyan shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup Container */}
        <div className="relative aspect-video bg-deep-corporate rounded-2xl border border-white/5 overflow-hidden shadow-lg flex items-center justify-center p-6 select-none">
          <div className="w-full max-w-[340px] bg-white rounded-xl shadow-2xl p-5 flex flex-col gap-3.5 relative overflow-hidden text-gray-800 transition-all duration-300">
            
            {/* Stamp Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-brand-green text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse border border-[#0ea371]">
                EMITIDO
              </span>
            </div>

            {/* Client Info Mock */}
            <div className="flex flex-col border-b border-gray-100 pb-3">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Factura Digital</span>
              <span className="text-xs font-bold text-deep-corporate mt-0.5 truncate">{activeInvoice.client}</span>
              <div className="flex justify-between items-center text-[9px] text-gray-400 mt-1 font-mono">
                <span>RIF: {activeInvoice.rif}</span>
                <span>F. Emisión: {activeInvoice.date}</span>
              </div>
            </div>

            {/* Product line items */}
            <div className="space-y-2 py-1 flex-1">
              {activeInvoice.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-[10px]">
                  <span className="text-gray-600 truncate max-w-[200px]">{item.desc}</span>
                  <span className="font-mono text-gray-900 font-medium">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-[9px]">
                <span className="text-gray-400 uppercase font-bold">Subtotal</span>
                <span className="font-mono font-medium">${activeInvoice.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-[9px]">
                <span className="text-gray-400 uppercase font-bold">I.V.A. (16%)</span>
                <span className="font-mono font-medium">${activeInvoice.iva.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mt-1 pt-1.5 border-t border-dashed border-gray-200">
                <span className="text-[10px] text-deep-corporate uppercase font-bold">Total Factura</span>
                <span className="text-xs font-mono font-extrabold text-primary">${activeInvoice.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Simulated Action inside Mockup */}
            <button
              onClick={handleNextInvoice}
              className="mt-2 text-center bg-gray-50 hover:bg-gray-100 border border-gray-200 text-deep-corporate text-[10px] font-bold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5 text-tech-cyan" />
              Ver Siguiente Simulación
            </button>
            
            <div className="absolute bottom-0 left-0 w-full h-1 bg-tech-cyan"></div>
          </div>
        </div>
      </div>

      {/* ----------------- Module 3: Tesorería ----------------- */}
      <div id="finanzas" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-margin-desktop items-center scroll-mt-28">
        
        {/* Mockup Container */}
        <div className="order-2 lg:order-1 relative aspect-video bg-deep-corporate rounded-2xl border border-white/5 overflow-hidden shadow-lg flex items-center justify-center p-6 select-none">
          <div className="w-full h-full bg-slate-900/50 rounded-xl p-5 border border-white/5 flex flex-col justify-between">
            
            {/* Header / Currency Toggle */}
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <div className="flex flex-col">
                <span className="text-[9px] text-tech-cyan font-bold uppercase tracking-wider">Balance Consolidado</span>
                <span className="text-white text-base md:text-lg font-bold transition-all duration-300">
                  {currency === 'VES' 
                    ? `Bs. ${balanceVES.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
                    : `$ ${balanceUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  }
                </span>
              </div>
              
              {/* Tabs Switcher */}
              <div className="flex bg-slate-950 p-0.5 rounded-lg border border-white/10">
                <button 
                  onClick={() => setCurrency('VES')}
                  className={`px-3 py-1 rounded-md text-[9px] font-bold transition-all ${
                    currency === 'VES' ? 'bg-tech-cyan text-white shadow-sm' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  VES
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-md text-[9px] font-bold transition-all ${
                    currency === 'USD' ? 'bg-tech-cyan text-white shadow-sm' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>

            {/* Simulated Line Chart SVG */}
            <div className="relative h-28 w-full flex items-end pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
                <path 
                  d={chartPaths[currency]} 
                  fill="none" 
                  stroke="#0080A8" 
                  strokeWidth="2.5"
                  className="transition-all duration-500 ease-in-out"
                ></path>
                <path 
                  d={`${chartPaths[currency]} V 60 H 0 Z`} 
                  fill="url(#grad)" 
                  opacity="0.12"
                  className="transition-all duration-500 ease-in-out"
                ></path>
                <defs>
                  <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#0080A8', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: '#0080A8', stopOpacity: 0 }}></stop>
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Dynamic Dots */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between px-2">
                <span className="w-1.5 h-1.5 bg-tech-cyan rounded-full animate-ping absolute left-2 bottom-1.5"></span>
                <span className="w-1.5 h-1.5 bg-tech-cyan rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-tech-cyan rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-tech-cyan rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-tech-cyan rounded-full"></span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-[9px] text-gray-400 border-t border-white/5 pt-2 font-mono">
              <span>Tasa Oficial: 1 USD = {exchangeRate.toFixed(2)} VES</span>
              <span className="text-brand-green font-bold">Flujo Seguro VPN</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2 flex flex-col gap-5">
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center justify-center">
            <Landmark className="w-6 h-6 text-amber-500" />
          </div>
          <h2 className="text-3xl font-bold text-text-main font-geist leading-tight">
            Tesorería y Gestión Multimoneda
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            Optimice el flujo de caja con herramientas financieras avanzadas y soporte multimoneda nativo.
          </p>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              "Control y conciliación automatizada de operaciones bancarias y flujo de caja.",
              "Manejo multifuncional de cajas chicas, bancos y control de anticipos.",
              "Soporte para múltiples instrumentos de pago (VES/Pago Móvil, Divisas y pasarelas digitales).",
              "Conversión instantánea y control de saldos paralelos (Bolívares / Dólares)."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-tech-cyan shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
}
