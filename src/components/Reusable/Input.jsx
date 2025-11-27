import React from 'react';

// Reusable Component 2: Поле ввода с валидацией
const Input = ({ label, id, type = 'text', value, onChange, placeholder, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`w-full p-3 border rounded-lg bg-gray-800 focus:outline-none 
          ${error ? 'border-red-500' : 'border-gray-700 focus:border-gc-primary'}
          text-white placeholder-gray-500`}
      />
      {/* Feedback State: Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;