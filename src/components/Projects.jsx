import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="section py-20 container mx-auto px-6 text-center"
    >
      <h2 className="text-3xl font-bold dark:text-white mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
