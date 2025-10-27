"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const logos: string[] = [
    "/img/iitbhu.png",
    "/img/ganga.jpg",
    "/img/cgwb_logo_2.jpg",
    "/img/golden_jubilee_logo.png",
    "/img/logo.png",
    "/img/download.png",
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700 py-4  text-slate-300">
      {/* Logos */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-10 mb-8">
        {logos.map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-3 bg-slate-700/20 rounded-xl backdrop-blur-sm hover:bg-slate-700/30 transition-all"
          >
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={45} // smaller width for balance
              height={45}
              className="object-contain transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-3/4 mx-auto h-px bg-slate-600/50 mb-6"></div>

      {/* Text */}
      <div className="text-center space-y-2">
        <p className="font-light text-sm md:text-base tracking-wide">
          © {new Date().getFullYear()} <span className="font-medium">SLCR</span> | All Rights Reserved
        </p>
        <p className="text-xs md:text-sm opacity-75 font-light">
          SLCR, Indian Institute of Technology (BHU), Varanasi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
