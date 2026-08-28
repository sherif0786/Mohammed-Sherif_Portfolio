"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const particleCount = Math.min(65, Math.floor((window.innerWidth * window.innerHeight) / 25000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = ["rgba(255, 255, 255, ", "rgba(161, 161, 170, ", "rgba(113, 113, 122, "];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.8 + 0.5,
        color: colors[i % colors.length],
      });
    }

    const drawConnections = () => {
      const maxDistance = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.fillStyle = `${p.color}0.3)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        if (!isReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      mediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Dark Theme Dynamic Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30 z-10" />

      {/* Expanded Full-Portfolio Unique Futuristic Tech Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none z-0 animate-live-bg"
        style={{ backgroundImage: `url('/images/bg_dark_unique.jpg')` }}
      />

      {/* Section 1: Hero Ambient Aura */}
      <div className="absolute top-[-5%] left-1/3 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(161,161,170,0.02)_50%,transparent_100%)] blur-[100px]" />
      
      {/* Section 2: About Me Backdrop Aura */}
      <div className="absolute top-[18%] left-10 w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(161,161,170,0.03)_0%,transparent_70%)] blur-[120px]" />

      {/* Section 3: Skills Inventory Matrix Glow */}
      <div className="absolute top-[32%] right-10 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(113,113,122,0.03)_0%,rgba(255,255,255,0.02)_60%,transparent_100%)] blur-[130px]" />

      {/* Section 4: Projects Data Grid Aura */}
      <div className="absolute top-[50%] left-1/4 w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(161,161,170,0.02)_70%,transparent_100%)] blur-[140px]" />

      {/* Section 5: Experience Timeline Relay Aura */}
      <div className="absolute top-[68%] right-5 w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(113,113,122,0.03)_0%,transparent_70%)] blur-[120px]" />

      {/* Section 6: Education & Credentials Vault Aura */}
      <div className="absolute top-[82%] left-10 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(161,161,170,0.03)_0%,transparent_70%)] blur-[110px]" />

      {/* Section 7: Contact & Footer Aura */}
      <div className="absolute bottom-0 left-1/3 w-[60vw] h-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] blur-[100px]" />

      {/* Dark Theme Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_70%,transparent_100%)] opacity-80" />
    </div>
  );
}
