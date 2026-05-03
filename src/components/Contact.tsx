import { motion } from "framer-motion";
import { useState } from "react";
import Section from "./Section";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:sakshishinde813@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="text-gradient">connect</span></>}>
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 card-shadow space-y-5"
        >
          <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
          <p className="text-muted-foreground text-sm">
            Open to data analyst roles, freelance dashboards, and collaborations.
          </p>
          <div className="space-y-4 pt-4">
            <a href="mailto:sakshishinde813@gmail.com" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-primary group-hover:scale-110 transition">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">sakshishinde813@gmail.com</p>
              </div>
            </a>
            <a href="tel:9967246429" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-primary group-hover:scale-110 transition">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">+91 99672 46429</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-primary group-hover:scale-110 transition">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium">linkedin.com/in/sakshi-shinde</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-primary group-hover:scale-110 transition">
                <Github size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm font-medium">github.com/sakshi-shinde</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 card-shadow space-y-4"
        >
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Your name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none transition text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow-shadow"
          >
            {sent ? "Opening mail…" : "Send message"} <Send size={16} />
          </button>
        </motion.form>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-16">
        © {new Date().getFullYear()} Sakshi Shinde · Built with React, Three.js & Framer Motion
      </p>
    </Section>
  );
}
