"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="text-lg font-heading font-medium tracking-wide hover:opacity-70 transition-opacity"
        >
          Matthew Mercado<span className="text-accent">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith("/work") && link.name === "Work") ||
                (pathname === "/contact" && link.name === "Contact");
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={`text-sm tracking-wide font-medium transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-2 border-white/10 hover:bg-white/5 font-medium"
          >
            <a href="/matthew-mercado-resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-2xl focus:outline-none z-50 relative"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: navbarOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {navbarOpen ? <FiX className="text-foreground" /> : <FiMenu className="text-foreground" />}
          </motion.div>
        </button>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center h-screen w-full"
          >
            <ul className="flex flex-col items-center space-y-8 text-center">
              {navLinks.map((link) => (
                <li key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setNavbarOpen(false)}
                      className="font-heading text-4xl font-medium tracking-tight"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
              <motion.li
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 bg-foreground text-background hover:bg-white/90"
                >
                  <a href="/matthew-mercado-resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
