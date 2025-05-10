import React from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;