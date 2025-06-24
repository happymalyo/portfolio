"use client";
import { GoSidebarExpand } from "react-icons/go";
import { VscGithubProject } from "react-icons/vsc";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FaUserAstronaut } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import { PiBookOpenTextFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="border-r border-neutral/60 fixed top-16 left-0 w-[220px] h-[calc(100vh-4rem)] py-4 z-40">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-secondary font-semibold">Menu</h1>
        <div className="text-secondary">
          <GoSidebarExpand size={20} />
        </div>
      </div>
      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          <Link
            href="/projects"
            className={clsx(
              "flex text-sm text-secondary  items-center gap-2 px-4",
              path === "/projects" && "bg-neutral text-white py-2"
            )}
          >
            <VscGithubProject size={20} />
            Projects
          </Link>
          <Link
            href="/about"
            className={clsx(
              "flex text-sm text-secondary  items-center gap-2 px-4",
              path === "/about" && "bg-neutral text-white py-2"
            )}
          >
            <FaUserAstronaut size={20} />
            About me
          </Link>
          <Link
            href="/resume"
            className={clsx(
              "flex text-sm text-secondary items-center gap-2 px-4",
              path === "/resume" && "bg-neutral text-white py-2"
            )}
          >
            <PiReadCvLogo size={20} />
            Resume
          </Link>
          <Link
            href="/writings"
            className={clsx(
              "flex text-sm text-secondary items-center gap-2 px-4",
              path === "/writings" && "bg-neutral text-white py-2"
            )}
          >
            <PiBookOpenTextFill size={20} />
            Writings
          </Link>
          <Link
            href="/contributions"
            className={clsx(
              "flex text-sm text-secondary items-center gap-2 px-4",
              path === "/contributions" && "bg-neutral text-white py-2"
            )}
          >
            <FaGithub size={20} />
            Contributions
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
