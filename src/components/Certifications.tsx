"use client";

import { motion } from "framer-motion";
import { certifications } from "../data/portfolioData";
import SectionHeading from "./UI/SectionHeading";
import { Award, ShieldCheck } from "lucide-react";

export default function Certifications() {
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
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="06"
          title="Certifications"
          subtitle="Professional credentials and academic accomplishments."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="p-6 rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-accent-green/40 transition-all duration-300 hover-lift flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-accent-green mt-1">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-green font-bold block">
                  Verified Credential
                </span>
                <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-wide leading-snug font-orbitron">
                  {cert.name}
                </h3>
                <div className="pt-2 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <ShieldCheck className="h-4 w-4 text-accent-green" />
                  <span>Credential Record Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
