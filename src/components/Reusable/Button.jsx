import React from 'react';

// Reusable Component 1: Кнопка
const Button = ({ children, onClick, variant = 'primary', type = 'button', disabled = false }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition duration-200 ease-in-out w-full sm:w-auto";
  
  const variants = {
    primary: "bg-gc-primary text-gc-dark hover:bg-yellow-400",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;