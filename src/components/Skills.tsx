"use client";

import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";
import SectionHeading from "./UI/SectionHeading";
import { Check, ShieldAlert } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateX: 25, y: 40 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const resumeSkills = skillCategories.filter((cat) => !cat.isPrijsmSpecific);
  const prijsmSkills = skillCategories.find((cat) => cat.isPrijsmSpecific);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="02"
          title="Skills Inventory"
          subtitle="A comprehensive index of core capabilities and specialized project-applied stacks."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Resume / Core Profile Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {resumeSkills.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="p-5 rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-accent-green/40 transition-all duration-300 hover-lift flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent-green font-bold mb-4 pb-2 border-b border-slate-100">
                    // {category.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-800 font-semibold">
                        <Check className="h-4 w-4 text-accent-green flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>USAGE: ACADEMIC / LABS</span>
                  <span className="text-accent-green font-bold">VERIFIED</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* PRIJSM Project Specific Technologies */}
          {prijsmSkills && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="lg:col-span-5"
            >
              <div className="relative p-6 rounded-xl border border-accent-cyan/30 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
                  <div className="p-2 rounded bg-accent-cyan/10 text-accent-cyan">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-bold">
                      Project-Specific Stack
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Applied System Integration in PRIJSM V5
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-6 font-mono leading-relaxed">
                  These technologies were utilized specifically during the engineering, database modeling, and SDK integration phases of the <span className="text-accent-cyan font-bold">PRIJSM return fraud detection engine</span>.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {prijsmSkills.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 rounded bg-slate-50 border border-slate-200 hover:border-accent-cyan hover:bg-slate-100 transition-all duration-200 text-xs font-mono text-slate-800 font-bold flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>PROJECT ENVIRONMENT</span>
                  <span className="text-accent-cyan font-bold">INTEGRATED</span>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
