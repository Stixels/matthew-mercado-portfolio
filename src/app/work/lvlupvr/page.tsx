import React from "react";
import Image from "next/image";
import CaseStudyLayout from "@/components/layouts/CaseStudyLayout";
import { Heading } from "@/components/ui/typography";

export default function LvlupVRCaseStudy() {
  return (
    <CaseStudyLayout
      title="Level Up VR"
      role="Designer & Frontend Engineer"
      hook="Singlehandedly designed and built a premium web presence for a location-based VR venue from the ground up — now ranked #1 for VR in the city, outperforming established competitors."
      keyInsight="Ranked #1 for VR in the city — beating venues that had been there for years."
      metrics={[
        { label: "Local SEO Rank", value: "#1 VR" },
        { label: "Design", value: "Custom" },
        { label: "Booking", value: "Resova" },
      ]}
      context={
        <>
          <Heading as="h3">Digital Presence for Physical Spaces</Heading>
          <p className="text-muted-foreground text-lg leading-relaxed">
            VR arcades face a unique marketing challenge: how do you convey the visceral, high-fidelity experience of free-roaming virtual reality through a flat browser window? For Level Up VR, I designed and built every pixel from scratch — no templates, no hand-offs.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The result is a fully responsive, interaction-rich platform that mirrors the futuristic nature of the physical venue, driving strong conversion rates and claiming the #1 local SEO ranking for VR in Frederick — beating out mature, established VR locations.
          </p>
        </>
      }
      solution={
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent/60 tracking-widest block">01</span>
              <Heading as="h4" className="text-2xl">Design & Engineering</Heading>
              <p className="text-muted-foreground leading-relaxed">
                Designed from the ground up with a fully responsive layout that holds its own on every device. The site uses layered visual depth, bold typographic hierarchy, and carefully choreographed motion to differentiate the venue from every other WordPress-template competitor in the market.
              </p>
            </div>
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent/60 tracking-widest block">02</span>
              <Heading as="h4" className="text-2xl">Execution Highlights</Heading>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Custom JavaScript interactions and scroll-driven animations throughout — no animation library, hand-tuned for the venue's aesthetic.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Resova booking widget embedded and styled to match the site — the handoff from discovery to reservation is frictionless.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Custom game catalog with category filtering, built to scale as the venue adds new titles.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Fully responsive across all viewport sizes, optimized for mobile where most booking intent originates.</span></li>
              </ul>
            </div>
          </div>
        </>
      }
      gallery={
        <>
          <figure>
            <div className="w-full aspect-[16/9] border border-white/10 rounded-2xl overflow-hidden relative group">
              <Image
                src="/screenshots/lvlupvr-home.png"
                alt="Level Up VR — homepage"
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground px-1">
              Homepage — cinematic hero, clear value proposition, and a frictionless Book Now CTA.
            </figcaption>
          </figure>

          <figure>
            <div className="w-full aspect-[16/9] border border-white/10 rounded-2xl overflow-hidden relative group">
              <Image
                src="/screenshots/lvlupvr-games-carousels.png"
                alt="Level Up VR — games catalog"
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground px-1">
              Games catalog — arena games and VR escape rooms presented with rich artwork and category filtering.
            </figcaption>
          </figure>
        </>
      }
      nextProject={{ title: "Escape Director", href: "/work/escape-director", image: "/screenshots/staging-escapedirector-com.png" }}
    />
  );
}
