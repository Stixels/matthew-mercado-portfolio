"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eyebrow } from "@/components/ui/typography";

const stats = [
  {
    value: "97",
    unit: "",
    label: "Lighthouse Performance",
    sub: "Rebuilt from 52 — drove #1 local SEO and a 35% bounce rate drop.",
  },
  {
    value: "6,000",
    unit: "+",
    label: "Rooms Managed",
    sub: "Across operators on Escape Director — 99.99% uptime since launch.",
  },
  {
    value: "2×",
    unit: "",
    label: "Conversion Rate Lift",
    sub: "From 2.5% to 5% via streamlined booking flow and visual storytelling.",
  },
  {
    value: "#1",
    unit: "",
    label: "Local SEO Ranking",
    sub: "Statewide front page for targeted keywords — outranking established competitors.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="py-32 relative w-full border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl" ref={ref}>

        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow className="mb-6 block">Results</Eyebrow>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium max-w-2xl leading-tight">
              Not claims.<br className="hidden sm:block" /> Numbers from production.
            </h2>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed lg:text-right">
              Three products. Each one measured. Each one moved a metric that mattered.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-background p-8 lg:p-10 flex flex-col gap-4 hover:bg-white/[0.03] transition-colors duration-300"
            >
              {/* Number */}
              <div className="flex items-baseline gap-0.5">
                <span className="font-heading text-6xl lg:text-7xl font-medium tracking-tighter text-foreground group-hover:text-accent transition-colors duration-300">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-heading text-3xl font-medium text-foreground/60 group-hover:text-accent/60 transition-colors duration-300">
                    {stat.unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest font-medium text-foreground/70">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.sub}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
