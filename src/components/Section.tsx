import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-3">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
