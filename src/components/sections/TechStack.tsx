"use client";
import React from "react";
import { Eyebrow } from "@/components/ui/typography";

const stack = [
  "Next.js",
  "TypeScript",
  "React 19",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Redis",
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "Express.js",
  "Playwright",
  "Tailwind CSS",
  "Shadcn UI",
  "MUI",
  "Framer Motion",
  "Better Auth",
  "Stripe",
  "Railway",
  "AWS S3",
  "Prisma",
  "Node.js",
  "Arduino",
  "PLC Logic",
  "Resend",
  "Zod",
  "Tanstack Query",
];

const Separator = () => (
  <span className="mx-6 text-accent/40 select-none">·</span>
);

const StackItem = ({ name }: { name: string }) => (
  <span className="text-sm uppercase tracking-widest font-medium text-muted-foreground whitespace-nowrap">
    {name}
  </span>
);

const TechStack = () => {
  const items = [...stack, ...stack]; // duplicate for seamless loop

  return (
    <div className="w-full border-t border-white/5">
      {/* Eyebrow header */}
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-5">
        <Eyebrow>Technical Range</Eyebrow>
      </div>

      {/* Marquee */}
      <div className="border-b border-white/5 py-5 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {items.map((name, i) => (
            <React.Fragment key={i}>
              <StackItem name={name} />
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
