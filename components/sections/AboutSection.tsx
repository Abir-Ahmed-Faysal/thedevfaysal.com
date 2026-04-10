"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-linear-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Passionate full-stack engineer dedicated to building scalable, performant web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Me */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a passionate full-stack engineer with a deep love for crafting elegant,
              scalable web applications. My journey in tech started with curiosity and has
              evolved into a career focused on solving real-world problems through clean,
              efficient code.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              What drives me is the intersection of beautiful design and robust backend architecture.
              I believe that great software isn&apos;t just about the code&apos;it&apos;s about creating experiences
              that delight users while remaining maintainable and performant.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I&apos;m not writing code, you can find me exploring DevOps practices, learning about
              system design, or contributing to open-source projects. I&apos;m always eager to collaborate
              on projects that push boundaries and create real impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-8">
              <motion.div
                variants={itemVariants}
                custom={0}
                className="text-center p-5 bg-linear-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/40 rounded-lg hover:border-cyan-400/70 transition-all duration-300 group cursor-default"
              >
                <p className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all">
                  15+
                </p>
                <p className="text-gray-400 text-sm mt-3 font-medium">Projects Built</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                custom={1}
                className="text-center p-5 bg-linear-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/40 rounded-lg hover:border-cyan-400/70 transition-all duration-300 group cursor-default"
              >
                <p className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all">
                  1.5+
                </p>
                <p className="text-gray-400 text-sm mt-3 font-medium">Years Learning</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                custom={2}
                className="text-center p-5 bg-linear-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-500/40 rounded-lg hover:border-cyan-400/70 transition-all duration-300 group cursor-default"
              >
                <p className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all">
                  100%
                </p>
                <p className="text-gray-400 text-sm mt-3 font-medium">Commitment</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-linear-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
                  💼
                </span>
                Project Experience
              </h3>
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-cyan-500/30 hover:border-cyan-400 transition-colors"
                >
                  <div className="absolute -left-4 top-1 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-800"></div>
                  <p className="font-semibold text-white">{exp.title}</p>
                  <p className="text-cyan-400 text-sm">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-linear-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
                  🎓
                </span>
                Education
              </h3>
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  custom={idx + experience.length}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg mb-4 hover:border-cyan-500/50 transition-all"
                >
                  <p className="font-semibold text-white">{edu.degree}</p>
                  <p className="text-cyan-400 text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                  {edu.details && (
                    <p className="text-gray-300 text-sm mt-2">{edu.details}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
