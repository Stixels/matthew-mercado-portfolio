"use client";
import React from "react";
import { motion } from "framer-motion";
import { Display, Eyebrow, RevealText } from "@/components/ui/typography";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-20">

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Abstract background lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Matthew Mercado &mdash; Full-Stack Engineer & Founder</Eyebrow>
        </motion.div>

        <div className="max-w-5xl">
          <Display className="mb-8">
            <RevealText delay={1}>
              I build full-stack products with measurable outcomes.
            </RevealText>
          </Display>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-start gap-4 pt-4"
        >
          <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-white/90 px-8 h-14 text-md font-medium">
            <Link href="/#work">View Case Studies</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 hover:bg-white/5 px-8 h-14 text-md font-medium group">
            <Link href="/about">
              My Approach
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
            </Link>
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 hidden sm:flex items-center gap-4 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll to explore</span>
        <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full w-full bg-white/60"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
