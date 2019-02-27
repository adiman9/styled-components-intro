import React from 'react';

export function Card({ children, theme }) {
  return (
    <div className={`card ${theme}`}>
      {children}
    </div>
  );
}

export function CardImage({ imgsrc }) {
  return (
    <img className="card-img" src={imgsrc} alt="alt text" />
  );
}

export function CardFooter({ children }) {
  return (
    <div className="card-footer">
      {children}
    </div>
  );
}
