"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Eyebrow } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: "escape-director",
    title: "Escape Director",
    role: "Founder & Lead Engineer",
    description: "The most intuitive gamemaster dashboard in the escape room industry — paired with deep analytics that let operators make data-driven decisions on room design and staff performance.",
    metrics: ["6,000+ Rooms Managed", "99.99% Uptime", "Offline-First PWA"],
    href: "/work/escape-director",
    image: "/screenshots/staging-escapedirector-com.png",
  },
  {
    id: "escape-this-frederick",
    title: "Escape This Frederick",
    role: "Web Developer & Product Lead",
    description: "A complete digital overhaul that drove Lighthouse performance from 52 to 97, doubled the conversion rate, and secured the #1 local SEO position statewide.",
    metrics: ["Lighthouse 97", "+100% Conversion", "−35% Bounce Rate"],
    href: "/work/escape-this-frederick",
    image: "/screenshots/escapethisfrederick-com.png",
  },
  {
    id: "lvlupvr",
    title: "Level Up VR",
    role: "Designer & Frontend Engineer",
    description: "Designed and built from the ground up — a fully responsive, conversion-optimized web presence that claimed the #1 local SEO rank for VR, beating out mature established venues.",
    metrics: ["#1 VR in Frederick", "Ground-Up Design", "Resova Integration"],
    href: "/work/lvlupvr",
    image: "/screenshots/lvlupvr-home.png",
  },
];

const metricPill = "px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-tight text-foreground/80";

// Full-width featured card for the flagship project
const FeaturedCard = ({ project }: { project: typeof featuredProjects[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Image card */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        style={{ aspectRatio: "16/9" }}
      >
        <motion.div style={{ y }} className="absolute inset-0 scale-[1.07]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Gradient overlay — heavier at bottom so desktop text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-transparent" />

        {/* Ghost index */}
        <span className="absolute top-6 right-8 font-heading text-[9rem] font-medium leading-none text-white/[0.05] select-none pointer-events-none tabular-nums hidden sm:block">
          01
        </span>

        {/* Desktop content — inside image, anchored to bottom */}
        <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-10 items-end justify-between gap-8 z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent/60 tracking-widest">01</span>
              <Eyebrow>{project.role}</Eyebrow>
            </div>
            <h3 className="font-heading text-5xl xl:text-6xl tracking-tight font-medium leading-tight">
              {project.title}
            </h3>
            <p className="text-foreground/75 text-lg leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.metrics.map(m => <span key={m} className={metricPill}>{m}</span>)}
            </div>
          </div>
          <div className="shrink-0 pb-1">
            <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-white/90 px-8 h-14">
              <Link href={project.href}>Read Case Study &rarr;</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile content — below the image */}
      <div className="lg:hidden pt-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-accent/60 tracking-widest">01</span>
          <Eyebrow>{project.role}</Eyebrow>
        </div>
        <h3 className="font-heading text-3xl md:text-4xl tracking-tight font-medium">{project.title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.metrics.map(m => <span key={m} className={metricPill}>{m}</span>)}
        </div>
        <div className="pt-2">
          <Button asChild variant="outline" className="rounded-full bg-transparent border-white/20 hover:bg-white/10 px-8 h-12">
            <Link href={project.href}>Read Case Study &rarr;</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// Compact grid card for secondary projects
const GridCard = ({ project, index }: { project: typeof featuredProjects[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const indexLabel = String(index + 2).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 mb-6"
        style={{ aspectRatio: "4/3" }}
      >
        <motion.div style={{ y }} className="absolute inset-0 scale-[1.07]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        {/* Ghost index */}
        <span className="absolute top-4 right-5 font-heading text-7xl font-medium leading-none text-white/[0.05] select-none pointer-events-none tabular-nums">
          {indexLabel}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-accent/60 tracking-widest">{indexLabel}</span>
          <Eyebrow>{project.role}</Eyebrow>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl tracking-tight font-medium">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.metrics.map(m => <span key={m} className={metricPill}>{m}</span>)}
        </div>
        <div className="pt-3">
          <Button asChild variant="outline" className="rounded-full bg-transparent border-white/20 hover:bg-white/10 px-6 h-11 text-sm">
            <Link href={project.href}>Read Case Study &rarr;</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const featured = featuredProjects[0];
  const rest = featuredProjects.slice(1);

  return (
    <section id="work" className="py-32 relative border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">

        {/* Section header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <Eyebrow className="mb-4 block">Proof of Work</Eyebrow>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-tight">
              Three products.<br className="hidden sm:block" /> Real results.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm leading-relaxed lg:text-right lg:pb-2">
            Each built from the ground up — architecture, interface, and the metric it moved.
          </p>
        </div>

        {/* Featured project */}
        <FeaturedCard project={featured} />

        {/* Divider */}
        <div className="my-16 border-t border-white/5" />

        {/* Grid projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {rest.map((project, index) => (
            <GridCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
