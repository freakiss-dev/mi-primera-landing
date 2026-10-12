'use client';

import React, { useState } from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Coffee, Dumbbell, Users, Calendar, Utensils, Car, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturesSection() {
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(0);

  const services = [
    {
      icon: <Coffee className="w-6 h-6 text-[#000000]" />,
      title: 'Café & Bebidas',
      description: 'Granos de especialidad seleccionados, métodos de extracción artesanal y smoothies proteicos post-entreno.',
      categoryTag: 'Especialidad',
      benefits: ['Baristas certificados', 'Bebidas funcionales & proteicas', 'Wi-Fi ultrarrápido'],
      details: {
        specsTitle: 'Especificaciones del Café Bar',
        specs: [
          'Granos 100% Arábica de origen ético',
          'Leches vegetales sin costo extra',
          'Smoothies con 30g de proteína de suero',
          'Estaciones V60, Chemex y Espresso',
        ],
        extraInfo: 'Descuento del 15% para miembros anuales.',
      },
      bgColor: 'bg-[#d6e0ff]',
      textColor: 'text-[#000000]',
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#000000]" />,
      title: 'Gimnasio Equipado',
      description: 'Áreas de fuerza, cardio y zona funcional con máquinas de última generación y asesores en sala.',
      categoryTag: 'Alto Rendimiento',
      benefits: ['Lockers & duchas premium', 'Acceso 24/7 para miembros', 'Entrenadores calificados'],
      details: {
        specsTitle: 'Equipamiento & Instalaciones',
        specs: [
          'Powerlifting con racks olímpicos',
          'Cardio con pantallas táctiles',
          'Sauna seco e insumos de aseo',
          'Evaluación física mensual',
        ],
        extraInfo: 'Clases diarias de HIIT, Yoga y Mobility.',
      },
      bgColor: 'bg-[#c293f1]',
      textColor: 'text-[#000000]',
    },
    {
      icon: <Users className="w-6 h-6 text-[#000000]" />,
      title: 'Salas de Reuniones',
      description: 'Espacios insonorizados totalmente equipados con pantallas 4K y sistemas de videoconferencia.',
      categoryTag: 'Reservable',
      benefits: ['Capacidad de 4 a 12 personas', 'Servicio de café a la mesa', 'Reserva por horas'],
      details: {
        specsTitle: 'Equipamiento Audiovisual',
        specs: [
          'Pantallas 4K 65" AirPlay/HDMI',
          'Aislamiento acústico doble panel',
          'Pizarras acrílicas de pared completa',
          'Catering directo desde la cafetería',
        ],
        extraInfo: 'Reserva instantánea en línea.',
      },
      bgColor: 'bg-[#ebdcff]',
      textColor: 'text-[#000000]',
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: 'Coworking & Agendamiento',
      description: 'Puestos de trabajo flexibles con conexión de fibra óptica, ambiente ejecutivo y estaciones ergonómicas.',
      categoryTag: 'Productividad',
      benefits: ['Puestos flexibles o dedicados', 'Agendamiento desde app', 'Impresión y escáner'],
      details: {
        specsTitle: 'Infraestructura de Trabajo',
        specs: [
          'Fibra 1 GBps Simétrico',
          'Sillas ergonómicas Herman Miller',
          'Cabinas telefónicas privadas',
          'Impresiones ilimitadas',
        ],
        extraInfo: 'Eventos de networking semanal.',
      },
      bgColor: 'bg-[#193f78]',
      textColor: 'text-white',
    },
    {
      icon: <Car className="w-6 h-6 text-[#000000]" />,
      title: 'Auto Lavado Ecológico',
      description: 'Servicio de detailing y lavado ecológico en el estacionamiento mientras entrenas o trabajas.',
      categoryTag: 'Estacionamiento',
      benefits: ['Lavado al seco & cera polimérica', 'Limpieza profunda de interiores', 'Entrega en 45 min'],
      details: {
        specsTitle: 'Especificaciones Car Wash',
        specs: [
          'Productos biodegradables sin desperdicio',
          'Aspirado y desinfección con ozono',
          'Aviso WhatsApp cuando esté listo',
          'Estacionamiento techado 24 horas',
        ],
        extraInfo: 'Entrega tus llaves en recepción.',
      },
      bgColor: 'bg-[#c6ff94]',
      textColor: 'text-[#000000]',
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#000000]" />,
      title: 'Menú & Resto-Bar',
      description: 'Platos saludables, bowls nutritivos y opciones gourmet diseñados por nutricionistas.',
      categoryTag: 'Gastronomía',
      benefits: ['Opciones veganas & Keto', 'Snacks energéticos', 'Descuento para miembros'],
      details: {
        specsTitle: 'Detalles Gastronómicos',
        specs: [
          'Ingredientes orgánicos de temporada',
          'Cálculo exacto de macros',
          'Certificado Gluten-Free y Keto',
          'Servicio directo al coworking',
        ],
        extraInfo: 'Preparado al momento por nuestro chef.',
      },
      bgColor: 'bg-[#ffffff] border border-[#e5e7eb]',
      textColor: 'text-[#000000]',
    },
  ];

  return (
    <section id="servicios" className="min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-6 bg-[#f1f0ec]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ff6808] uppercase mb-1 block">
            Nuestros Espacios & Servicios
          </span>
          <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-[#000000]">
            Todo lo que necesitas en un solo lugar
          </h2>
        </div>

        {/* VISTA MÓVIL: Acordeón Compacto */}
        <div className="block md:hidden space-y-3">
          {services.map((service, index) => {
            const isOpen = openMobileIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border border-gray-200 overflow-hidden transition-all ${service.bgColor} ${service.textColor}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenMobileIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none min-h-[56px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base leading-tight">{service.title}</h3>
                      <span className="text-[11px] font-semibold opacity-75 uppercase tracking-wide">
                        {service.categoryTag}
                      </span>
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
                      className="overflow-hidden px-5 pb-5 pt-1 border-t border-black/5"
                    >
                      <p className="text-xs opacity-90 mb-3">{service.description}</p>
                      <ul className="space-y-1.5 mb-4">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="text-xs font-medium flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="p-3 bg-black/5 rounded-xl border border-black/5">
                        <span className="text-[11px] font-bold uppercase tracking-wider block mb-1">
                          {service.details.specsTitle}
                        </span>
                        <ul className="space-y-1">
                          {service.details.specs.map((spec, i) => (
                            <li key={i} className="text-[11px] opacity-90 flex items-start">
                              <span className="mr-1.5 text-[#ff6808] font-bold">•</span>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* VISTA DESKTOP: Grid con Flip Cards 3D */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              categoryTag={service.categoryTag}
              benefits={service.benefits}
              details={service.details}
              className={`${service.bgColor} ${service.textColor} h-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
