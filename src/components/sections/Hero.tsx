"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const animationDuration = 0.5;

  const strings = [
    1500,
    "I am a full-stack developer.",
    1000,
    "I am a software engineer.",
    1000,
    "I am a web developer.",
    1000,
    "I am a nerd (and proud of it).",
    1000,
    "I am a uhhh...",
    500,
    "I am a uhhh... a gamer.",
  ];

  return (
    <div
      className="flex h-screen max-w-5xl flex-col items-start justify-center p-8"
      id="home"
    >
      <motion.div
        className="md:text-md text-sm font-bold text-blue-400"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: animationDuration,
          delay: animationDuration,
        }}
      >
        Hi, my name is
      </motion.div>
      <motion.h1
        className="mt-2 text-3xl font-bold md:text-6xl"
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          duration: animationDuration,
        }}
      >
        Matthew Mercado
      </motion.h1>
      <div className="mt-2 h-10 text-xl font-bold text-gray-300 md:mt-6 md:h-16 md:text-6xl">
        <TypeAnimation sequence={strings} speed={40} repeat={Infinity} />
      </div>
      <div className="md:text-md mt-4 text-sm text-gray-400 md:mt-10 md:w-1/2">
        I specialize in designing and implementing beautiful and performant web
        applications. I am a Manager and Web Developer at Escape This Frederick
        and owner of Escape Director.
      </div>
      <div className="mt-10 flex flex-row gap-4 md:mt-16">
        <Button asChild className="bg-blue-400">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact Me
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Learn More <AiOutlineArrowDown className="ml-2 animate-bounce" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
