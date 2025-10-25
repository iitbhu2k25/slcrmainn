"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Projects from "./projects/page";
import ImportantWebsites from "@/components/ImportantWebsites";
import Hero from "@/components/Hero";
import ImportantLinks from "@/components/ImportantLinks";
import OurProjects from "@/components/OurProjects";
import Partnership from "@/components/Partnership";
import AboutProject from "@/components/AboutProject";

const sections = [
  {
    title: "Indo - Denmark Partnership",
    content: [
      "Establishment of Smart Laboratory on Clean Rivers in Varanasi (SLCR) is the initiative discussed between the Hon’ble Prime Minister of India, H.E. Shri. Narendra Modi and the Prime Minister of Denmark, H.E. Ms Mette Frederiksen, on 09th October 2021 during the latter’s visit to India.",
      "SLCR was also mentioned in the India–Denmark Joint Statement released on 3rd May 2021. On 12th September 2022, a Memorandum of Understanding was signed between the Ministry of Jal Shakti and the Danish Environment Ministry as a broad-based framework in the field of Water Resources Development and Management including the SLCR initiative.",
    ],
  },
  {
    title: "Our Aim",
    content: [
      "To bring global knowledge and solutions on holistic and sustainable rejuvenation of small rivers.",
      "The government of India is dedicated towards clean and sustainable rivers in India. In order to do so, Hon'ble Prime Minister Shri Narendra Modi conceptualised the visionary Smart Laboratory for Clean Rivers (SLCR) an initiative with his Danish counterpart.",
      "The Smart Laboratory in Varanasi is a platform for knowledge creation and exchange, training, research, and innovation.",
      "It is providing global and local sustainable solutions for the rejuvenation of streams/rivers and is jointly managed by the Indian and Danish sides.",
    ],
  },
  {
    title: "Objectives",
    content: [
      "Create a platform between Government authorities, Knowledge institutions, technology providers and citizens for knowledge sharing and co-creation toachieve clean river water",
      "To bring the global solutions on current challenges in the field of clean river water and conduct research and development to fit in real environment through Living lab approach to make them scalable and economically attractive.",
      "To Support NMCG in achieving its vision by focussing on small rivers",
      "Develop the repository of all collected knowledge and technologies, which can be shared through various initiatives like River Cities Alliance/Global River Cities Alliance to perform rejuvenation work on other small rivers or tributaries in India and in GRCA member countries.",
      "The main outcomes of the SLCR will be successful demonstration of global solutions in the local context, which have a sound business model and can be up-scaled to other small rivers/tributaries.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <ImportantLinks />
      <OurProjects/>
      <Partnership/>
      <AboutProject/>
    </>
  );
}
