"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Display, Heading, Eyebrow } from "@/components/ui/typography";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CaseStudyLayoutProps {
  title: string;
  role: string;
  hook: string;
  keyInsight?: string;
  metrics: { label: string; value: string }[];
  context: React.ReactNode;
  solution: React.ReactNode;
  gallery: React.ReactNode;
  nextProject: { title: string; href: string; image?: string };
}

function MetricItem({ metric, index }: { metric: { label: string; value: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group py-10 sm:px-10 first:sm:pl-0 last:sm:pr-0"
    >
      <Eyebrow className="block mb-5 text-white/40">{metric.label}</Eyebrow>
      <div
        className="font-heading font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-300 whitespace-nowrap"
        style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)", lineHeight: 1 }}
      >
        {metric.value}
      </div>
    </motion.div>
  );
}

export default function CaseStudyLayout({
  title,
  role,
  hook,
  keyInsight,
  metrics,
  context,
  solution,
  gallery,
  nextProject,
}: CaseStudyLayoutProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative w-full h-[88vh] min-h-[640px] flex flex-col justify-end pb-20 overflow-hidden border-b border-white/5"
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 90% 90% at 30% 50%, black 20%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 30% 50%, black 20%, transparent 80%)",
            }}
          />
          <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-accent/6 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Eyebrow>{role}</Eyebrow>
              <Display className="mt-4 mb-6">{title}</Display>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
                {hook}
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── METRICS BAND ────────────────────────────────────────── */}
        <section className="border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className={`grid divide-y divide-white/5 ${metrics.length === 2 ? "sm:grid-cols-2 sm:divide-y-0 sm:divide-x" : "sm:grid-cols-3 sm:divide-y-0 sm:divide-x"}`}>
              {metrics.map((metric, i) => (
                <MetricItem key={metric.label} metric={metric} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── KEY INSIGHT ─────────────────────────────────────────── */}
        {keyInsight && (
          <section className="py-20 border-b border-white/5">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
              <p className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-foreground/60">
                &ldquo;{keyInsight}&rdquo;
              </p>
            </div>
          </section>
        )}

        {/* ── CONTEXT ─────────────────────────────────────────────── */}
        <section className="py-28 md:py-36">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <div className="space-y-12">{context}</div>
          </div>
        </section>

        {/* ── SOLUTION ────────────────────────────────────────────── */}
        <section className="py-28 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-16">
            {solution}
          </div>
        </section>

        {/* ── GALLERY ─────────────────────────────────────────────── */}
        <section className="py-28 md:py-36">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl space-y-12">
            {gallery}
          </div>
        </section>

        {/* ── CTA STRIP ───────────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="font-heading text-3xl md:text-4xl font-medium tracking-tight">
                Interested in working together?
              </p>
              <p className="text-muted-foreground mt-2 text-lg">I&rsquo;m open to full-time roles and select engagements.</p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-white/90 px-8 h-14 shrink-0">
              <Link href="/contact">Get in Touch &rarr;</Link>
            </Button>
          </div>
        </section>

        {/* ── NEXT PROJECT ────────────────────────────────────────── */}
        <section className="relative py-32 flex flex-col items-center text-center overflow-hidden border-t border-white/5 min-h-[360px] justify-center">
          {nextProject.image && (
            <div className="absolute inset-0">
              <Image src={nextProject.image} alt={nextProject.title} fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-background/[0.88]" />
            </div>
          )}
          <div className="relative z-10">
            <Eyebrow className="mb-6 block">Up Next</Eyebrow>
            <Heading className="mb-12 hover:text-accent transition-colors duration-500">
              <Link href={nextProject.href}>{nextProject.title}</Link>
            </Heading>
            <Button asChild size="lg" className="rounded-full px-8 h-14 bg-foreground text-background hover:bg-white/90">
              <Link href={nextProject.href}>Continue Reading &rarr;</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
