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
      className="p-8 h-screen flex flex-col justify-center items-start max-w-5xl"
      id="home"
    >
      <motion.div
        className="text-sm md:text-md text-blue-400 font-bold"
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
        className="text-3xl md:text-6xl font-bold mt-2"
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
      <div className="text-xl md:text-6xl mt-2 md:mt-6 text-gray-300 font-bold h-10 md:h-16">
        <TypeAnimation sequence={strings} speed={40} repeat={Infinity} />
      </div>
      <div className="md:mt-10 mt-4 text-sm md:text-md text-gray-400 md:w-1/2">
        I specialize in designing and implementing beautiful and performant web
        applications. I am Manager and Web Developer at Escape This
        Frederick and owner of Escape Director.
      </div>
      <div className="flex flex-row gap-4 mt-10 md:mt-16">
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
            Learn More <AiOutlineArrowDown className="animate-bounce ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
