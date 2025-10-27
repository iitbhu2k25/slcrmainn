"use client";

/**
 * For best results, add these fonts to your layout or global CSS:
 * 
 * @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Inter:wght@300;400;600&display=swap');
 * 
 * Then in your Tailwind config:
 * fontFamily: {
 *   serif: ['Merriweather', 'Georgia', 'serif'],
 *   sans: ['Inter', 'system-ui', 'sans-serif'],
 * }
 */

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Beaker, TrendingUp } from "lucide-react";

interface ResearchData {
  title: string;
  authors?: string[];
  institution?: string;
  abstract: string;
  currentGap: string[];
  technology: string[];
  novelty: string[];
  detailsApplicability: string[];
  fieldApplication: string[];
  limitations: string[];
  status: string[];
  references: { name: string; url?: string }[];
  images?: { src: string; alt: string; caption?: string }[];
}

const ResearchShowcase: React.FC = () => {
  const researchData: ResearchData = {
    title: "Floating Wetlands for Water Treatment",
    authors: ["Research Team", "Environmental Engineering Dept."],
    institution: "Institute of Water Research",
    abstract:
      "An eco-engineered, nature-based solution designed to restore and treat polluted water bodies through floating vegetation systems. This research presents an innovative approach to water remediation using optimized plant-microbe combinations.",
    currentGap: [
      "In India, natural-based treatment solutions like wetlands are underutilized and often poorly maintained.",
    ],
    technology: [
      "Floating platforms with aquatic plants absorb and degrade pollutants naturally, improving water quality.",
    ],
    novelty: [
      "Optimized plant-microbe combinations enhance removal efficiency for heavy metals and nutrients.",
    ],
    detailsApplicability: [
      "Removes dissolved nutrients and heavy metals from water bodies.",
      "Scalable modular floating units adaptable to any pond or reservoir.",
      "Supports denitrification, sedimentation, and microbial pollutant breakdown.",
    ],
    fieldApplication: ["Successfully demonstrated in Denmark and India."],
    limitations: [
      "Requires periodic maintenance and monitoring.",
      "Additional microbial culturing needed for effective carbon removal.",
    ],
    status: ["Under communication for field-scale deployment."],
    references: [
      { name: "Eco Island", url: "#" },
      { name: "Floating Island International Inc", url: "#" },
    ],
    images: [
      {
        src: "/images/floating-wetland-1.jpg",
        alt: "Floating wetland system",
        caption: "Figure 1: Field installation of the floating wetland module",
      },
      {
        src: "/images/floating-wetland-2.jpg",
        alt: "Wetland prototype",
        caption: "Figure 2: Prototype during controlled testing phase",
      },
    ],
  };

  const Section: React.FC<{
    title: string;
    items: string[];
    icon?: React.ReactNode;
  }> = ({ title, items, icon }) => (
    <motion.section
      className="mb-10"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-5">
        {icon && <div className="text-blue-700">{icon}</div>}
        <h2 className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <p key={i} className="text-gray-700 text-base leading-[1.8] text-justify font-light">
            {item}
          </p>
        ))}
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative">
      {/* Subtle Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white py-10 px-6 shadow-xl relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <FileText size={22} />
            <span className="text-sm font-semibold uppercase tracking-widest opacity-90 font-sans">
              Research Paper
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-1 tracking-tight">
            {researchData.title}
          </h1>
          {researchData.authors && (
            <p className="text-blue-100 mt-4 text-base font-light">
              {researchData.authors.join(" • ")}
            </p>
          )}
          {researchData.institution && (
            <p className="text-blue-200 text-sm mt-2 font-light italic">
              {researchData.institution}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDEBAR: Images (1/3) */}
          <motion.aside
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Make it sticky */}
            <div className="lg:sticky lg:top-6 space-y-6">
              <div className="bg-white rounded-xl p-6 border-2 border-blue-100 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Beaker size={22} className="text-blue-700" />
                  <h3 className="font-serif font-bold text-lg text-gray-900">Quick Info</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="pb-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-800">Status:</span>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      {researchData.status[0]}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Field:</span>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      Environmental Engineering
                    </p>
                  </div>
                </div>
              </div>

              {researchData.images?.map((img, i) => (
                <motion.figure
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="p-4 text-xs text-gray-600 border-t border-gray-200 italic font-light leading-relaxed">
                      {img.caption}
                    </figcaption>
                  )}
                </motion.figure>
              ))}
            </div>
          </motion.aside>

          {/* RIGHT MAIN CONTENT: Research Details (2/3) */}
          <motion.main
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Abstract */}
            <section className="mb-12 pb-10 border-b-2 border-gray-300">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Abstract
              </h2>
              <p className="text-gray-700 text-base leading-[1.9] text-justify font-light">
                {researchData.abstract}
              </p>
            </section>

            {/* Research Sections */}
            <div className="space-y-10">
              <Section
                title="1. Current Gap"
                items={researchData.currentGap}
                icon={<TrendingUp size={22} />}
              />

              <Section
                title="2. Technology Overview"
                items={researchData.technology}
                icon={<Beaker size={22} />}
              />

              <Section
                title="3. Novelty & Innovation"
                items={researchData.novelty}
              />

              <Section
                title="4. Technical Details & Applicability"
                items={researchData.detailsApplicability}
              />

              <Section
                title="5. Field Applications"
                items={researchData.fieldApplication}
              />

              <Section
                title="6. Limitations & Considerations"
                items={researchData.limitations}
              />

              {/* References */}
              <section className="mt-12 pt-10 border-t-2 border-gray-300">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  References
                </h2>
                <ol className="space-y-4">
                  {researchData.references.map((ref, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700 font-light"
                    >
                      <span className="font-semibold text-gray-500 min-w-[2.5rem]">
                        [{i + 1}]
                      </span>
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 hover:underline flex items-center gap-1.5 transition-colors"
                        >
                          {ref.name}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span>{ref.name}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </section>

              {/* Publication Info */}
              <section className="mt-12 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border-2 border-gray-200 shadow-sm">
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  <span className="font-semibold">Published:</span>{" "}
                  {new Date().getFullYear()} • Research Innovation Showcase
                </p>
                <p className="text-sm text-gray-700 mt-3 font-light leading-relaxed">
                  <span className="font-semibold">Keywords:</span> Floating
                  wetlands, Water treatment, Phytoremediation, Environmental
                  engineering, Nature-based solutions
                </p>
              </section>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ResearchShowcase;