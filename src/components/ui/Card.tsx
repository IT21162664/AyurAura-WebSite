import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 
      ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : 'transition-all'} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;