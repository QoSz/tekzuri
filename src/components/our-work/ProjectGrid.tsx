import { getAllProjects } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <section className="px-6 lg:px-8 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
