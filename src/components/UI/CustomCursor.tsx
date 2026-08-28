"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => setIsClicked(false), 150);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Click Ripple Flares */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          style={{ left: ripple.x - 20, top: ripple.y - 20 }}
          className="absolute w-10 h-10 rounded-full border-2 border-accent-green shadow-[0_0_15px_rgba(5,150,105,0.4)]"
        />
      ))}

      {/* Trailing Cyber Outer Ring */}
      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.6 : isClicked ? 0.8 : 1,
          borderColor: isHovered ? "#0284c7" : "#059669",
        }}
        transition={{ type: "spring" as const, stiffness: 450, damping: 28, mass: 0.5 }}
        className="fixed w-10 h-10 rounded-full border-2 border-accent-green/80 shadow-[0_0_12px_rgba(5,150,105,0.25)]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-accent-green" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-accent-green" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-accent-green" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-accent-green" />
      </motion.div>

      {/* Inner Glowing Cursor Core Dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#0284c7" : "#059669",
        }}
        transition={{ type: "spring" as const, stiffness: 800, damping: 35 }}
        className="fixed w-2 h-2 rounded-full shadow-[0_0_8px_rgba(5,150,105,0.6)]"
      />
    </div>
  );
}
