import React from "react";
import Image from "next/image";
import CaseStudyLayout from "@/components/layouts/CaseStudyLayout";
import { Heading } from "@/components/ui/typography";

export default function EscapeThisFrederickCaseStudy() {
  return (
    <CaseStudyLayout
      title="Escape This Frederick"
      role="Web Developer, Product Lead & Puzzle Engineer"
      hook="A complete digital overhaul with hard numbers to show for it — Lighthouse from 52 to 97, a doubled conversion rate, and the #1 local SEO position statewide."
      keyInsight="A 52 Lighthouse score and a 2.5% conversion rate. Both were fixable."
      metrics={[
        { label: "Lighthouse Performance", value: "97" },
        { label: "Conversion Rate", value: "2× Lift" },
        { label: "Bounce Rate", value: "−35%" },
      ]}
      context={
        <>
          <Heading as="h3">Redesigning For Revenue</Heading>
          <p className="text-muted-foreground text-lg leading-relaxed">
            As Manager and Web Developer at Escape This Frederick, I identified that our digital presence was the single biggest constraint on physical growth. The existing site scored a 52 on Lighthouse, loaded slowly on mobile, and failed to communicate the premium, award-winning nature of the rooms we had spent years building.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The challenge wasn&rsquo;t just aesthetics — it was engineering an engine that converted casual browsers into paying customers, owned local search, and scaled our remarketing pipeline to keep customers coming back. Escape This Frederick is now the highest and most reviewed individually owned escape room in Maryland.
          </p>
        </>
      }
      solution={
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent/60 tracking-widest block">01</span>
              <Heading as="h4" className="text-2xl">Performance & Technical Lift</Heading>
              <p className="text-muted-foreground leading-relaxed">
                Rebuilt from scratch with modern web architecture, driving Lighthouse performance from a 52 to a 97. The dramatic improvement in Core Web Vitals directly correlates to the 35% drop in bounce rate and cemented the #1 SEO result locally — and on the front page statewide.
              </p>
            </div>
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent/60 tracking-widest block">02</span>
              <Heading as="h4" className="text-2xl">Conversion & Growth Stack</Heading>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Doubled the conversion rate from 2.5% to 5% through streamlined booking flow and visual room storytelling.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Built a full-stack waiver web app (Next.js, Prisma, PostgreSQL) integrating Bookeo and Mailchimp APIs, increasing remarketing potential 8×.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Restructured information architecture for SEO, achieving the #1 local ranking and state front page for targeted keywords.</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 space-y-4">
            <span className="font-mono text-xs text-accent/60 tracking-widest block">03</span>
            <Heading as="h4" className="text-2xl">Arduino & PLC Puzzle Engineering</Heading>
            <p className="text-muted-foreground leading-relaxed">
              Beyond the digital stack, I designed and implemented the physical puzzle systems behind several of Escape This Frederick&rsquo;s award-winning rooms — including custom Arduino circuits and PLC logic for multi-stage puzzle sequences. Software and hardware converging to create the full immersive experience.
            </p>
          </div>
        </>
      }
      gallery={
        <>
          <figure>
            <div className="w-full aspect-[16/9] border border-white/10 rounded-2xl overflow-hidden relative group">
              <Image
                src="/screenshots/escapethisfrederick-com.png"
                alt="Escape This Frederick — homepage"
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground px-1">
              Homepage — rebuilt to communicate the venue&rsquo;s award-winning quality and convert visitors into bookings.
            </figcaption>
          </figure>
        </>
      }
      nextProject={{ title: "Level Up VR", href: "/work/lvlupvr", image: "/screenshots/lvlupvr-home.png" }}
    />
  );
}
