import React from 'react';
import { Check } from 'lucide-react';
import PillButton from './PillButton';

export interface PricingCardProps {
  badge?: string;
  isPopular?: boolean;
  planName: string;
  price: string;
  frequency?: string;
  features: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export default function PricingCard({
  badge,
  isPopular = false,
  planName,
  price,
  frequency = '/mes',
  features = [],
  ctaText = 'Comenzar',
  onCtaClick,
  className = '',
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col p-8 bg-white rounded-3xl border ${
        isPopular ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-200 shadow-sm'
      } transition-all duration-300 ${className}`}
    >
      {(badge || isPopular) && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <PillButton active size="sm" variant={isPopular ? 'primary' : 'secondary'}>
            {badge || (isPopular ? 'Popular' : '')}
          </PillButton>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{planName}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold tracking-tight text-gray-900">{price}</span>
          {frequency && <span className="text-sm font-normal text-gray-500">{frequency}</span>}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600 gap-3">
            <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <PillButton
        active={isPopular}
        variant={isPopular ? 'primary' : 'outline'}
        size="lg"
        onClick={onCtaClick}
        className="w-full mt-auto"
      >
        {ctaText}
      </PillButton>
    </div>
  );
}
