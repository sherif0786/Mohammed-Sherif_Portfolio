"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "../data/portfolioData";
import GlowButton from "./UI/GlowButton";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  children?: React.ReactNode;
}

export default function ProjectCard({ project, children }: ProjectCardProps) {
  const isPrijsm = project.id === "prijsm";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring" as const, stiffness: 60, damping: 15 }}
      className={`relative group rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift ${
        isPrijsm
          ? "hover:border-accent-cyan/40"
          : "hover:border-accent-green/40"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Project Details Column */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          
          {/* Card Header (Number + Title) */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`font-mono text-sm font-bold ${isPrijsm ? "text-accent-cyan" : "text-accent-green"}`}>
                // PROJECT {project.number}
              </span>
              <span className="text-slate-300 text-xs font-mono">|</span>
              <span className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                INTERNAL ID: {project.id.toUpperCase()}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug font-orbitron">
              {project.name}
            </h3>
            {project.fullName && (
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                {project.fullName}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
            {project.description}
          </p>

          {/* highlights */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">
              Key Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-sans">
                  <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                    isPrijsm ? "bg-accent-cyan" : "bg-accent-green"
                  }`} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Tags Stack */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">
              Deployment & Integrated Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-800 font-bold transition-colors duration-200 ${
                    isPrijsm
                      ? "hover:border-accent-cyan hover:text-accent-cyan"
                      : "hover:border-accent-green hover:text-accent-green"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Link Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <GlowButton
              variant="disabled"
              icon={<GithubIcon className="h-4 w-4" />}
              ariaLabel="GitHub Repository Unavailable"
            >
              GitHub (Not Available)
            </GlowButton>
            
            <GlowButton
              variant="disabled"
              icon={<ExternalLink className="h-4 w-4" />}
              ariaLabel="Live Demo URL Unavailable"
            >
              Live Demo (Not Available)
            </GlowButton>
          </div>
        </div>

        {/* Project Visual Column (Dashboard Image) */}
        <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-lg border border-slate-200 bg-slate-900 overflow-hidden select-none group/img shadow-xl">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 relative z-10">
            <span className="font-mono text-[10px] text-slate-300 font-bold">
              GUI_WINDOW.SYS // {project.name.toUpperCase()}
            </span>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-green" />
            </div>
          </div>

          {project.image ? (
            <div className="relative w-full h-[calc(100%-32px)] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              />
            </div>
          ) : (
            <div className="p-4 h-full flex flex-col justify-between font-mono text-[10px] text-white">
              <div className="text-[9px] text-slate-400 mt-auto border-t border-slate-800 pt-2">
                [VISUAL PLACEHOLDER - NO SCREENSHOT ATTACHED]
              </div>
            </div>
          )}
        </div>

      </div>

      {children}
    </motion.div>
  );
}
