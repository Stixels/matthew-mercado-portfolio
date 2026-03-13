import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
