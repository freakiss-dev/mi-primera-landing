'use client';

import React, { useState } from 'react';
import PillButton from './PillButton';
import { RotateCw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
  categoryTag?: string;
  details?: {
    specsTitle?: string;
    specs?: string[];
    extraInfo?: string;
  };
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  benefits = [],
  categoryTag,
  details,
  className = '',
}: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full h-[420px] [perspective:1000px] group">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* CARA FRONTAL */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className={`absolute inset-0 flex flex-col p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
        >
          <div className="flex items-center justify-between mb-4">
            {icon && (
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                {icon}
              </div>
            )}
            {categoryTag && (
              <PillButton active size="sm" variant="secondary" className="pointer-events-none">
                {categoryTag}
              </PillButton>
            )}
          </div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-4 leading-relaxed">{description}</p>

          {benefits.length > 0 && (
            <ul className="mt-auto mb-4 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 flex-shrink-0 opacity-80" />
                  {benefit}
                </li>
              ))}
            </ul>
          )}

          <div className="pt-2 mt-auto">
            <PillButton
              onClick={handleFlip}
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-current"
            >
              <span>Ver Especificaciones</span>
              <RotateCw className="w-3.5 h-3.5" />
            </PillButton>
          </div>
        </div>

        {/* CARA TRASERA (FLIP) */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className={`absolute inset-0 flex flex-col p-6 rounded-2xl border border-gray-100 shadow-lg ${className}`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider opacity-80">
              Detalles & Especificaciones
            </span>
            <div className="p-1.5 bg-white/20 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          <h4 className="text-lg font-bold mb-2">{details?.specsTitle || title}</h4>

          {details?.specs && details.specs.length > 0 && (
            <ul className="space-y-2.5 my-2">
              {details.specs.map((spec, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm leading-snug">
                  <span className="mr-2 font-bold text-[#ff6808]">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          )}

          {details?.extraInfo && (
            <p className="text-xs opacity-95 italic mt-auto mb-4 bg-black/10 p-2.5 rounded-lg border border-black/5">
              "{details.extraInfo}"
            </p>
          )}

          <div className="pt-2 mt-auto">
            <PillButton
              onClick={handleFlip}
              variant="primary"
              size="sm"
              className="w-full flex items-center justify-center gap-2"
            >
              <span>Volver a la Resumen</span>
              <RotateCw className="w-3.5 h-3.5" />
            </PillButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
