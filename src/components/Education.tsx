"use client";

import { motion } from "framer-motion";
import { educationList } from "../data/portfolioData";
import SectionHeading from "./UI/SectionHeading";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="05"
          title="Education"
          subtitle="Academic credentials and performance benchmarks in Computer Science Engineering."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationList.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="p-6 rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-accent-green/40 transition-all duration-300 hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-accent-green">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  
                  {/* Date Badge */}
                  <span className="flex items-center gap-1 font-mono text-xs text-slate-600 font-bold bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                    <Calendar className="h-3.5 w-3.5 text-accent-green" />
                    {edu.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-orbitron mb-2">
                  {edu.degree}
                </h3>
                
                <p className="text-sm font-semibold text-slate-700 font-sans mb-4">
                  {edu.institution}
                </p>
              </div>

              {/* Score Metric Highlight */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 font-bold flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-accent-green" />
                  {edu.scoreLabel}
                </span>
                <span className="font-mono text-base font-extrabold text-accent-green bg-accent-green/10 border border-accent-green/30 px-3 py-1 rounded">
                  {edu.scoreValue}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
