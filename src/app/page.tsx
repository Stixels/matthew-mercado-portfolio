import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex w-full max-w-5xl flex-col items-center">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
