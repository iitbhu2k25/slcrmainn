'use client';

import { useState, useMemo } from 'react';
import { Droplets, Leaf, Brain, Trash2, Search, Filter } from 'lucide-react';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/technology/CategoryCard';
import TechnologyCard from '@/components/technology/TechnologyCard';
import TechnologyModal from '@/components/technology/TechnologyModal';
import { technologies, categories, Technology } from '@/lib/data';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryData = [
    {
      key: 'decentralized',
      icon: Droplets,
      title: categories.decentralized,
      description: 'Nature-based solutions and decentralized treatment systems',
      color: 'primary',
    },
    {
      key: 'stp-improvement',
      icon: Leaf,
      title: categories['stp-improvement'],
      description: 'Advanced technologies for enhancing sewage treatment plants',
      color: 'green',
    },
    {
      key: 'smart-monitoring',
      icon: Brain,
      title: categories['smart-monitoring'],
      description: 'IoT, AI, and sensor technologies for real-time monitoring',
      color: 'secondary',
    },
    {
      key: 'sludge-treatment',
      icon: Trash2,
      title: categories['sludge-treatment'],
      description: 'Innovative solutions for sludge and solid waste management',
      color: 'purple',
    },
  ];

  const filteredTechnologies = useMemo(() => {
    let filtered = technologies;

    if (selectedCategory) {
      filtered = filtered.filter((tech) => tech.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (tech) =>
          tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tech.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const getCategoryCount = (category: string) => {
    return technologies.filter((tech) => tech.category === category).length;
  };

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Explore by Category</h2>
            <p className="section-subtitle">
              Discover innovative technologies across four major categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryData.map((category) => (
              <CategoryCard
                key={category.key}
                icon={category.icon}
                title={category.title}
                description={category.description}
                count={getCategoryCount(category.key)}
                color={category.color}
                onClick={() => {
                  setSelectedCategory(category.key);
                  document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">All Technologies</h2>
            <p className="section-subtitle">
              Comprehensive collection of 45+ innovative wastewater treatment solutions
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                  selectedCategory === null
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
                }`}
              >
                All ({technologies.length})
              </button>
              {categoryData.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
                  }`}
                >
                  {category.title.split(' & ')[0]} ({getCategoryCount(category.key)})
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredTechnologies.length}</span>{' '}
            {filteredTechnologies.length === 1 ? 'technology' : 'technologies'}
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                technology={tech}
                onClick={() => setSelectedTechnology(tech)}
              />
            ))}
          </div>

          {filteredTechnologies.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No technologies found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <img src="/api/placeholder/40/40" alt="Ministry" className="w-10 h-10 rounded" />
              <span className="text-sm">Ministry of Jal Shakti</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/api/placeholder/40/40" alt="Namami Gange" className="w-10 h-10 rounded" />
              <span className="text-sm">Namami Gange</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/api/placeholder/40/40" alt="Embassy" className="w-10 h-10 rounded" />
              <span className="text-sm">Embassy of Denmark</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/api/placeholder/40/40" alt="IIT" className="w-10 h-10 rounded" />
              <span className="text-sm">IIT</span>
            </div>
          </div>
          <p className="text-gray-400">
            © 2025 Innovative Technologies Research. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Technology Modal */}
      <TechnologyModal
        technology={selectedTechnology}
        onClose={() => setSelectedTechnology(null)}
      />
    </main>
  );
}
