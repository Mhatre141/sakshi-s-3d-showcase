import { motion } from "framer-motion";
import Section from "./Section";
import { GraduationCap, BarChart3, Sparkles } from "lucide-react";

const cards = [
  { icon: BarChart3, title: "Data Visualization", text: "Power BI, Tableau, Excel dashboards that tell stories." },
  { icon: Sparkles, title: "Insightful Analysis", text: "Cleaning, transforming, and modeling data with Python & SQL." },
  { icon: GraduationCap, title: "Continuous Learner", text: "BSc Computer Science, Google Data Analytics certified." },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title={<>Turning <span className="text-gradient">data</span> into decisions</>}>
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-2xl p-8 card-shadow"
        >
          <h3 className="text-2xl font-bold mb-4">Hi, I'm Sakshi 👋</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Data Analyst with hands-on experience in data visualization, reporting,
            and dashboard development using Python, SQL, Excel, Power BI, and Tableau.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm passionate about transforming complex datasets into actionable insights
            for data-driven decision-making, paired with strong analytical thinking
            and a proactive learning mindset.
          </p>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-1">Education</p>
            <p className="font-medium">Bachelor of Computer Science</p>
            <p className="text-sm text-muted-foreground">ICLES' Motilal Jhunjhunwala College · 2022–2025</p>
          </div>
        </motion.div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 card-shadow group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/15 text-primary group-hover:scale-110 transition-transform">
                <c.icon size={22} />
              </div>
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 card-shadow sm:col-span-2 bg-gradient-to-br from-primary/10 to-secondary/10"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><p className="text-3xl font-bold text-gradient">3+</p><p className="text-xs text-muted-foreground mt-1">Projects</p></div>
              <div><p className="text-3xl font-bold text-gradient">10+</p><p className="text-xs text-muted-foreground mt-1">Tools</p></div>
              <div><p className="text-3xl font-bold text-gradient">2</p><p className="text-xs text-muted-foreground mt-1">Certifications</p></div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
