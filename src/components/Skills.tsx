import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  { title: "Programming & Databases", items: [{ n: "Python", v: 90 }, { n: "SQL", v: 88 }, { n: "MySQL", v: 85 }] },
  { title: "Data Analysis", items: [{ n: "Data Cleaning", v: 92 }, { n: "Transformation", v: 88 }, { n: "EDA", v: 85 }] },
  { title: "Libraries", items: [{ n: "Pandas", v: 90 }, { n: "NumPy", v: 85 }, { n: "Matplotlib / Seaborn", v: 82 }] },
  { title: "Visualization", items: [{ n: "Power BI", v: 90 }, { n: "Tableau", v: 85 }, { n: "Excel", v: 92 }] },
  { title: "Tools", items: [{ n: "VS Code", v: 90 }, { n: "Jupyter", v: 88 }, { n: "MS Office Suite", v: 92 }] },
  { title: "Concepts", items: [{ n: "Data Modeling", v: 85 }, { n: "Dashboarding", v: 90 }, { n: "KPI Tracking", v: 88 }] },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>My <span className="text-gradient">toolkit</span></>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6 card-shadow"
          >
            <h4 className="font-semibold mb-5 text-foreground">{g.title}</h4>
            <div className="space-y-4">
              {g.items.map((it, i) => (
                <div key={it.n}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{it.n}</span>
                    <span className="text-primary font-medium">{it.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: gi * 0.05 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-hero)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
