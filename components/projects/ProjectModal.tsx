"use client";

import { Project } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { SiLazyvim } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import { useCallback, useEffect, useRef, useState } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const checkTruncation = () => {
      if (descriptionRef.current) {
        const { scrollHeight, clientHeight } = descriptionRef.current;
        setIsTruncated(scrollHeight > clientHeight);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [project.description]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start p-16 bg-indigo-900/50 overflow-y-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="flex flex-col bg-dark border border-white/15 rounded-xl px-8 py-6 w-full max-w-4xl relative shadow-xl">
        {/* Modal Header - Sticky to modal top when scrolling parent */}
        <header className="flex justify-between items-center sticky -top-16 bg-dark py-2 z-10">
          <div className="flex items-center gap-4 text-secondary">
            <button aria-label="Previous project">
              <MdArrowBackIos size={25} />
            </button>
            <button aria-label="Next project">
              <MdOutlineArrowForwardIos size={25} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-900 bg-white px-3 py-2 rounded-xl font-medium hover:bg-slate-200 transition-colors"
              aria-label={`Visit ${project.title} project`}
            >
              <FaExternalLinkAlt size={14} />
              See project
            </Link>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            >
              <IoClose className="text-secondary" size={30} />
            </button>
          </div>
        </header>

        {/* Modal Content */}
        <main className="mt-4 space-y-3">
          <div>
            <h1
              id="project-modal-title"
              className="text-2xl md:text-3xl font-semibold mb-2"
            >
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-2">
              <span className="inline-flex items-center gap-2 text-xs bg-neon font-bold text-balance px-2 py-1 rounded">
                <SiLazyvim size={14} />
                TL;DR
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-zinc-800 text-secondary px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <time dateTime={project.date} className="text-xs text-zinc-400">
              {project.date}
            </time>
          </div>

          <section className="space-y-6">
            <div>
              <p
                ref={descriptionRef}
                className={`text-zinc-200 text-base md:text-lg leading-relaxed ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {project.description}
              </p>
              {isTruncated && (
                <button
                  onClick={toggleDescription}
                  className="text-sm text-blue-500 hover:text-blue-600 transition-colors mt-2 cursor-pointer"
                  aria-label={isExpanded ? "Show less" : "Show more"}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>

            <div className="w-auto h-[400px] rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={800}
                height={450}
                className="rounded-lg w-auto h-full object-contain object-left"
                priority
              />
            </div>
          </section>
        </main>

        {/* Modal Footer */}
        <footer className="flex justify-between items-center border rounded-full border-zinc-700 py-2 px-4 mt-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/mario03-fr.png"
              alt="Mario"
              width={40}
              height={40}
              className="rounded-full object-cover border border-zinc-700 w-5 h-5 md:w-6 md:h-6"
              priority
            />
            <span className="text-sm text-zinc-300">Mario Francisco</span>
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors cursor-pointer"
            aria-label="Copy project link"
          >
            <IoIosLink size={20} />
            <span>{isCopied ? "Copied!" : "Copy"}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
