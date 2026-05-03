import { motion } from "framer-motion";
import Section from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "Google Data Analytics Professional Certificate", issuer: "Coursera", year: "2024" },
  { title: "Data Analytics with AI", issuer: "QUASTECH", year: "2024" },
];

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title={<>Credentials & <span className="text-gradient">learning</span></>}>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-7 card-shadow flex gap-5 items-start"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/15 text-primary shrink-0">
              <Award size={26} />
            </div>
            <div>
              <h3 className="font-semibold leading-snug mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer} · {c.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
