"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* Individual Navigation Item */
const NavItem = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="relative transition-all duration-300 text-gray-100 hover:text-white
               after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 hover:after:w-full"
    >
      {text}
    </Link>
  </li>
);

/* Dropdown Component */
const Dropdown = ({ label, children, isOpen, setIsOpen, type }) => (
  <li
    className="relative group"
    onMouseEnter={() => setIsOpen((prev) => ({ ...prev, [type]: true }))}
    onMouseLeave={() => setIsOpen((prev) => ({ ...prev, [type]: false }))}
  >
    <button className="flex items-center gap-1 py-auto text-gray-100 transition-all duration-300 hover:text-white">
      {label}
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-90 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden"
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

/* Dropdown Item */
const DropdownItem = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="block px-5 py-3 text-[#081f5c] hover:bg-blue-50 transition-all duration-300  whitespace-nowrap"
    >
      {text}
    </Link>
  </li>
);

/* Mobile Navigation Item */
const MobileNavItem = ({ href, text, setIsOpen }) => (
  <li className="px-6 py-3 border-b border-gray-300">
    <Link href={href} onClick={() => setIsOpen(false)}>
      {text}
    </Link>
  </li>
);

const MobileDropdown = ({ label, items, isOpen, setIsOpen, type }) => (
  <li className="px-6 py-3 border-b border-gray-300">
    <button
      className="flex justify-between w-full text-left text-lg font-medium text-gray-800"
      onClick={() => setIsOpen((prev) => ({ ...prev, [type]: !prev[type] }))}
    >
      {label}
      <ChevronDown
        size={18}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 pl-4 space-y-2 text-gray-700"
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-4 border-l-2 border-blue-500"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    projects: false,
    activities: false,
  });

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState({
    about: false,
    projects: false,
    activities: false,
  });

  // Fix hydration issues in Next.js
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <nav className="w-full bg-white shadow-lg z-50 sticky top-0 right-0 left-0">
      {/* Header Section */}
      <div className="flex max-md:flex-col max-md:gap-y-2 items-center justify-between p-2 lg:px-20">
        <div className="flex space-x-10 justify-between items-center">
          <div className="max-sm:w-[160px]">
            <Image
              src="/denmark.png"
              alt="ministry of denmark logo"
              width={200}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
          <div className="max-sm:w-[90px]">
            <Image
              src="/Ministry_of_Jal_Shakti.svg"
              alt="Jal Shakti"
              width={100}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
        </div>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center text-gray-900 font-bold font-garamond px-6">
          Smart Laboratory on Clean River
        </h1>
        <div className="flex space-x-10 md:space-x-4 xl:space-x-1 justify-between items-center">
          <div className="max-sm:w-[160px]">
            <Image
              src="/Logo_edited.png"
              alt="slcr logo"
              width={100}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
          <div className="max-sm:w-[60px]">
            <Image
              src="/namiti_gange.gif"
              alt="Namami gange logo"
              width={70}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
        </div>
      </div>
      {/* Desktop Navigation */}
      <div className="border-t border-gray-200 bg-[#081f5c]">
        <ul className="hidden md:flex justify-center space-x-12 py-4 text-md font-semibold text-gray-100">
          <NavItem href="/" text="Home" />
          <Dropdown
            label="About"
            isOpen={isDropdownOpen.about}
            setIsOpen={setIsDropdownOpen}
            type="about"
          >
            <DropdownItem href="/about/slcr" text="SLCR" />
            <DropdownItem href="/about/partner" text="Partner Institutes" />
          </Dropdown>
          <NavItem href="/secretariat" text="Secretariat" />
          <Dropdown
            label="Projects"
            href="/projects"
            isOpen={isDropdownOpen.projects}
            setIsOpen={setIsDropdownOpen}
            type="projects"
          >
            <DropdownItem href="/projects/project1" text="DSS-WRM" />
            <DropdownItem
              href="/projects/project2"
              text="Fingerprint Analysis"
            />
            <DropdownItem
              href="/projects/project3"
              text="Hydrological Modelling of Varuna"
            />
          </Dropdown>
          <Dropdown
            label="Activities"
            isOpen={isDropdownOpen.activities}
            setIsOpen={setIsDropdownOpen}
            type="activities"
          >
            <DropdownItem href="/activities/rhar" text="RHAR 2025" />
            <DropdownItem
              href="/activities/peoples_varuna"
              text="People’s Varuna"
            />
          </Dropdown>
          <NavItem href="/data" text="Data" />
          {/* <NavItem href="/media" text="Media" /> */}
          <NavItem href="/media" text="Media and Gallery" />
          <NavItem href="/contact" text="Contact" />
        </ul>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end px-4 py-3 bg-[#081f5c]">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="z-50 md:hidden absolute left-0 right-0 bg-gray-100/95 backdrop-blur-lg shadow-lg"
          >
            <ul className="flex flex-col text-lg font-medium text-gray-800 space-y-2 py-4">
              <MobileNavItem href="/" text="Home" setIsOpen={setIsOpen} />
              <MobileDropdown
                label="About"
                type="about"
                isOpen={isMobileDropdownOpen.about}
                setIsOpen={setIsMobileDropdownOpen}
                items={[
                  { href: "/about/slcr", text: "SLCR" },
                  { href: "/about/partner", text: "Partner Institutes" },
                ]}
              />
              <MobileNavItem
                href="/secretariat"
                text="Secretariat"
                setIsOpen={setIsOpen}
              />
              <MobileDropdown
                label="Projects"
                type="projects"
                isOpen={isMobileDropdownOpen.projects}
                setIsOpen={setIsMobileDropdownOpen}
                items={[
                  { href: "/projects/project1", text: "DSS-WRM" },
                  { href: "/projects/project2", text: "Fingerprint Analysis" },
                  {
                    href: "/projects/project3",
                    text: "Hydrological Modelling of Varuna",
                  },
                ]}
              />
              <MobileDropdown
                label="Activities"
                type="activities"
                isOpen={isMobileDropdownOpen.activities}
                setIsOpen={setIsMobileDropdownOpen}
                items={[
                  { href: "/activities/rhar", text: "RHAR 2025" },
                  {
                    href: "/activities/peoples_varuna",
                    text: "People’s Varuna",
                  },
                ]}
              />
              <MobileNavItem href="/data" text="Data" setIsOpen={setIsOpen} />
              {/* <MobileNavItem href="/media" text="Media" setIsOpen={setIsOpen} /> */}
              <MobileNavItem
                href="/media"
                text="Gallery"
                setIsOpen={setIsOpen}
              />
              <MobileNavItem
                href="/contact"
                text="Contact Us"
                setIsOpen={setIsOpen}
              />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
