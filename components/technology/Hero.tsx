'use client';

import { Droplets, Leaf, Microscope, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background_water.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-black/60 z-0"></div>

      {/* Animated background lights */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        {/* Icons */}
        <div className="mb-8 flex justify-center gap-4 flex-wrap">
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform">
            <Droplets className="w-8 h-8 text-blue-300" />
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform">
            <Leaf className="w-8 h-8 text-green-300" />
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform">
            <Microscope className="w-8 h-8 text-cyan-300" />
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform">
            <Settings className="w-8 h-8 text-purple-300" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Innovative Technologies
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          A comprehensive research showcase of 45+ cutting-edge approaches in wastewater treatment,
          from decentralized solutions to smart monitoring systems.
        </p>

        {/* Button */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById("categories");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-white/90 text-blue-700 rounded-full font-semibold shadow-md hover:bg-white hover:scale-105 transition-all duration-300 border-2 border-blue-400"
          >
            View Categories
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-blue-300">45+</div>
            <div className="text-sm text-gray-200 mt-2">Technologies</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-green-300">4</div>
            <div className="text-sm text-gray-200 mt-2">Categories</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-cyan-300">15+</div>
            <div className="text-sm text-gray-200 mt-2">Countries</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-purple-300">100%</div>
            <div className="text-sm text-gray-200 mt-2">Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
