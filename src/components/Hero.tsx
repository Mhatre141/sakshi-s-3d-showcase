import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-4">
            Sakshi <span className="text-gradient">Shinde</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-display">
            Data Analyst
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Transforming complex datasets into actionable insights with Python, SQL,
            Power BI, and Tableau. Building dashboards that drive decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-shadow"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:border-primary transition"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[400px] md:h-[520px] w-full"
        >
          <Hero3D />
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
