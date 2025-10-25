"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSLCR() {
  return (
    <main>
      {/* About Section */}
      <motion.section
        className="py-10 px-6 bg-white text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About SLCR
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            The Smart Living Lab on Clean River (SLCR) is a pioneering
            initiative focused on sustainable river rejuvenation. It integrates
            advanced technology, community participation, and policy frameworks
            to restore small rivers to their natural health.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/image1.png"
              alt="About SLCR"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Concept Section */}
      <section className="pt-10 px-6 bg-[#F5F5DC] text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#081f5c] mb-6">
            Concept of Smart Living Lab on Clean River (SLCR)
            <br /> Small River Rejuvenation
          </h2>
          <Image
            src="/about/flowchart1.avif"
            alt="Concept of SLCR"
            width={900}
            height={400}
            className="mx-auto mb-6"
          />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            SLCR focuses on a data-driven and ecosystem-based approach to revive
            small rivers. It involves real-time monitoring, scientific
            interventions, and community-based strategies to ensure sustainable
            restoration.
          </p>
          <Image
            src="/about/flowchart2.avif"
            alt="Small River Rejuvenation"
            width={700}
            height={400}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Major Objectives of SLCR
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            SLCR aims to bridge the gap between government authorities,
            knowledge institutions, technology providers, and citizens to foster
            knowledge-sharing and co-creation for clean rivers.
          </p>

          <div className="text-left max-w-5xl mx-auto">
            <ul className="list-disc list-outside pl-6 space-y-4 text-lg text-gray-700">
              <li>
                Create a platform between Government authorities, Knowledge
                institutions, technology providers, and citizens for knowledge
                sharing and co-creation to achieve clean river water.
              </li>
              <li>
                Bring global solutions to current challenges in the field of
                clean river water and conduct research and development to fit in
                real environments through the Living Lab approach, making them
                scalable and economically attractive.
              </li>
              <li>
                Support NMCG in achieving its vision by focusing on small
                rivers.
              </li>
              <li>
                Develop a repository of all collected knowledge and
                technologies, which can be shared through initiatives like the
                River Cities Alliance (RCA) and the Global River Cities Alliance
                (GRAC) to rejuvenate other small rivers or tributaries in India
                and GRCA member countries.
              </li>
              <li>
                Demonstrate global solutions successfully in the local context
                with sound business models that can be upscaled to other small
                rivers/tributaries.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-16 px-6 bg-[#081f5c] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Structure of SLCR
          </h2>
          <Image
            src="/about/structure.avif"
            alt="Structure of SLCR"
            width={700}
            height={450}
            className="mx-auto mb-10"
          />

          {/* Committees */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Joint Steering Committee",
                desc: "National-level committee with representatives from Denmark and India. Provides strategic guidance, reviews progress, and secures funding for new projects.",
              },
              {
                title: "Project Review Committee",
                desc: "Reviews ongoing projects, ensures quality control, and assists JSC in decision-making. Requests meetings for approvals or strategic directions.",
              },
              {
                title: "Multi-Stakeholder Working Group",
                desc: "Brings together agencies, ULBs, and missions to coordinate activities, share challenges, and align with national initiatives.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
