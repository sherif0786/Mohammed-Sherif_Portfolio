import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col font-sans select-text selection:bg-accent-green/20 selection:text-white">
      {/* Dynamic Animated Canvas Grid Background */}
      <BackgroundEffects />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1 w-full relative z-10 flex flex-col max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
