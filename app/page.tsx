import ScrollToTop from "@/components/ScrollToTop";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";

const sections = [
  { id: "hero", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "skills", component: <Skills /> },
  { id: "projects", component: <Projects /> },
  { id: "contact", component: <Contact /> },
] as const;

export default function Home() {
  return (
    <main className="portfolio-shell relative min-h-screen overflow-hidden text-slate-100">
      <div className="background-layers" aria-hidden="true">
        <div className="mesh-layer">
          <span />
          <span />
          <span />
        </div>
        <div className="spotlight-layer" />
        <div className="beam-layer" />
        <div className="noise-layer" />
        <div className="depth-layer" />
      </div>

      <Navbar />

      <div className="content-stack">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`section-frame reveal-up reveal-delay-${Math.min(index, 3)}`}
          >
            {section.component}
          </section>
        ))}
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
