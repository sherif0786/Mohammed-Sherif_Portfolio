"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "disabled" | "accent";
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
  download?: boolean | string;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  ariaLabel,
  download,
}: GlowButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-orbitron text-xs uppercase tracking-wider rounded-md font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 select-none interactive cursor-pointer hover-lift shadow-sm";

  const variants = {
    primary:
      "bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 hover:shadow-lg",
    accent:
      "bg-zinc-100 border border-zinc-100 text-black hover:bg-zinc-200 hover:border-zinc-200 hover:shadow-lg",
    secondary:
      "bg-transparent border border-zinc-800 text-zinc-300 hover:border-white hover:text-white hover:shadow-md",
    disabled:
      "bg-zinc-950 border border-zinc-800 border-dashed text-zinc-600 cursor-not-allowed select-none opacity-80",
  };

  const selectedStyle = variants[variant];
  const combinedClassName = `${baseStyles} ${selectedStyle} ${className}`;

  const renderContent = () => (
    <>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (variant === "disabled") {
    return (
      <button disabled aria-label={ariaLabel} className={combinedClassName}>
        {renderContent()}
      </button>
    );
  }

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 500, damping: 25 },
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto");
    const isFile = href.endsWith(".pdf") || Boolean(download);
    if (isExternal || isFile) {
      return (
        <motion.a
          {...motionProps}
          href={href}
          download={download ? (typeof download === "string" ? download : true) : undefined}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          aria-label={ariaLabel}
          className={combinedClassName}
        >
          {renderContent()}
        </motion.a>
      );
    }

    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} aria-label={ariaLabel} className={combinedClassName}>
          {renderContent()}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClassName}
    >
      {renderContent()}
    </motion.button>
  );
}
