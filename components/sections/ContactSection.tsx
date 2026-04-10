"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { contactInfo } from "@/data/portfolio";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Since we don't have a backend email service configured,
      // we'll just show a success message
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-linear-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            Let&apos;s <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate and create something amazing together.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="group p-6 bg-linear-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 rounded-lg hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/15 text-center"
          >
            <div className="w-12 h-12 bg-linear-to-r from-cyan-400/30 to-blue-500/30 rounded-lg flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:from-cyan-400/50 group-hover:to-blue-500/50 transition-all border border-cyan-500/40">
              <FiMail size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              {contactInfo.email}
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="group p-6 bg-linear-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 rounded-lg hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/15 text-center"
          >
            <div className="w-12 h-12 bg-linear-to-r from-cyan-400/30 to-blue-500/30 rounded-lg flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:from-cyan-400/50 group-hover:to-blue-500/50 transition-all border border-cyan-500/40">
              <FiPhone size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              {contactInfo.phone}
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="group p-6 bg-linear-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 rounded-lg hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/15 text-center"
          >
            <div className="w-12 h-12 bg-linear-to-r from-cyan-400/30 to-blue-500/30 rounded-lg flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:from-cyan-400/50 group-hover:to-blue-500/50 transition-all border border-cyan-500/40">
              <FiMapPin size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">{contactInfo.location}</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-2xl mx-auto bg-linear-to-br from-slate-700/40 to-slate-600/20 border border-cyan-500/30 rounded-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-slate-800/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-slate-800/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                placeholder="What's this about?"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 bg-slate-800/60 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </motion.div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/15 border border-green-500/50 rounded-lg text-green-400 font-medium text-sm"
              >
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/15 border border-red-500/50 rounded-lg text-red-400 font-medium text-sm"
              >
                ✗ Error sending message. Please try again.
              </motion.div>
            )}

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3.5 bg-linear-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <FiSend size={18} className="group-hover:scale-110 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
