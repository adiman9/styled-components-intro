import React from 'react';

export function Button({ children, theme, ...props }) {
  return (
    <button
      className={`btn ${theme}`}
      {...props}
    >
      {children}
    </button>
  );
}
