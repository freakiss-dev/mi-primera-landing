'use client';

import React from 'react';
import Link from 'next/link';
import PillButton from '../ui/PillButton';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] bg-[#000000] text-white flex flex-col justify-center items-center px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden rounded-b-[40px]">
      {/* Dual Background Ambient Images with +10% Transparency / Visibility */}
      <div className="absolute inset-0 grid grid-cols-2 opacity-35 pointer-events-none">
        <div className="relative h-full overflow-hidden">
          <img
            src="/images/hero/gym.jpg"
            alt="Gimnasio de Alto Rendimiento"
            className="w-full h-full object-cover filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative h-full overflow-hidden">
          <img
            src="/images/hero/cafe.jpg"
            alt="Café de Especialidad"
            className="w-full h-full object-cover filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
        </div>
      </div>

      {/* Background Overlay Gradient with 10% more transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#193f78]/30 via-[#000000]/50 to-[#000000] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Eyebrow / Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#c6ff94] text-[#000000]">
            Espacio Híbrido • Gym & Work & Coffee
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight sm:leading-none"
        >
          Donde la energía del gimnasio se une con el{' '}
          <span className="relative inline-block text-[#ff6808] font-handwriting text-5xl sm:text-7xl md:text-8xl normal-case">
            mejor café
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#ff6808]"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 Q 50 0 95 15"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle Explicativo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#f1f0ec] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Entrena en nuestro gimnasio de alto rendimiento, trabaja en zonas de coworking silenciosas, agenda salas de reuniones privadas y recarga energías con café de especialidad.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <Link href="#contacto" className="w-full sm:w-auto">
            <PillButton active variant="primary" size="lg" className="w-full sm:w-auto px-8 min-h-[44px]">
              Obtener 1 Día Gratis
            </PillButton>
          </Link>

          <Link href="#servicios" className="w-full sm:w-auto">
            <PillButton
              active
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 border-2 border-[#ff6808] text-[#ff6808] hover:bg-[#ff6808] hover:text-white min-h-[44px]"
            >
              Explorar Espacios
            </PillButton>
          </Link>
        </motion.div>

        {/* Tarjetas Destacadas de las 2 Imágenes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {/* Card Gym */}
          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-tr from-[#ff6808] to-[#193f78] shadow-lg hover:shadow-[0_0_25px_rgba(255,104,8,0.4)] transition-all duration-300">
            <div className="relative h-36 rounded-[14px] overflow-hidden bg-black">
              <img
                src="/images/hero/gym.jpg"
                alt="Área Gym & Entrenamiento"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ff6808] text-white shadow-md">
                  Gym & Fitness TRX
                </span>
              </div>
            </div>
          </div>

          {/* Card Cafe */}
          <div className="relative group p-[2px] rounded-2xl bg-gradient-to-tr from-[#4570ff] to-[#c6ff94] shadow-lg hover:shadow-[0_0_25px_rgba(69,112,255,0.4)] transition-all duration-300">
            <div className="relative h-36 rounded-[14px] overflow-hidden bg-black">
              <img
                src="/images/hero/cafe.jpg"
                alt="Barra de Café de Especialidad"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#4570ff] text-white shadow-md">
                  Barra de Café de Especialidad
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

