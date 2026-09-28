import SectionHeading from "./SectionHeading";
import ProjectPreview from "./ProjectPreview";
import { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import TxLaunchPreview from "../assets/tx_launch.png";
import NeoKutPreview from "../assets/neo_kut.png";
import FilmPivotPreview from "../assets/film-pivot-react.png";
import HyprZoomerPreview from "../assets/hypr_zoomer.png";
import TodoListPreview from "../assets/todolist.png";

type Project = {
  title: string;
  descs: string[];
  projectLinks?: { siteName: string; link: string }[];
  previewImgSrc: StaticImageData;
  previewImgAlt: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Neo Kut",
    descs: [
      "A (future) open source native video editor written in rust. Fully documented on youtube live.",
      "Neo Kut is written using 'gstreamer-rs' for video processing, egui for gui and winit for cross-platform windowing. It is still work in progress by a single guy(me), but will be open sourced in future and open to contributions.",
    ],

    projectLinks: [
      {
        siteName: "youtube",
        link: "https://www.youtube.com/playlist?list=PLfAdp-IXqUzs",
      },
    ],
    previewImgSrc: NeoKutPreview,
    previewImgAlt: "preview of neo kut project",
    tags: ["rust", "native", "egui"],
  },
  {
    title: "Film Pivot",
    descs: [
      "A learning project, and a React rewrite of my older Film Pivot site. You type a title and it debounces the query against the OMDb API and shows you the movie results.",
      "Built with React 19, Vite and react-router-dom, styled with CSS Modules, animated with the View Transitions API, Deployed on Vercel.",
    ],
    projectLinks: [
      {
        siteName: "github",
        link: "https://github.com/BayonetArch/film-pivot-react",
      },
      {
        siteName: "website",
        link: "https://film-pivot-react.vercel.app/",
      },
    ],
    previewImgSrc: FilmPivotPreview,
    previewImgAlt: "preview of film pivot project",
    tags: ["react", "frontend", "api"],
  },
  {
    title: "Hypr Zoomer",
    descs: [
      "A high performance screen magnifier for Wayland compositors.",
      "It contains about 30 keybindings to cover all the features like flashlight, drawing, etc. config is TOML generated via --generate-config, and it installs straight from crates.io.",
      "It has a flashlight mode that dims everything outside a configurable circle just like in the preview image. it also has freehand pen, arrow and rectangle annotations with undo/redo, and much more. check it out on github link below.",
    ],
    projectLinks: [
      {
        siteName: "github",
        link: "https://github.com/BayonetArch/hypr_zoomer",
      },
    ],
    previewImgSrc: HyprZoomerPreview,
    previewImgAlt: "preview of hypr Zoomer project",
    tags: ["rust", "tool", "wayland"],
  },
  {
    title: "TODO APP",
    descs: [
      "A simple todo app made in react for learning purposes.",
      "It has a clean colorscheme and easy navigations.",
    ],
    projectLinks: [
      {
        siteName: "github",
        link: "https://github.com/BayonetArch/react-todolist",
      },
      {
        siteName: "site",
        link: "https://bayonet-react-todolist.vercel.app/",
      },
    ],
    previewImgSrc: TodoListPreview,
    previewImgAlt: "preview of todo list app",
    tags: ["js", "react"],
  },
  {
    title: "Tx Launch",
    descs: [
      "A command line tool for launching Android apps from Termux, so you can start anything by typing a friendly name instead of a package name.",
      "it has an interactive REPL with list and help commands, or you can use a one-shot --run from a script, with name suggestions when a name misses.",
      "Launching goes through am start, and you choose the backend: the bundled Termux am (slow, it runs on the JVM), termux-am from GitHub Action builds, or the system am, which is fastest but only works up to Android 10.",
    ],
    projectLinks: [
      {
        siteName: "github",
        link: "https://github.com/BayonetArch/tx_launch",
      },
    ],
    previewImgSrc: TxLaunchPreview,
    previewImgAlt: "preview of tx launch project",
    tags: ["android", "rust", "cli-tool"],
  },
];

function ProjectCard({
  index,
  title,
  descs,
  projectLinks,
  previewImgSrc,
  previewImgAlt,
  tags,
}: Project & { index: number }) {
  return (
    <article className="group outline rounded-lg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/40 sm:p-6">
      <div className="flex flex-col gap-6 sm:grid sm:grid-cols-[1fr_1.2fr] sm:items-center sm:gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-oswald text-2xl tracking-tight text-foreground">
              {title}
            </h3>
          </div>
          {descs.map((desc, index) => (
            <div key={desc}>
              <div className="hidden sm:flex text-lg">
                <p className="text-muted-foreground">{desc}</p>
              </div>

              <div className="md:hidden flex">
                {index < 2 && (
                  <p className="text-muted-foreground flex-1">{desc}</p>
                )}
              </div>
            </div>
          ))}

          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border/60 px-2 py-0.5 text-xs tracking-wider text-muted-foreground uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <ProjectPreview src={previewImgSrc} alt={previewImgAlt} title={title} />
      </div>
      {projectLinks?.length ? (
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/60 pt-4">
          {projectLinks.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {item.siteName}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-24 flex flex-col gap-10">
      <SectionHeading>Pinned Projects</SectionHeading>
      <div className="flex flex-col gap-8">
        {projects.map((item, index) => (
          <ProjectCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </section>
  );
}
