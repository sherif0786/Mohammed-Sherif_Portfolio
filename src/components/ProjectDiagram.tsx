"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, AlertTriangle, ShieldAlert, Cpu } from "lucide-react";

const flowSteps = [
  { id: 1, name: "Inspector", desc: "Warehouse Inspector triggers requests" },
  { id: 2, name: "Frontend", desc: "React & TypeScript interface UI" },
  { id: 3, name: "API Gateway", desc: "Node.js & Express Gateways" },
  { id: 4, name: "Database & AI", desc: "Gemini AI evaluates Firestore records" },
  { id: 5, name: "Decision Engine", desc: "Gatekeeper resolves logic flows" },
  { id: 6, name: "Audit Email", desc: "Nodemailer fires SMTP security audit logs" },
];

export default function ProjectDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [simulatedScore, setSimulatedScore] = useState<number>(45);

  const getSimulatedOutcome = (score: number) => {
    if (score < 30) {
      return {
        label: "SAFE",
        desc: "Auto-refund approved",
        color: "text-emerald-700 border-emerald-300 bg-emerald-50",
        icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      };
    } else if (score <= 70) {
      return {
        label: "WARNING",
        desc: "Hold for warehouse inspection",
        color: "text-amber-700 border-amber-300 bg-amber-50",
        icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      };
    } else {
      return {
        label: "FRAUD ALERT",
        desc: "Payout blocked and account flagged",
        color: "text-red-700 border-red-300 bg-red-50",
        icon: <ShieldAlert className="h-5 w-5 text-red-600" />,
      };
    }
  };

  const outcome = getSimulatedOutcome(simulatedScore);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-bold flex items-center gap-1.5">
            <Cpu className="h-4 w-4" />
            PRIJSM V5 Architecture & Flow
          </h4>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5">
            Interactive pipeline flow. Click nodes to inspect.
          </p>
        </div>
        
        <div className="text-[10px] font-mono text-accent-cyan font-bold px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/30">
          GATEKEEPER STATE: ONLINE
        </div>
      </div>

      {/* SVG Pipeline Flow */}
      <div className="relative py-4 overflow-x-auto select-none no-scrollbar">
        <div className="flex items-center gap-2 min-w-[650px] justify-between relative px-2">
          
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200 -translate-y-1/2 -z-10" />

          {flowSteps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1 last:flex-initial">
              <button
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg border text-center transition-all duration-300 w-24 relative z-10 hover-lift ${
                  activeStep === step.id
                    ? "bg-accent-cyan/10 border-accent-cyan text-slate-900 shadow-md font-bold"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:border-accent-cyan"
                }`}
              >
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center font-mono text-xs border border-slate-300 font-bold">
                  {step.id}
                </div>
                <span className="font-mono text-[10px] font-bold tracking-tight truncate w-full">
                  {step.name}
                </span>
              </button>

              {index < flowSteps.length - 1 && (
                <div className="flex justify-center items-center flex-1 text-accent-cyan">
                  <ArrowRight className="h-4 w-4 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Detail Explanation Panel */}
      {activeStep !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 rounded-lg bg-zinc-900/90 border border-white/10 font-mono text-xs text-white"
        >
          <span className="text-white font-bold uppercase tracking-wider block mb-1">
            // STAGE {activeStep}: {flowSteps[activeStep - 1].name}
          </span>
          <p className="leading-relaxed text-zinc-200">
            {flowSteps[activeStep - 1].desc}. 
            {activeStep === 1 && " Triggered dynamically in response to inspection queues."}
            {activeStep === 2 && " Designed using React 19, TypeScript, Tailwind CSS, and Framer Motion."}
            {activeStep === 3 && " Processes inbound payloads securely, executing gateway checks."}
            {activeStep === 4 && " Gemini evaluates user flags, transaction logs, and logs profiles."}
            {activeStep === 5 && " Logic routes approvals or flags to database states."}
            {activeStep === 6 && " Reports are generated and dispatched as emails to supervisors."}
          </p>
        </motion.div>
      )}

      {/* Interactive Risk Outcome Simulator */}
      <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h5 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold mb-2">
            PRIJSM Risk Engine Simulator
          </h5>
          <p className="text-[11px] text-slate-600 leading-relaxed font-mono">
            Drag the slider to adjust the customer's calculated return risk score. See how the Gatekeeper converts the risk score to an operation outcome.
          </p>
          
          <div className="mt-4 flex items-center gap-3">
            <span className="font-mono text-xs text-slate-600 font-bold">0%</span>
            <input
              type="range"
              min="0"
              max="100"
              value={simulatedScore}
              onChange={(e) => setSimulatedScore(Number(e.target.value))}
              className="flex-1 h-1.5 rounded-lg bg-slate-200 appearance-none cursor-pointer accent-accent-cyan"
            />
            <span className="font-mono text-xs text-slate-600 font-bold">100%</span>
          </div>
        </div>

        {/* Dynamic Simulator Output Panel */}
        <div className={`p-4 rounded-lg border transition-all duration-300 shadow-sm ${outcome.color}`}>
          <div className="flex items-center gap-3 mb-2">
            {outcome.icon}
            <div>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                Decision Outcomes
              </span>
              <span className="text-sm font-bold tracking-wider">
                {outcome.label} ({simulatedScore}%)
              </span>
            </div>
          </div>
          <p className="font-mono text-xs opacity-90 leading-relaxed">
            Status: {outcome.desc}.
          </p>
        </div>
      </div>
    </div>
  );
}
