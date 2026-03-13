"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Eyebrow } from "@/components/ui/typography";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

const Contact: React.FC = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast({ title: "Message sent.", description: "I'll get back to you shortly.", duration: 4000 });
      reset();
    } else {
      toast({ title: "Something went wrong.", description: "Try emailing me directly at matthew@escapedirector.com", variant: "destructive", duration: 5000 });
    }
  };

  return (
    <section id="contact" className="relative border-t border-white/10 bg-background pt-32 pb-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[60%] bg-accent/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Ambient display text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span
          className="font-heading font-medium text-white/[0.018] whitespace-nowrap tracking-tighter leading-none"
          style={{ fontSize: "clamp(6rem, 22vw, 22rem)" }}
        >
          Let&rsquo;s Talk.
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-5 mb-20">
          <Eyebrow>Contact</Eyebrow>
          <h2
            className="font-heading font-medium tracking-tighter leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            Let&rsquo;s talk.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
            Open to full-time engineering roles and select consulting engagements. If you&rsquo;re building something that demands both technical depth and product thinking — let&rsquo;s talk.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-5xl mx-auto">

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-8 pt-2"
          >
            <div>
              <Eyebrow className="block mb-2 text-white/50">Email</Eyebrow>
              <a href="mailto:matthew@escapedirector.com" className="text-foreground hover:text-accent transition-colors duration-200 text-lg font-medium break-all">
                matthew@escapedirector.com
              </a>
            </div>
            <div>
              <Eyebrow className="block mb-2 text-white/50">LinkedIn</Eyebrow>
              <a
                href="https://www.linkedin.com/in/matthew-mercado-velez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-200 text-lg font-medium"
              >
                matthew-mercado-velez
              </a>
            </div>
            <div>
              <Eyebrow className="block mb-2 text-white/50">GitHub</Eyebrow>
              <a
                href="https://github.com/Stixels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-200 text-lg font-medium"
              >
                github.com/Stixels
              </a>
            </div>
            <div className="pt-4">
              <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/5 px-8 h-14 w-full" asChild>
                <a href="/matthew-mercado-resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-white/50 font-medium">Name</label>
                  <Input
                    {...register("name")}
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 rounded-xl h-12 text-foreground placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.07]"
                  />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-white/50 font-medium">Email</label>
                  <Input
                    {...register("email")}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 rounded-xl h-12 text-foreground placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.07]"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email.message as string}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-white/50 font-medium">Message</label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell me about your project..."
                  className="bg-white/5 border-white/10 rounded-xl min-h-[160px] text-foreground placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.07] resize-none"
                />
                {errors.message && <p className="text-red-400 text-sm">{errors.message.message as string}</p>}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="rounded-full bg-foreground text-background hover:bg-white/90 px-8 h-14 font-medium"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
