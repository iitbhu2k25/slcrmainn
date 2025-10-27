'use client';

import { useParams } from "next/navigation";
import { technologies } from "@/lib/data";
import Image from "next/image";

export default function TechnologyDetailPage() {
  const { id } = useParams();
  const techId = Number(id);
  const technology = technologies.find((tech) => tech.id === techId);

  if (!technology) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">Technology not found</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* Header Section - Academic Style */}
      <div className="bg-slate-900 text-white py-10 px-6 border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {technology.name}
          </h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[85%] mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Main Content - 3/4 Width */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Authors Section */}
            {technology.authors && technology.authors.length > 0 && (
              <section className="pb-8 border-b border-gray-200">
                <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                  Authors
                </h2>
                <div className="flex flex-wrap gap-2">
                  {technology.authors.map((author, index) => (
                    <span key={index}>
                      <span className="text-gray-900 font-medium">{author}</span>
                      
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Abstract - Current Gap */}
            {technology.currentGap && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                 CurrentGap
                </h2>
                <div className="bg-gray-50 border-l-4 border-blue-600 p-6">
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {technology.currentGap}
                  </p>
                </div>
              </section>
            )}

            {/* Introduction */}
            {technology.technology && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  1. Introduction
                </h2>
                <p className="text-gray-800 leading-relaxed text-justify">
                  {technology.technology}
                </p>
              </section>
            )}

            {/* Innovation & Novelty */}
            {technology.novelty && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  2. Innovation & Novel Contributions
                </h2>
                <p className="text-gray-800 leading-relaxed text-justify">
                  {technology.novelty}
                </p>
              </section>
            )}

            {/* Methodology - Technical Details */}
            {technology.details && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  3. Methodology & Technical Details
                </h2>
                <p className="text-gray-800 leading-relaxed text-justify whitespace-pre-line">
                  {technology.details}
                </p>
              </section>
            )}

            {/* Applications */}
            {technology.fieldApplication && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  4. Applications & Use Cases
                </h2>
                <p className="text-gray-800 leading-relaxed text-justify">
                  {technology.fieldApplication}
                </p>
              </section>
            )}

            {/* Limitations */}
            {technology.limitations && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  5. Limitations & Future Work
                </h2>
                <p className="text-gray-800 leading-relaxed text-justify">
                  {technology.limitations}
                </p>
              </section>
            )}

            {/* References */}
            {technology.references && technology.references.length > 0 && (
              <section className="border-t-2 border-gray-200 pt-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  References
                </h2>
                <ol className="space-y-3">
                  {technology.references.map((ref, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                      <span className="font-mono text-gray-500 min-w-[2rem]">
                        [{index + 1}]
                      </span>
                      <span className="text-gray-700 leading-relaxed">{ref}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* Sidebar - 1/4 Width */}
          <aside className="lg:col-span-1 space-y-6">
            
            {/* Publication Info */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4 sticky top-6">
                       
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Category
                </h3>
                <p className="text-sm font-medium text-slate-900 capitalize">
                  {technology.category.replace(/-/g, ' ')}
                </p>
              </div>
              
              <div className="border-t border-slate-200 pt-4">
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Institution
                </h3>
                <p className="text-sm font-medium text-slate-900">
                  {technology.institution || technology.country}
                </p>
              </div>

              {technology.status && (
                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Status
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                    {technology.status}
                  </span>
                </div>
              )}
            </div>

            {/* Figures */}
            {technology.images && technology.images.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                  <h3 className="text-xs uppercase tracking-wider text-slate-700 font-semibold">
                    Figures
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  {technology.images.map((img, index) => (
                    <figure key={index} className="space-y-2">
                      <div className="relative h-48 bg-slate-100 rounded overflow-hidden border border-slate-200">
                        <Image 
                          src={img} 
                          alt={`Figure ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="text-xs text-slate-600 text-center">
                        Figure {index + 1}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}