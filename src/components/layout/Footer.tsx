import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import { Mail, Phone, MapPin, Share2, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-16 pb-12 px-4 sm:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Columna 1: Brand & Logo Minimalista */}
        <div className="space-y-4">
          <Logo />
          <p className="text-[#6e6d6c] text-sm leading-relaxed">
            El primer concepto híbrido que reúne Gimnasio de alto nivel, Café de especialidad, Salas de reuniones y Coworking en un solo lugar.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="font-semibold text-[#ffffff] text-sm uppercase tracking-wider mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm text-[#6e6d6c]">
            <li><Link href="#servicios" className="hover:text-white transition-colors">Servicios & Espacios</Link></li>
            <li><Link href="#testimonios" className="hover:text-white transition-colors">Testimonios</Link></li>
            <li><Link href="#planes" className="hover:text-white transition-colors">Membresías & Precios</Link></li>
            <li><Link href="#contacto" className="hover:text-white transition-colors">Reservar Día Gratis</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="font-semibold text-[#ffffff] text-sm uppercase tracking-wider mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-[#6e6d6c]">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ff6808]" />
              <span>Av. Principal #450, Ciudad</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#4570ff]" />
              <span>+1 (555) 234-5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#c6ff94]" />
              <span>contacto@cafeextremo.com</span>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div>
          <h4 className="font-semibold text-[#ffffff] text-sm uppercase tracking-wider mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-[#4570ff] transition-colors text-white min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Comunidad">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-[#ff6808] transition-colors text-white min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Chat Directo">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-[#c6ff94] hover:text-black transition-colors text-white min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Compartir">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#6e6d6c] gap-4">
        <p>© 2026 Café Extremo. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
