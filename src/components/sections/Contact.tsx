"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";

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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast({
        title: "Success!",
        description: "Your message has been sent.",
        duration: 3000,
      });
    } else {
      toast({
        title: "Error!",
        description: "There was an error sending your message.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const contactLinkclasses =
    "text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 transform hover:underline";

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-start lg:items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 max-w-5xl mx-auto p-4 md:p-8 md:py-20 bg-slate-900 rounded-lg"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-blue-400">My Contact Info</h2>
        <div className="flex items-center space-x-2">
          <MdEmail size={20} className="text-blue-400" />
          <a
            href="mailto:matthewmercado@escapedirector.software"
            className={contactLinkclasses}
          >
            matthewmercado@escapedirector.software
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <MdLocalPhone size={20} className="text-blue-400" />
          <a href="tel:2407252448" className={contactLinkclasses}>
            (240) 725-2448
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaLinkedin size={20} className="text-blue-400" />
          <a
            href="https://www.linkedin.com/in/matthew-mercado-velez"
            className={contactLinkclasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            matthew-mercado-velez
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaGithub size={20} className="text-blue-400" />
          <a
            href="https://github.com/Stixels"
            className={contactLinkclasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stixels
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaTwitter size={20} className="text-blue-400" />
          <a
            href="https://twitter.com/Stixels_"
            className={contactLinkclasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            @Stixels_
          </a>
        </div>
      </div>
      <div className="p-6 mt-6 text-left border w-full rounded-xl hover:shadow-xl bg-slate-950">
        <h1 className="text-2xl font-bold text-blue-400">Contact Me</h1>
        <p className="mt-2 text-gray-400">
          If you have any questions or would like to get in touch with me
          directly, please fill out the form below.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-400">Name</label>
            <Input
              {...register("name")}
              className="mt-1 mb-4 p-2 rounded-md border-2"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message as string}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400">Email</label>
            <Input
              {...register("email")}
              className="mt-1 mb-4 p-2 rounded-md border-2"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message as string}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400">Message</label>
            <Textarea
              {...register("message")}
              className="mt-1 p-2 h-20 rounded-md border-2"
            />
            {errors.message && (
              <p className="text-red-600">{errors.message.message as string}</p>
            )}
          </div>
          <Button className="mt-4 bg-blue-400" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
