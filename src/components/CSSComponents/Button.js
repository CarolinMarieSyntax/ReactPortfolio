import React from 'react';

function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-syntax-purple text-white hover:bg-syntax-mediumPurple focus:ring-syntax-purple',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border-2 border-syntax-mediumPurple text-white hover:bg-syntax-mediumPurple/10 hover:border-syntax-lightPurple focus:ring-syntax-mediumPurple bg-transparent',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

