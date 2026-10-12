'use client';

import React, { useState } from 'react';
import PillButton from '../ui/PillButton';
import { motion } from 'framer-motion';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'gym',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 bg-[#193f78] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-bold tracking-widest text-[#c6ff94] uppercase mb-2 block"
        >
          Prueba Gratuita & Visitas
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
        >
          ¡Reclama tu Día Gratis o Agenda una Visita!
        </motion.h2>

        <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto mb-10">
          Vive la experiencia de Café Extremo por un día completo. Gimnasio, espacio de coworking y un café de cortesía te están esperando.
        </p>

        {submitted ? (
          <div className="p-8 bg-[#000000]/60 border border-[#c6ff94] rounded-2xl max-w-lg mx-auto text-center">
            <h3 className="text-xl font-bold text-[#c6ff94] mb-2">¡Reserva Confirmada!</h3>
            <p className="text-sm text-gray-200">
              Te hemos enviado un correo con tu pase VIP de 1 día y el código para reclamar tu café de especialidad.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white text-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl text-left space-y-4"
          >
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                required
                placeholder="Ej. María Pérez"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] text-base focus:outline-none focus:ring-2 focus:ring-[#4570ff]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] text-base focus:outline-none focus:ring-2 focus:ring-[#4570ff]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Área de mayor interés
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-[12px] text-base focus:outline-none focus:ring-2 focus:ring-[#4570ff] bg-white"
              >
                <option value="gym">Pase 1 Día Gimnasio</option>
                <option value="coworking">Pase 1 Día Coworking & Café</option>
                <option value="meeting">Agendar Sala de Reuniones</option>
              </select>
            </div>

            <div className="pt-2">
              <PillButton active variant="primary" size="lg" className="w-full min-h-[44px]">
                Reclamar mi Día Gratis / Agendar
              </PillButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
