'use client';

import { Droplets, Leaf, Microscope, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 flex justify-center gap-4 flex-wrap">
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <Droplets className="w-8 h-8 text-primary-600" />
          </div>
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <Leaf className="w-8 h-8 text-green-600" />
          </div>
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <Microscope className="w-8 h-8 text-secondary-600" />
          </div>
          <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <Settings className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Innovative Technologies</span>
          <br />
          <span className="text-gray-800">for Wastewater Treatment</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A comprehensive research showcase of 45+ cutting-edge approaches in wastewater treatment,
          from decentralized solutions to smart monitoring systems.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">

          <button
            onClick={() => {
              const element = document.getElementById("categories");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-primary-600"
          >
            View Categories
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-glass p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-primary-600">45+</div>
            <div className="text-sm text-gray-600 mt-2">Technologies</div>
          </div>
          <div className="bg-glass p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-600 mt-2">Categories</div>
          </div>
          <div className="bg-glass p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-secondary-600">15+</div>
            <div className="text-sm text-gray-600 mt-2">Countries</div>
          </div>
          <div className="bg-glass p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600 mt-2">Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
