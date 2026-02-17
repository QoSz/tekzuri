import { getAllProjects } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <section className="px-6 lg:px-8 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 400px" }}>
                <ProjectCard project={project} index={index} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
