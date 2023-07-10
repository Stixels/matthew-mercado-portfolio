"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type ProjectDescription = {
  heading: string;
  text: string;
  link?: string;
  linkText?: string;
  remainingText?: string;
};

export type Project = {
  id: number;
  title: (string | number)[];
  subtitle: string;
  imagePath: string;
  description: ProjectDescription[];
  toolsUsed: string[];
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CardDescriptionItem: React.FC<{ desc: ProjectDescription }> = ({
  desc,
}) => (
  <CardDescription className="mb-4">
    <span className="font-bold">{desc.heading}:</span> {desc.text}{" "}
    {desc.link && (
      <a
        href={desc.link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        {desc.linkText}
      </a>
    )}
    {desc.remainingText}
  </CardDescription>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle potential errors with project.description[0].link
  const projectLink = project.description?.[0]?.link || "#";

  return (
    <div ref={ref} key={project.id} className="mb-20">
      <motion.div
        animate={{ y: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Card className="rounded-lg overflow-hidden shadow-2xl">
          <CardHeader className="p-8 bg-slate-700 text-white">
            <CardTitle>
              {inView && (
                <TypeAnimation
                  cursor={true}
                  sequence={project.title}
                  className="text-4xl font-semibold"
                />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <h4 className="text-xl mb-4 font-semibold">{project.subtitle}</h4>
            {project.description.map((desc) => (
              <CardDescriptionItem key={desc.heading} desc={desc} />
            ))}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.toolsUsed.map((tool, i) => (
                <Badge key={i}>{tool}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="md:p-12 flex flex-col gap-4">
            <div className="flex items-center justify-center w-full overflow-visible relative">
              <div className="overflow-visible">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Project link"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.imagePath}
                      alt={project.title[1] as string}
                      layout="responsive"
                      width={16}
                      height={9}
                      className="rounded-lg border-2"
                    />
                  </motion.div>
                </a>
              </div>
            </div>
            <Button
              className="mt-4 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
              onClick={() => window.open(projectLink, "_blank")}
            >
              View Project
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
