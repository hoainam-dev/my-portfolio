import ScrollToTop from "@/components/ScrollToTop";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
