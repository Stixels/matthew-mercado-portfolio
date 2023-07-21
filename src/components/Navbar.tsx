"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses =
    scroll || navbarOpen
      ? "fixed w-full z-30 shadow items-center flex flex-wrap p-3 bg-gray-900 transition-all duration-300"
      : "fixed w-full z-30 shadow items-center flex flex-wrap p-3 transition-all duration-300";

  const navbarItemClasses =
    "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 cursor-pointer border-b-2 border-transparent hover:border-blue-400 transition-colors";

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav
      className={navbarClasses}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <a
            className="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed"
            href="/"
          >
            Matthew Mercado
          </a>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {navbarOpen ? <FiX /> : <FiMenu />}{" "}
          </button>
        </div>
        <div
          className={
            "flex-grow items-center lg:flex lg:justify-end" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="navbar-info"
        >
          <ul className="flex w-full list-none flex-col items-end justify-end gap-4 space-y-2 rounded-lg p-3 lg:ml-auto lg:flex-row lg:items-center lg:space-y-0">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className={navbarItemClasses}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className={navbarItemClasses}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className={navbarItemClasses}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className={navbarItemClasses}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Button
                className="flex cursor-pointer items-center space-x-2 bg-blue-400 hover:bg-blue-300"
                asChild
              >
                <a
                  href="/matthew-mercado-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
