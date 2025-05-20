import React, { forwardRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: 'default' | 'alternate' | 'primary' | 'secondary';
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  id,
  className = '',
  bgColor = 'default',
}, ref) => {
  // Background color classes
  const bgClasses = {
    default: 'bg-white dark:bg-gray-900',
    alternate: 'bg-gray-50 dark:bg-gray-800',
    primary: 'bg-[#f0f9f1] dark:bg-[#1e4121]/20',
    secondary: 'bg-[#f8f5f0] dark:bg-[#4d3828]/20',
  };

  return (
    <section 
      ref={ref}
      id={id} 
      className={`py-12 md:py-20 ${bgClasses[bgColor]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;