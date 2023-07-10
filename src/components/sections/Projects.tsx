import React from "react";
import { projects } from "@/components/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="max-w-5xl w-full mx-auto py-20 p-4 md:px-0">
      <h2 className="text-4xl font-bold mb-6 tracking-wide">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
