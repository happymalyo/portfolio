"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/db";

export default function ProjectsPage() {
  return (
    <main className="p-5 overflow-hidden">
      <div className="overflow-hidden grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 xl:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
