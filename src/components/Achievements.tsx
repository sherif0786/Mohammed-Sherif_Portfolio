"use client";

import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";
import SectionHeading from "./UI/SectionHeading";
import { Trophy, Users, Calendar } from "lucide-react";

export default function Achievements() {
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
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="07"
          title="Achievements"
          subtitle="Engineering milestones and competition highlights."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-accent-green/40 transition-all duration-300 relative group overflow-hidden hover-lift"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Visual badge */}
                <div className="p-4 rounded-xl bg-accent-green/10 text-accent-green border border-accent-green/30 shadow-sm">
                  <Trophy className="h-8 w-8" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-accent-green font-bold bg-accent-green/10 border border-accent-green/30 px-3 py-1 rounded">
                      HACKATHON MILESTONE
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500 font-bold">
                      <Calendar className="h-3.5 w-3.5 text-accent-green" />
                      {ach.date}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight font-orbitron">
                    {ach.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
                    {ach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
