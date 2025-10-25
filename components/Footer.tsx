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
    <footer className="bg-white text-neutral-700 py-6 border-t border-neutral-200">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-light">
          &copy; 2025 SLCR | All Rights Reserved
        </p>
        <p className="text-sm md:text-base font-light">
          SLCR, Indian Institute of Technology, BHU, Varanasi.
        </p>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-4">
        {logos.map((src, index) => (
          <div
            key={index}
            className="max-sm:w-[40px] flex justify-center items-center"
          >
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={60}
              height={100}
              className="object-contain"
              priority={true} // optional, ensures logos load fast
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
