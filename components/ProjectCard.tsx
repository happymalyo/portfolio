/* eslint-disable @next/next/no-img-element */
// components/ProjectCard.tsx
import { Project } from "@/lib/type";
import Link from "next/link";
import LinkButton from "./LinkButton";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-zinc-900 rounded-xl h-full p-4 w-full hover:scale-[1.02] space-y-2 transition cursor-pointer">
      <div className="flex flex-row justify-between  items-center">
        <img
          src={project.languageIcon}
          alt={"languageIcon"}
          className="rounded-full h-10 object-cover"
        />
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-900 bg-white px-3 py-2 rounded-xl font-medium hover:bg-slate-200 transition"
        >
          See project
          <FaExternalLinkAlt size={14} />
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-zinc-800 text-zinc-200 px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-zinc-400">{project.date}</p>
      <div className="w-full aspect-[4/3] bg-zinc-800 rounded-md overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-end">
        <LinkButton />
      </div>
    </div>
  );
}
