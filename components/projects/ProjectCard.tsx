"use client";
/* eslint-disable @next/next/no-img-element */
// components/ProjectCard.tsx
import { Project } from "@/lib/type";
import Link from "next/link";
import LinkButton from "../LinkButton";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <div className="bg-primary border border-neutral rounded-xl h-full p-3 w-full space-y-1 transition cursor-pointer">
        <div className="flex flex-row justify-between  items-center">
          <img
            src={project.languageIcon}
            alt={"languageIcon"}
            className="rounded-full h-8 object-cover"
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
        <main className="space-y-1" onClick={() => setShowModal(true)}>
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-zinc-800 text-secondary px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-zinc-400">{project.date}</p>
          <div className="w-full h-[150px] bg-zinc-800 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover"
            />
          </div>
        </main>
        <div className="flex justify-end">
          <LinkButton onClick={handleCopyLink} isCopied={isCopied} />
        </div>
      </div>
      {showModal && (
        <ProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
