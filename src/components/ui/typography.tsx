"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export function RevealText({ children, className, delay = 0, as: Component = "span" }: RevealTextProps) {
  // Split text into words for word-by-word animation
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <Component className={cn("inline-flex flex-wrap overflow-hidden", className)}>
      <motion.span variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="mr-[0.25em] inline-block">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Display({ children, className, as: Component = "h1" }: TypographyProps) {
  return (
    <Component className={cn("font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium leading-[1.1]", className)}>
      {children}
    </Component>
  );
}

export function Heading({ children, className, as: Component = "h2" }: TypographyProps) {
  return (
    <Component className={cn("font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.2]", className)}>
      {children}
    </Component>
  );
}

export function Eyebrow({ children, className, as: Component = "span" }: TypographyProps) {
  return (
    <Component className={cn("font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-muted-foreground", className)}>
      {children}
    </Component>
  );
}
