import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sakshi Shinde — Data Analyst Portfolio" },
      { name: "description", content: "Data Analyst portfolio of Sakshi Shinde. Python, SQL, Power BI, Tableau dashboards and projects." },
    ],
  }),
});

function Index() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
