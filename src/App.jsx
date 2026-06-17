import { motion } from "framer-motion";
import { AboutSkills } from "./components/AboutSkills";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { Projects } from "./components/Projects";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["hero", "projects", "about"];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-screen overflow-hidden bg-abyss-950 text-mist">
      <NoiseOverlay />
      <Header activeId={activeSection} />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-28 px-6 pb-24 pt-28 lg:px-16 lg:pt-32"
      >
        <Hero />
        <Projects />
        <AboutSkills />
      </motion.main>
    </div>
  );
}
