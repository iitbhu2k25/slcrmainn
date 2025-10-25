'use client';

import { MapPin, ExternalLink } from 'lucide-react';
import { Technology } from '@/lib/data';

interface TechnologyCardProps {
  technology: Technology;
  onClick: () => void;
}

export default function TechnologyCard({ technology, onClick }: TechnologyCardProps) {
  const categoryColors = {
    decentralized: 'bg-primary-100 text-primary-700 border-primary-200',
    'stp-improvement': 'bg-green-100 text-green-700 border-green-200',
    'smart-monitoring': 'bg-secondary-100 text-secondary-700 border-secondary-200',
    'sludge-treatment': 'bg-purple-100 text-purple-700 border-purple-200',
  };

  return (
    <button
      onClick={onClick}
      className="card card-hover p-6 text-left w-full group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {technology.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span>{technology.country}</span>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-2" />
      </div>

      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
          categoryColors[technology.category]
        }`}
      >
        {technology.category
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </span>

      {technology.novelty && (
        <p className="mt-4 text-sm text-gray-600 line-clamp-2">{technology.novelty}</p>
      )}

      {technology.status && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs font-medium text-gray-500">Status: </span>
          <span className="text-xs text-gray-700">{technology.status}</span>
        </div>
      )}
    </button>
  );
}
