"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/image1.png", "/image2.jpg", "/image4.jpg", "/image3.avif"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-12 lg:px-16 pt-4 bg-gradient-to-br from-blue-200 via-white to-gray-200">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Welcome to SLCR
        </h1>
        <p className="text-gray-700 text-lg md:text-xl text-justify leading-relaxed">
          Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the joint
          initiative by the Hon’ble Prime Minister of India, H.E. Shri. Narendra
          Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen...
        </p>
      </div>

      {/* Right Side - Image Slider */}
      <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0 p-2">
        <div className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] rounded-lg shadow-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt="SLCR College"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 60vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
