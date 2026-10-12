import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Café Extremo"
      >
        {/* Minimalist 3 stroke icon (Representing: Coffee Bean / Dumbbell / Network) */}
        {/* Stroke 1: Left Lightning/Streak */}
        <path
          d="M10 32 L20 8 L24 18"
          stroke="#4570ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Stroke 2: Central Flame/Pulse */}
        <path
          d="M16 22 L20 32 L30 12"
          stroke="#ff6808"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Stroke 3: Coffee Steam / Connection Arc */}
        <path
          d="M12 14 C18 6, 26 6, 32 16"
          stroke="#c6ff94"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-bold tracking-tight text-lg uppercase text-white">
        Café<span className="text-[#ff6808]">Extremo</span>
      </span>
    </div>
  );
}
