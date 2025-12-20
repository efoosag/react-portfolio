import { useEffect } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";

export default function MainPage() {
  useEffect(() => {
    ScrollReveal().reveal(".section", {
      duration: 800,
      distance: "20px",
      easing: "ease-out",
      origin: "bottom",
      interval: 200,
    });
  }, []);
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
