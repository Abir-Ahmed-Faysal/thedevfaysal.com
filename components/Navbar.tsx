"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              FA
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer text-sm font-medium"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-3">
            <a
              href="/cv.pdf"
              download
              className="px-5 py-2.5 bg-linear-to-r from-amber-500 to-amber-600 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-cyan-400" />
            ) : (
              <Menu className="w-6 h-6 text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 py-4 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            {navItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer text-sm font-medium hover:bg-cyan-500/10 rounded"
              >
                {item.label}
              </ScrollLink>
            ))}
            <a
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 rounded font-semibold text-sm flex items-center gap-2 mx-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
