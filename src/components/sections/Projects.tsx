import React from "react";
import { projects } from "@/components/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="mx-auto w-full max-w-5xl p-4 py-20 md:px-0">
      <h2 className="mb-6 text-4xl font-bold tracking-wide">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
