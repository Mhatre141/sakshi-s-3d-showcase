import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import { Database, Activity, BarChart2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "Online Voting System",
    tech: ["MySQL", "SQL"],
    desc: "Database-driven voting platform managing elections, voters & candidates with JOINs, GROUP BY, Triggers, and Stored Procedures to prevent duplicate voting.",
    color: "from-cyan-400/20 to-blue-500/20",
  },
  {
    icon: Activity,
    title: "Fit-Track System",
    tech: ["Python", "OOP"],
    desc: "BMI calculator with personalized diet & workout plans, allergy filtering, automated reports, notifications, and membership/payment handling.",
    color: "from-fuchsia-400/20 to-purple-500/20",
  },
  {
    icon: BarChart2,
    title: "Breast Cancer Dashboard",
    tech: ["Power BI"],
    desc: "Interactive Power BI dashboard analyzing 248 patient records — visualizing survival trends and metastasis impact to highlight early detection insights.",
    color: "from-violet-400/20 to-cyan-500/20",
  },
];

function TiltCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useTransform(y, [-50, 50], [8, -8]);
  const rY = useTransform(x, [-50, 50], [-8, 8]);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group glass rounded-2xl p-7 card-shadow relative overflow-hidden cursor-pointer"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${p.color}`} />
      <div className="relative" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-start justify-between mb-5">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/15 text-primary">
            <p.icon size={26} />
          </div>
          <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" size={22} />
        </div>
        <h3 className="text-xl font-bold mb-2">{p.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title={<>Featured <span className="text-gradient">work</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
        {projects.map((p, i) => <TiltCard key={p.title} p={p} i={i} />)}
      </div>
    </Section>
  );
}
