"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/60 rounded-full text-cyan-300 text-sm font-semibold tracking-wide">
                🚀 Available for Work
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Hi, I&apos;m
                <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Faysal Ahmed
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-gray-300 mb-4"
            >
              Full Stack Software Engineer
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8 font-medium"
            >
              Crafting scalable web applications and beautiful user experiences.
              Specializing in React, Next.js, and modern full-stack development.
              Passionate about clean code, performance, and solving real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3.5 bg-linear-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <FiDownload size={20} className="group-hover:scale-110 transition-transform" />
                Download my CV
              </a>
              <a
                href="https://github.com/Abir-Ahmed-Faysal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-center group"
              >
                View My Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <a
                href="https://github.com/Abir-Ahmed-Faysal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/faysal-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="fr.abir.ahmed.faysal@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiMail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative h-96 sm:h-full flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Glowing Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"
              ></motion.div>

              {/* Image Container */}
              <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-slate-900 rounded-full overflow-hidden border border-cyan-500/30">
                <Image
                  src="/images/thedevfaysal -professional-image.jpeg"
                  alt="Faysal Ahmed - Full Stack Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-20"
        >
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
            <FiArrowDown size={24} className="text-cyan-400" />
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
