import { getAllProjects } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <section className="px-6 lg:px-8 pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
