import React from 'react';

interface DestinationHeroProps {
  title: string;
  subtitle: string;
  description: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

const DestinationHero: React.FC<DestinationHeroProps> = ({
  title,
  subtitle,
  description,
  gradientFrom = 'from-blue-900',
  gradientVia = 'via-indigo-800',
  gradientTo = 'to-purple-900'
}) => {
  return (
    <section className={`relative bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} py-20`}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title} <span className="text-yellow-400">{subtitle}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default DestinationHero;
