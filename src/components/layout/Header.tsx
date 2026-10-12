'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import PillButton from '../ui/PillButton';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 transition-all duration-300 ${isScrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-6'}`}>
      <div className={`max-w-7xl mx-auto bg-[#000000]/90 backdrop-blur-md text-white rounded-[16px] border border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg transition-all duration-300 ${isScrolled ? 'shadow-2xl border-white/20' : ''}`}>
        {/* Logo Minimalista de 3 Trazos */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#4570ff] rounded-lg">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Link href="#contacto">
            <PillButton active variant="primary" size="md">
              Reservar Espacio
            </PillButton>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle (Min 44px tap target) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-300 hover:text-white focus:outline-none"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-6 bg-[#000000] border border-white/10 rounded-2xl shadow-xl space-y-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
              <PillButton active variant="primary" size="lg" className="w-full">
                Reservar Espacio
              </PillButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

