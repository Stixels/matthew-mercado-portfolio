import "./globals.css";
import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "Matthew Mercado | Product Engineer Founder",
  description: "Matthew Mercado is a product engineer founder who designs and builds premium digital experiences with measurable business outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-[16px] md:text-[18px]">
      <body className={`${inter.variable} ${instrument.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-white`}>
        <main className="min-h-screen relative overflow-hidden">{children}</main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
