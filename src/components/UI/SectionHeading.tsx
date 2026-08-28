"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ number, title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className="mb-12 md:mb-16 select-none"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-xs md:text-sm text-accent-green font-bold tracking-widest px-3 py-1 rounded bg-accent-green/10 border border-accent-green/30 uppercase hover-lift cursor-pointer">
          // SYS_NODE_{number}
        </span>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-accent-green via-accent-cyan to-slate-200" />
      </div>

      <h2 className="text-3xl md:text-5xl font-black tracking-wider text-slate-900 uppercase font-orbitron">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl font-mono leading-relaxed">
          &gt; {subtitle}
        </p>
      )}
    </motion.div>
  );
}
