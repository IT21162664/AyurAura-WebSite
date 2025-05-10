import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  download,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
}) => {
  // Determine base classes based on variant and size
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-[#3d9942] text-white hover:bg-[#2d7d32] focus:ring-[#3d9942] dark:bg-[#5eb468] dark:hover:bg-[#3d9942]',
    secondary: 'bg-[#a37b4d] text-white hover:bg-[#8c623d] focus:ring-[#a37b4d] dark:bg-[#b89567] dark:hover:bg-[#a37b4d]',
    outline: 'border-2 border-[#3d9942] text-[#3d9942] hover:bg-[#3d9942] hover:text-white dark:border-[#5eb468] dark:text-[#5eb468] dark:hover:bg-[#5eb468] dark:hover:text-gray-900',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Combine all classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  // If it's a Link component (internal navigation)
  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }
  
  // If it's an external link
  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target="_blank" 
        rel="noreferrer"
        download={download}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  // Otherwise it's a regular button
  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;