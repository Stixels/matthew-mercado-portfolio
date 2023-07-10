import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-5xl">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
