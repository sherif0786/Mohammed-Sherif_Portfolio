"use client";

import { motion } from "framer-motion";
import { aboutContent, personalInfo } from "../data/portfolioData";
import SectionHeading from "./UI/SectionHeading";
import { User, MapPin, GraduationCap, Target } from "lucide-react";

export default function About() {
  const leftColVariants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  const rightColVariants = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.15 },
    },
  };

  const infoDetails = [
    {
      icon: <User className="h-5 w-5 text-accent-green" />,
      label: "Current Status",
      value: "CSE Student / Aspiring Developer",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-accent-green" />,
      label: "Education",
      value: "V.S.B College of Engineering Technical Campus",
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent-green" />,
      label: "Location",
      value: personalInfo.location,
    },
    {
      icon: <Target className="h-5 w-5 text-accent-green" />,
      label: "Core Focus",
      value: "Web Dev, Database Systems & Practical AI",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading number="01" title={aboutContent.heading} subtitle="A brief overview of my engineering background and goals." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* About Text Column */}
          <motion.div
            variants={leftColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-slate-800 leading-relaxed font-sans font-medium">
              {aboutContent.paragraph}
            </p>
            <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent my-6" />
            <div className="font-mono text-xs text-slate-500 font-bold">
              // PREPARING FOR ENTRY-LEVEL SOFTWARE DEVELOPMENT ROLES
            </div>
          </motion.div>

          {/* Quick Details Card Column */}
          <motion.div
            variants={rightColVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl hover:border-accent-green/40 transition-all duration-300 hover-lift">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent-green font-bold mb-6 pb-3 border-b border-slate-100">
                // Profile Specifications
              </h3>
              <div className="space-y-6">
                {infoDetails.map((detail, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 mt-0.5">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
                        {detail.label}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
