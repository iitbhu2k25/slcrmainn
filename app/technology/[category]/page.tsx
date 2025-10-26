'use client';

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { technologies, categories } from "@/lib/data";
import TechnologyCard from "@/components/technology/TechnologyCard";

export default function CategoryPage() {
  const { category } = useParams();

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => tech.category === category);
  }, [category]);

  const title = categories[category as keyof typeof categories] || "Technologies";

  return (
    <main className="min-h-screen">

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle">
              Innovative wastewater technologies under this category
            </p>
          </div>

          {/* Technologies Grid */}
          {filteredTechnologies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTechnologies.map((tech) => (
                <TechnologyCard key={tech.id} technology={tech} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No technologies found
              </h3>
              <p className="text-gray-600">Try another category</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
