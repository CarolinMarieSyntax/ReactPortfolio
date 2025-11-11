import React from 'react';

function Card({ children, className = '', hover = true, variant = 'default' }) {
  const variants = {
    default: 'bg-white/10 backdrop-blur-sm border border-syntax-mediumPurple/30 hover:border-syntax-lightPurple/60',
    dark: 'bg-syntax-darkBlue text-white border border-syntax-mediumPurple/40 hover:border-syntax-lightPurple/60',
  };
  
  const baseStyles = `rounded-xl shadow-lg p-6 ${variants[variant]}`;
  const hoverStyles = hover ? 'hover:shadow-xl hover:shadow-syntax-purple/20 transition-all duration-300' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

export default Card;

