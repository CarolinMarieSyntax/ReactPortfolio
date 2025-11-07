import React from 'react';

function Badge({ children, variant = 'default', className = '' }) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  
  const variants = {
    default: 'bg-gray-700 text-gray-300 border border-gray-600',
    primary: 'bg-syntax-mediumPurple/20 text-syntax-lightPurple border border-syntax-mediumPurple/40',
    success: 'bg-green-500/20 text-green-400 border border-green-500/40',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/40',
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;

