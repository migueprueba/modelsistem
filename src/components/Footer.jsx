import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface w-full py-16">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-white text-xl">
              <Cpu className="w-6 h-6 text-tech-cyan" />
              <span>ModelSistem</span>
            </div>
            <p className="text-sm text-surface-variant max-w-sm leading-relaxed">
              © {currentYear} ModelSistem ERP Solutions. Todos los derechos reservados. Automatizando procesos empresariales con robustez y confiabilidad.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Legal</h4>
            <a className="text-sm text-surface-variant hover:text-tech-cyan transition-colors" href="#">Política de Privacidad</a>
            <a className="text-sm text-surface-variant hover:text-tech-cyan transition-colors" href="#">Términos de Servicio</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Soporte</h4>
            <a className="text-sm text-surface-variant hover:text-tech-cyan transition-colors" href="#">Seguridad</a>
            <a className="text-sm text-surface-variant hover:text-tech-cyan transition-colors" href="#">Centro de Ayuda</a>
          </div>

        </div>
        
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>Diseño Web Premium para ERP de Alto Rendimiento.</span>
          <span>Desarrollado en Venezuela</span>
        </div>
      </div>
    </footer>
  );
}
