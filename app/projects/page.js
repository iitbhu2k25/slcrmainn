"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Developing a Decision Support System",
    description:
      "For water management to analyze basin water dynamics through hydrological models, scenario generation, forecasting and data analytics, Integrate ground  water and hydrological models to create river management plan",
    link: "/projects/project1",
  },
  {
    title: "Hydrogeological Models of the Varuna Basin",
    description:
      "Led by professor from the university of copenhagen, it aims to create a details fingerprint libraray, enhance water quality monitoring, and propose effective remediation strategies",
    link: "/projects/project3",
  },
  {
    title: "Characterization of Emerging Pollutants and Fingerprint Analysis",
    description:
      "For Recharge sites, aims to enhance base flow through managed Aquifer recharge (Mar). advance geophysical techniques and mathmatical modelling to identify optimal recharge sites and rates",
    link: "/projects/project2",
  },
];

export default function Projects() {
  return (
    <section className="px-8 py-16 bg-gradient-to-br from-blue-200 via-white to-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900 text-center"
        >
          Our <span className="text-blue-700">Projects</span>
        </motion.h1>

        <p className="text-gray-700 text-lg text-center mt-3">
          Discover our latest research and technological innovations.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-2xl rounded-2xl p-8 transition-all border border-gray-300 hover:border-blue-600 hover:bg-white/90 duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-3 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block mt-4 text-blue-700 font-medium hover:underline hover:text-blue-900 transition duration-200"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
