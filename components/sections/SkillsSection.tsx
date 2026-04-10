"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Code2, Server, Database, Wrench } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const getIcon = (category: string) => {
  const iconMap: Record<string, React.JSX.Element> = {
    "Frontend Development": <Code2 className="w-8 h-8" />,
    "Backend Development": <Server className="w-8 h-8" />,
    "Database & ORM": <Database className="w-8 h-8" />,
    "Tools & DevOps": <Wrench className="w-8 h-8" />,
  };
  return iconMap[category] || <Code2 className="w-8 h-8" />;
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-linear-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-50 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            Technical <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and practices I use to build scalable applications
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-linear-to-br from-slate-700/50 to-slate-600/30 border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-lg transition-all"></div>

              {/* Icon */}
              <div className="relative z-10 mb-4 w-12 h-12 bg-linear-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors">
                {getIcon(skillGroup.category)}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-4">
                {skillGroup.category}
              </h3>

              {/* Skills */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {skillGroup.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm rounded-full hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mt-16 p-8 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-center"
        >
          <p className="text-gray-300 text-lg">
            I'm constantly learning and exploring new technologies to stay at the cutting edge of modern development.
            Whether it&apos;s a new framework or DevOps tool, I embrace continuous growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
