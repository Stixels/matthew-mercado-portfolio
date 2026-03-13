"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Display, Eyebrow, Heading } from "@/components/ui/typography";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const journey = [
  {
    company: "Mount St. Mary's University",
    role: "B.S. Computer Science, Summa Cum Laude",
    href: null,
    body: "The degree gave me the foundation. Everything after gave me the perspective.",
  },
  {
    company: "Escape This Frederick",
    role: "Manager & Web Developer",
    href: "/work/escape-this-frederick",
    body: "Rebuilt the digital presence from scratch — Lighthouse 52→97, conversion rate doubled to 5%, bounce rate cut by 35%, #1 local SEO position. Also designed the physical side: custom Arduino circuits and PLC logic behind several of the venue's award-winning puzzle rooms.",
  },
  {
    company: "Escape Director",
    role: "Founder & Lead Engineer",
    href: "/work/escape-director",
    body: "Running operations firsthand showed me the gaps — gamemasters flying blind, operators with no real data. So I built the solution: the most intuitive gamemaster dashboard in the industry paired with an analytics engine that gives operators actual insight. A service worker caches auth and room data for 24 hours so rooms keep running through connectivity drops. Over 6,000 rooms managed. 99.99% uptime.",
  },
  {
    company: "Level Up VR",
    role: "Designer & Frontend Engineer",
    href: "/work/lvlupvr",
    body: "Designed and built a web presence for a location-based VR arcade entirely from scratch. No templates. It now ranks #1 for VR in the city — outperforming established venues that have been there for years.",
  },
  {
    company: "Box",
    role: "Software Engineering Intern",
    href: "https://box.com",
    external: true,
    body: "Implemented social media link unfurling with React and Redux, and wrote automated Gherkin test suites with Webdriver.io. A different scale than running your own product — and a valuable one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-32 pb-16">

        {/* Header */}
        <section className="container mx-auto px-6 md:px-12 max-w-5xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow className="mb-6 block">Background & Approach</Eyebrow>
            <Display className="mb-8 max-w-4xl">
              Engineering with a founder&rsquo;s perspective.
            </Display>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
              I build full-stack products end-to-end — architecture, interface, and outcome. I&rsquo;ve founded a company, managed a venue, and shipped software that moves metrics. That&rsquo;s not a background. That&rsquo;s a perspective.
            </p>
          </motion.div>
        </section>

        {/* Image + intro */}
        <section className="container mx-auto px-6 md:px-12 max-w-7xl mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 bg-white/5">
                <Image
                  src="/matthew-headshot.png"
                  alt="Matthew Mercado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-8 lg:pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Heading as="h2" className="mb-12">The Journey</Heading>

              {/* Timeline */}
              <div className="divide-y divide-white/5">
                {journey.map((item, i) => (
                  <motion.div
                    key={item.company}
                    className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 py-8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="shrink-0">
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-medium text-foreground hover:text-accent transition-colors duration-200 text-sm leading-snug block"
                        >
                          {item.company}
                        </Link>
                      ) : (
                        <span className="font-medium text-foreground text-sm leading-snug block">{item.company}</span>
                      )}
                      <span className="text-xs text-muted-foreground mt-1 block leading-snug">{item.role}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="container mx-auto px-6 md:px-12 max-w-7xl mt-16 mb-8">
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-12 space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
            <Heading as="h2">What I&rsquo;m Looking For</Heading>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              I want to work on hard problems with people who hold the bar high — teams where the engineering is serious and the product actually matters to users. I bring full-stack range, a founder&rsquo;s sense of ownership, and a track record of shipping things that work. If that sounds like your team, I&rsquo;d like to hear about it.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-white/90 px-8 h-14">
                <a href="/matthew-mercado-resume.pdf" target="_blank" rel="noopener noreferrer">View Full Resume</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/5 px-8 h-14">
                <a href="mailto:matthew@escapedirector.com">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
