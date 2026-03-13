import React from "react";
import Image from "next/image";
import CaseStudyLayout from "@/components/layouts/CaseStudyLayout";
import { Heading } from "@/components/ui/typography";

export default function EscapeDirectorCaseStudy() {
  return (
    <CaseStudyLayout
      title="Escape Director"
      role="Founder & Full-Stack Engineer"
      hook="The most intuitive gamemaster dashboard in the escape room industry — and the analytics engine that lets operators finally understand what's working inside their rooms."
      keyInsight="Built for operators who've been flying blind. Designed by someone who ran the room."
      metrics={[
        { label: "Escape Rooms Managed", value: "6,000+" },
        { label: "Uptime", value: "99.99%" },
        { label: "Architecture", value: "Offline-First" },
      ]}
      context={
        <>
          <Heading as="h3">The Problem With Running a Room</Heading>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Gamemasters are the backbone of every escape room — but they&rsquo;ve always been set up to fail. Clue delivery was ad-hoc, puzzle tracking was a whiteboard, and when something went wrong mid-game, operators had no data to understand why. The industry&rsquo;s existing tools were built by people who had never run a room.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Escape Director was built from the inside out. As a founder with direct operational experience, I designed every screen around the high-pressure, split-second reality of a live game — and built the analytics layer to answer the questions operators never even knew they could ask.
          </p>
        </>
      }
      solution={
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent/60 tracking-widest block">01</span>
              <Heading as="h4" className="text-2xl">The Gamemaster Dashboard</Heading>
              <p className="text-muted-foreground leading-relaxed">
                Every interaction was designed for speed under pressure. Gamemasters can deliver clues, track puzzle progress, manage the countdown, and trigger room-specific effects — all from a single, distraction-free interface. The learning curve is minutes, not days.
              </p>
            </div>
            <div className="space-y-4">
              <span className="font-mono text-xs text-accent/60 tracking-widest block">02</span>
              <Heading as="h4" className="text-2xl">Room Intelligence</Heading>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Per-room statistics: success rate, average completion time, record times, and clue usage patterns.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Gamemaster performance tracking filtered by staff member — identify coaching opportunities instantly.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Per-session logs with filterable data: date, time, players, clues used, and time remaining.</span></li>
                <li className="flex gap-3"><span className="text-accent mt-1 shrink-0">→</span><span>Import/export statistics for operators who need to share data or run their own analysis.</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 space-y-4">
            <span className="font-mono text-xs text-accent/60 tracking-widest block">03</span>
            <Heading as="h4" className="text-2xl">Platform Architecture</Heading>
            <p className="text-muted-foreground leading-relaxed">
              Built on a Next.js frontend, Express backend, PostgreSQL database, and S3 media storage — deployed on Railway with 99.99% uptime. A service worker caches authentication and all data required to run a live session for 24 hours, syncing in the background when connectivity is restored. This means a gamemaster running a room on unstable venue Wi-Fi never loses their session. Better Auth handles account-based access control, and Stripe powers subscription billing.
            </p>
          </div>
        </>
      }
      gallery={
        <>
          <figure>
            <div className="w-full aspect-[16/9] border border-white/10 rounded-2xl overflow-hidden relative group">
              <Image
                src="/screenshots/staging-escapedirector-com.png"
                alt="Escape Director — marketing homepage"
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground px-1">
              Marketing site — communicates the product&rsquo;s dual value to operators before they sign up.
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <figure>
              <div className="w-full aspect-[16/10] border border-white/10 rounded-2xl overflow-hidden relative group">
                <Image
                  src="/screenshots/ed-dashboard.webp"
                  alt="Escape Director — gamemaster dashboard"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground px-1">
                Gamemaster dashboard — clue delivery, puzzle tracking, and countdown in one view.
              </figcaption>
            </figure>
            <figure>
              <div className="w-full aspect-[16/10] border border-white/10 rounded-2xl overflow-hidden relative group">
                <Image
                  src="/screenshots/ed-room-statistics.webp"
                  alt="Escape Director — room statistics"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
              <figcaption className="mt-4 text-sm text-muted-foreground px-1">
                Room statistics — success rate, average time, clue usage, and per-session gamemaster logs.
              </figcaption>
            </figure>
          </div>
        </>
      }
      nextProject={{ title: "Escape This Frederick", href: "/work/escape-this-frederick", image: "/screenshots/escapethisfrederick-com.png" }}
    />
  );
}
