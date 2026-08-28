"use client";

import { projects } from "../data/portfolioData";
import SectionHeading from "./UI/SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectDiagram from "./ProjectDiagram";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="03"
          title="Practical Projects"
          subtitle="Enterprise-grade gateways and AI-powered screening systems built to resolve practical problems."
        />

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}>
              {/* If it's PRIJSM V5, render the interactive diagram inside the card */}
              {project.id === "prijsm" && <ProjectDiagram />}
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
