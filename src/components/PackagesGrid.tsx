import React from 'react';
import { Loader2 } from 'lucide-react';
import PackageCard from './PackageCard';
import { Package } from '@/hooks/usePackages';

interface PackagesGridProps {
  packages: Package[];
  loading: boolean;
  error: string | null;
  title: string;
  titleAccent: string;
  accentColorClass?: string;
  subtitle?: string;
  accentColor?: string;
  hoverColor?: string;
  buttonGradient?: string;
  emptyMessage?: string;
}

const PackagesGrid: React.FC<PackagesGridProps> = ({
  packages,
  loading,
  error,
  title,
  titleAccent,
  accentColorClass = 'text-blue-600',
  subtitle,
  accentColor = 'text-blue-600',
  hoverColor = 'group-hover:text-blue-600',
  buttonGradient = 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
  emptyMessage = 'Contact us for customized tour packages'
}) => {
  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            <span className="ml-4 text-lg text-gray-600">Loading packages...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-red-600 text-lg">Error loading packages: {error}</p>
            <a href="https://whatsform.com/4rhIjb" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {title} <span className={accentColorClass}>{titleAccent}</span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.length > 0 ? (
            packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                accentColor={accentColor}
                hoverColor={hoverColor}
                buttonGradient={buttonGradient}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Explore Amazing Destinations</h3>
              <p className="text-gray-600 mb-8">{emptyMessage}</p>
              <a href="https://whatsform.com/4rhIjb" target="_blank" rel="noopener noreferrer">
                <button className={`bg-gradient-to-r ${buttonGradient} text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  Get Custom Package
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackagesGrid;
