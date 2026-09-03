"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, ShieldCheck, Zap, Download } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import GlowButton from "./UI/GlowButton";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full"
      >
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Light Glass Status Pill */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-accent-green/40 shadow-sm interactive hover-lift cursor-pointer"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-accent-green animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-green font-bold flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-accent-cyan" />
              Building intelligent software solutions...
            </span>
          </motion.div>

          {/* Subtitle Positioning */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-green uppercase font-bold mb-3 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 bg-accent-cyan rounded-full" />
            Computer Science Engineering Student
          </motion.p>

          {/* Large Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 mb-6 uppercase leading-none font-orbitron drop-shadow-sm"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Positioning Description */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-accent-gradient mb-6 uppercase tracking-wider font-orbitron"
          >
            & Aspiring Software Developer
          </motion.h2>

          {/* Hero Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-600 max-w-xl mb-10 leading-relaxed font-mono"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs Button Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center"
          >
            <GlowButton href="#projects" variant="accent" icon={<ArrowRight className="h-4 w-4" />}>
              View Projects
            </GlowButton>
            
            <GlowButton href="#contact" variant="secondary">
              Contact Me
            </GlowButton>
            
            {/* Download Resume Button */}
            <GlowButton
              href="/Mohammed_Sherif_Resume.pdf"
              download="Mohammed_Sherif_Resume.pdf"
              variant="primary"
              ariaLabel="Download Mohammed Sherif Resume"
              icon={<Download className="h-4 w-4" />}
            >
              Download Resume
            </GlowButton>
          </motion.div>
        </div>

        {/* Hero Right Visual Column */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Original Full-Size Portrait Card */}
          <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover-lift animate-float bg-zinc-950/80">
            <img
              src="/images/profile_headshot.jpg"
              alt="Mohammed Sherif U Portrait"
              className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-500"
            />
            
            {/* Ambient vignette to blend edge borders */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 pointer-events-none mix-blend-multiply" />
            
            {/* Grid overlay matching portfolio */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.08] pointer-events-none mix-blend-screen"
              style={{ backgroundImage: `url('/images/bg_professional_monochrome.jpg')` }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
