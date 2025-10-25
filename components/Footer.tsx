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
    <footer className="bg-white text-neutral-700 py-3 border-t border-neutral-200">
      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-2">
        {logos.map((src, index) => (
          <div key={index} className="flex justify-center items-center p-1">
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>

      {/* Text */}
      <div className="container mx-auto text-center">
        <p className="text-xs md:text-sm font-light">&copy; 2025 SLCR | All Rights Reserved</p>
        <p className="text-xs md:text-sm font-light">
          SLCR, Indian Institute of Technology, BHU, Varanasi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
