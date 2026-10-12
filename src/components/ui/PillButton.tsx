import React from 'react';

export interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function PillButton({
  active = false,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: PillButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantStyles = {
    primary: active 
      ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-blue-500' 
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-400',
    secondary: active
      ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700 focus:ring-purple-500'
      : 'bg-purple-100 text-purple-700 hover:bg-purple-200 focus:ring-purple-400',
    outline: active
      ? 'border-2 border-blue-600 bg-blue-50 text-blue-600 focus:ring-blue-500'
      : 'border-2 border-gray-300 text-gray-600 hover:border-gray-400 focus:ring-gray-400',
    ghost: active
      ? 'bg-gray-200 text-gray-900 font-semibold focus:ring-gray-400'
      : 'text-gray-600 hover:bg-gray-100 focus:ring-gray-300',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
