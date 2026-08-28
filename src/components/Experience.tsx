"use client";

import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import SectionHeading from "./UI/SectionHeading";
import { Briefcase, Calendar, CheckSquare, Database, Layout } from "lucide-react";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="04"
          title="Practical Experience"
          subtitle="Real-world internship exposure in web application development and database queries."
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Connecting line timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-green via-accent-cyan to-slate-200 -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isSql = exp.role.toLowerCase().includes("sql") || exp.role.toLowerCase().includes("database");
              const imgUrl = isSql ? "/images/exp_sql_database.jpg" : "/images/exp_web_dev.jpg";

              return (
                <div
                  key={exp.role}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node dot indicator */}
                  <div className="absolute left-4 md:left-1/2 h-5 w-5 rounded-full bg-white border-2 border-accent-green -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_12px_rgba(5,150,105,0.4)]">
                    <span className="h-2 w-2 rounded-full bg-accent-green animate-ping" />
                  </div>

                  {/* Timeline Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-accent-green/40 transition-all duration-300 hover-lift">
                      
                      {/* Card Header (Role details) */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 tracking-wide font-orbitron">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs text-accent-green font-bold bg-accent-green/10 border border-accent-green/30 px-2.5 py-1 rounded">
                          INTERNSHIP
                        </span>
                      </div>

                      {/* Company & Date */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 font-mono mb-5">
                        <span className="flex items-center gap-1.5 font-bold text-slate-800">
                          <Briefcase className="h-4 w-4 text-accent-green" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-accent-cyan font-bold">
                          <Calendar className="h-4 w-4 text-accent-cyan" />
                          {exp.date}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {exp.highlights.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed font-sans font-medium">
                            <CheckSquare className="h-4 w-4 text-accent-green mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Opposite Column: Dedicated Internship Showcase Image */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mt-6 md:mt-0"
                  >
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 group/img overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-zinc-900/90 border-b border-white/10 rounded">
                        <span className="font-mono text-[10px] text-white font-bold flex items-center gap-1.5">
                          {isSql ? <Database className="h-3.5 w-3.5 text-accent-cyan" /> : <Layout className="h-3.5 w-3.5 text-white" />}
                          {exp.role.toUpperCase()} // WORKSPACE
                        </span>
                        <span className="font-mono text-[9px] text-zinc-400">TAMIZHAN SKILLS</span>
                      </div>
                      
                      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-slate-100">
                        <img
                          src={imgUrl}
                          alt={exp.role}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
