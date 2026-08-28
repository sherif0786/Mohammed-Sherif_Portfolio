"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
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

const LinkedinIcon = ({ className }: { className?: string }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactOptions = [
    {
      icon: <Mail className="h-5 w-5 text-accent-green" />,
      label: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      actionText: "Send Mail",
      isCopyable: true,
    },
    {
      icon: <Phone className="h-5 w-5 text-accent-green" />,
      label: "Phone Contact",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
      actionText: "Call Direct",
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-accent-green" />,
      label: "GitHub Profile",
      value: "github.com/sherif0786",
      href: personalInfo.github,
      actionText: "View Profile",
      isExternal: true,
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-accent-green" />,
      label: "LinkedIn Connection",
      value: "mohammed-sherif-u-80190a2b5",
      href: personalInfo.linkedin,
      actionText: "Connect",
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 select-none">
          <span className="font-mono text-xs text-white tracking-widest font-bold block mb-3 px-3 py-1 rounded bg-white/10 border border-white/20 w-fit mx-auto uppercase hover-lift cursor-pointer">
            // 08 / REACH OUT
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase mb-4 font-orbitron">
            Let's Build Something Useful.
          </h2>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-mono">
            Get in touch to discuss internships, software roles, or database projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactOptions.map((opt) => (
            <motion.div
              key={opt.label}
              initial={{ opacity: 0, rotateY: 15, y: 60 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring" as const, stiffness: 80, damping: 15 }}
              className="p-5 rounded-xl border border-white/10 bg-zinc-900/90 shadow-md hover:shadow-xl hover:border-white/25 transition-all duration-300 hover-lift flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white">
                    {opt.icon}
                  </div>
                  {opt.isCopyable && (
                    <button
                      onClick={copyToClipboard}
                      className="p-2 rounded hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
                      title="Copy Email"
                    >
                      {copied ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4" />}
                    </button>
                  )}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                    {opt.label}
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide break-all block">
                    {opt.value}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <GlowButton
                  href={opt.href}
                  variant="primary"
                  className="w-full text-xs py-2 px-4 justify-center"
                  icon={opt.isExternal ? <ExternalLink className="h-3.5 w-3.5" /> : undefined}
                >
                  {copied && opt.isCopyable ? "Copied!" : opt.actionText}
                </GlowButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
