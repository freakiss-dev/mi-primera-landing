'use client';

import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sofía Martínez',
      role: 'Diseñadora UX & Triatleta',
      comment: 'Empiezo el día entrenando pesado en el gym, tomo mi latte de avena y me conecto a trabajar. ¡Es el lugar perfecto para mantener mi rutina!',
      highlight: 'Entrenar + Trabajar en un solo lugar',
      image: '/public/images/testimonials/sofia.jpg',
      gradientBorder: 'from-[#ff6808] via-[#4570ff] to-[#c6ff94]',
      objectPosition: 'object-top',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Founder de Startup',
      comment: 'Las salas de reuniones son súper profesionales para recibir clientes, y el café de especialidad siempre impresiona al equipo.',
      highlight: 'Salas de reuniones 4K impecables',
      image: '/public/images/testimonials/carlos.jpg',
      gradientBorder: 'from-[#4570ff] via-[#c6ff94] to-[#ff6808]',
      objectPosition: 'object-top',
    },
    {
      name: 'Valentina Ríos',
      role: 'Freelancer & Fitness Enthusiast',
      comment: 'El descuento del plan anual en el menú del café es increíble. Los smoothies proteicos post-workout son los mejores de la ciudad.',
      highlight: 'Smoothies proteicos top',
      image: '/public/images/testimonials/valentina.jpg',
      gradientBorder: 'from-[#c6ff94] via-[#ff6808] to-[#4570ff]',
      objectPosition: 'object-[center_20%]', // Centrada y enfocada en su rostro
    },
  ];

  const handleNext = () => {
    setMobileIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-6 bg-[#000000] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c6ff94] uppercase mb-1 block">
            Comunidad Café Extremo
          </span>
          <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-white">
            Lo que dicen nuestros miembros
          </h2>
        </div>

        {/* VISTA MÓVIL: Slider / Carousel Compacto (1 testimonio a la vez con controles) */}
        <div className="block md:hidden">
          <div className="relative min-h-[460px] flex flex-col justify-between p-5 rounded-2xl bg-[#193f78]/40 border border-white/10 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full gap-4"
              >
                <div>
                  {/* 1. ARRIBA: FOTO (>30% DE ESPACIO DE LA CARTA) Y DATOS */}
                  <div className="relative mb-3">
                    <div className={`p-[2px] rounded-2xl bg-gradient-to-tr ${testimonials[mobileIndex].gradientBorder} shadow-[0_0_15px_rgba(255,104,8,0.25)]`}>
                      <div className="w-full h-44 rounded-[14px] overflow-hidden bg-[#193f78] relative">
                        <img
                          src={testimonials[mobileIndex].image}
                          alt={testimonials[mobileIndex].name}
                          className={`w-full h-full object-cover ${testimonials[mobileIndex].objectPosition}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-3">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-bold text-white text-base">{testimonials[mobileIndex].name}</h4>
                              <CheckCircle2 className="w-4 h-4 text-[#c6ff94]" />
                            </div>
                            <p className="text-[11px] text-gray-300">{testimonials[mobileIndex].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ESTRELLAS POR DEBAJO DE LA FOTO JUSTO EN MEDIO */}
                  <div className="flex justify-center gap-1 text-[#ff6808] my-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ff6808]" />
                    ))}
                  </div>

                  {/* 2. CENTRO: QUOTE Y COMENTARIO */}
                  <div>
                    <Quote className="w-5 h-5 text-[#4570ff] mb-2" />
                    <p className="text-gray-200 text-sm leading-relaxed">
                      "{testimonials[mobileIndex].comment}"
                    </p>
                  </div>
                </div>

                {/* 3. ABAJO: RECUADRO VERDE + CONTROLES */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-[#c6ff94]/20 border border-[#c6ff94]/40 text-[#c6ff94] text-[11px] font-semibold">
                    {testimonials[mobileIndex].highlight}
                  </div>

                  {/* Controles del Slider Móvil */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-2 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white"
                      aria-label="Testimonio anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-2 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white"
                      aria-label="Siguiente testimonio"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores de Puntos (Dots) para Móvil */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setMobileIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${mobileIndex === idx ? 'bg-[#c6ff94] w-6' : 'bg-white/20 w-2.5'
                  }`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* VISTA DESKTOP: Rejilla de 3 Columnas */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-[#193f78]/40 border border-white/10 flex flex-col justify-between hover:border-[#ff6808]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,104,8,0.15)]"
            >
              <div>
                {/* 1. ARRIBA: FOTO ENCABEZADO (>30% DE LA CARTA) Y NOMBRE */}
                <div className="relative mb-4">
                  <div className={`p-[3px] rounded-2xl bg-gradient-to-tr ${item.gradientBorder} shadow-[0_0_18px_rgba(69,112,255,0.25)] group-hover:shadow-[0_0_25px_rgba(255,104,8,0.4)] transition-all duration-300`}>
                    <div className="w-full h-48 rounded-[13px] overflow-hidden bg-[#193f78] relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-full object-cover ${item.objectPosition} group-hover:scale-105 transition-transform duration-500 ease-out`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-white text-lg group-hover:text-[#c6ff94] transition-colors drop-shadow">
                              {item.name}
                            </h4>
                            <CheckCircle2 className="w-4 h-4 text-[#c6ff94]" />
                          </div>
                          <p className="text-xs text-gray-300 font-medium">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ESTRELLAS POR DEBAJO DE LA FOTO JUSTO EN MEDIO */}
                <div className="flex justify-center gap-1.5 text-[#ff6808] my-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff6808]" />
                  ))}
                </div>

                {/* 2. CENTRO: QUOTE Y COMENTARIO */}
                <div className="mb-6">
                  <Quote className="w-7 h-7 text-[#4570ff] mb-3" />
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* 3. ABAJO: RECUADRO VERDE */}
              <div className="pt-4 border-t border-white/10 flex justify-start">
                <div className="inline-block px-3 py-1.5 rounded-md bg-[#c6ff94]/20 border border-[#c6ff94]/40 text-[#c6ff94] text-xs font-semibold">
                  {item.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


