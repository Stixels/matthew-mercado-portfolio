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
    "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 cursor-pointer";

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className={navbarClasses}>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="/"
          >
            Matthew Mercado
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <FiX /> : <FiMenu />}{" "}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center lg:justify-end" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="navbar-info"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto space-y-2 lg:space-y-0 lg:items-center gap-4">
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
                className="bg-blue-400 hover:bg-blue-300 flex items-center space-x-2 cursor-pointer"
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
