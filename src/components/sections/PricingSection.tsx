'use client';

import React, { useState } from 'react';
import PricingCard from '../ui/PricingCard';
import PillButton from '../ui/PillButton';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

export default function PricingSection() {
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(1); // Semestral abierto por defecto

  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById('contacto');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contacto';
    }
  };

  const plans = [
    {
      planName: 'Plan Mensual',
      price: '$45',
      frequency: '/mes',
      features: [
        'Acceso ilimitado al Gimnasio',
        'Puesto en Coworking 5 hrs/semana',
        'Descuento del 5% en el Café',
        'Lockers & Duchas incluidos',
      ],
      isPopular: false,
      badge: 'Flex',
      className: 'bg-white border-[#e5e7eb]',
    },
    {
      planName: 'Plan Semestral',
      price: '$38',
      frequency: '/mes',
      features: [
        'Acceso ilimitado Gimnasio 24/7',
        'Coworking ilimitado en horario comercial',
        '2 Horas de Sala de Reuniones al mes',
        'Descuento del 10% en el Menú del Café',
        'Invitado gratis 1 vez por mes',
      ],
      isPopular: true,
      badge: 'Más Elegido',
      className: 'bg-white border-[#ff6808]',
    },
    {
      planName: 'Plan Anual Pro',
      price: '$29',
      frequency: '/mes',
      features: [
        'Acceso VIP Gimnasio + Coworking 24/7',
        '5 Horas de Sala de Reuniones al mes',
        'Hasta 15% OFF en todo el Menú del Café',
        'Pase para acompañante 2 veces por mes',
        'Entrenador personal 1 sesión/mes',
      ],
      isPopular: false,
      badge: 'Máximo Ahorro',
      className: 'bg-[#000000] text-white border-gray-800',
    },
  ];

  return (
    <section id="planes" className="min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-6 bg-[#f1f0ec]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ff6808] uppercase mb-1 block">
            Membresías Flexibles
          </span>
          <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-[#000000] mb-2 sm:mb-4">
            Elige el plan que impulsa tu rutina
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-base">
            Todos nuestros planes incluyen acceso a la comunidad y beneficios exclusivos en la cafetería.
          </p>
        </div>

        {/* Highlighted Banner Beneficio Escalable */}
        <div className="mb-8 p-3 sm:p-4 bg-[#c6ff94] rounded-2xl border border-[#000000]/10 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 shadow-sm max-w-3xl mx-auto">
          <span className="px-2.5 py-0.5 bg-[#000000] text-white rounded-full text-[10px] sm:text-xs font-bold uppercase">
            Oferta Especial
          </span>
          <p className="text-xs sm:text-sm font-semibold text-[#000000]">
            🔥 Hasta un <span className="underline decoration-[#ff6808] decoration-2">15% OFF</span> en el Café con Plan Anual.
          </p>
        </div>

        {/* VISTA MÓVIL: Acordeón de Precios */}
        <div className="block md:hidden space-y-3">
          {plans.map((plan, index) => {
            const isOpen = openMobileIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border ${
                  plan.isPopular ? 'border-[#ff6808] ring-2 ring-[#ff6808]/20' : 'border-gray-200'
                } overflow-hidden transition-all ${plan.className}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenMobileIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none min-h-[56px]"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-base">{plan.planName}</h3>
                        {plan.badge && (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                              plan.isPopular ? 'bg-[#ff6808] text-white' : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-xl font-bold">{plan.price}</span>
                        <span className="text-xs opacity-75">{plan.frequency}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden px-5 pb-5 pt-1 border-t border-black/10"
                    >
                      <ul className="space-y-2 mb-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-xs gap-2">
                            <Check className="w-4 h-4 text-[#ff6808] flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <PillButton
                        active={plan.isPopular}
                        variant={plan.isPopular ? 'primary' : 'outline'}
                        size="md"
                        onClick={handleScrollToCTA}
                        className="w-full"
                      >
                        Unirse Ahora
                      </PillButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* VISTA DESKTOP: Grid de 3 Tarjetas de Precios */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.planName}
              price={plan.price}
              frequency={plan.frequency}
              features={plan.features}
              isPopular={plan.isPopular}
              badge={plan.badge}
              ctaText="Unirse Ahora"
              onCtaClick={handleScrollToCTA}
              className={`${plan.className} w-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
