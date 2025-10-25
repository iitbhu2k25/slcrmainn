"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ActivityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 lg:px-16 py-12">
      {/* Activities Section */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center text-[#081f5c] mb-8"
        >
          Activities
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=""
          >
            <Image
              src="/img/activities1.avif"
              alt="Activities"
              width={1200}
              height={700}
              className="w-full h-[350px] sm:h-[450px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#081f5c] mb-8">
          Implementation
        </h2>

        {/* Large Image at the Top */}
        <div className="flex justify-center">
          <Image
            src="/img/activities2.avif"
            alt="Implementation 1"
            width={550}
            height={550}
            className="object-cover"
          />
        </div>

        {/* Grid Layout for Images in Single Line */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-6 items-center mt-8">
          {/* First Two Images (Main + Color Coding Table) */}
          <div className="flex items-center gap-0 mx-auto">
            {/* Main Implementation Image */}
            <Image
              src="/img/activities4.jpg"
              alt="Main Implementation Image"
              width={400}
              height={300}
              className="object-cover"
            />

            {/* Small Color Coding Table - Closely Placed */}
            <Image
              src="/img/activities5.avif"
              alt="Color Coding Table"
              width={120}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Third Image in the Same Row */}
          <div className="flex justify-center">
            <Image
              src="/img/activities3.avif"
              alt="Implementation 3"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityPage;
