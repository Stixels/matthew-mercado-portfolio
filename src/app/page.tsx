import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
