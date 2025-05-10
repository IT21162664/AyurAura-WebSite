import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`p-6 rounded-xl transition-all hover:shadow-lg ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0f9f1] dark:bg-[#2d7d32] text-[#3d9942] dark:text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;