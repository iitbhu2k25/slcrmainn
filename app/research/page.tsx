'use client';

import { useRouter } from 'next/navigation';
import { Droplets, Leaf, Brain, Trash2 } from 'lucide-react';
import Hero from '@/components/technology/Hero';
import CategoryCard from '@/components/technology/CategoryCard';
import { technologies, categories } from '@/lib/data';

export default function Research() {
  const router = useRouter();

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

  const getCategoryCount = (category: string) =>
    technologies.filter((tech) => tech.category === category).length;

  return (
    <main className="min-h-screen">
      <Hero />

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
                onClick={() => router.push(`/technology/${category.key}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
