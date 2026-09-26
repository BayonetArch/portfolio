import SectionHeading from "./SectionHeading";
import Image, { StaticImageData } from "next/image";
import TxLaunchPreview from "../assets/tx_launch.png";
import NeoKutPreview from "../assets/neo_kut.png";
import FilmPivotPreview from "../assets/film-pivot-react.png";
import HyprZoomerPreview from "../assets/hypr_zoomer.png";

type Project = {
  title: string;
  desc: string;
  projectLinks?: { siteName: string; link: string }[];
  previewImgSrc: StaticImageData;
  previewImgAlt: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Neo Kut",
    desc: "A (future) open source native video editor written in rust",
    projectLinks: [
      {
        siteName: "youtube",
        link: "https://www.youtube.com/playlist?list=PLfAdp-IXqUzs",
      },
    ],
    previewImgSrc: NeoKutPreview,
    previewImgAlt: "preview of neo kut project",
    tags: ["rust", "native"],
  },
  {
    title: "Fim Pivot",
    desc: "A simple website to search for movie information. Built with React.",
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
    desc: "High performance wayland screen magnification, zoom, and live presentation annotation tool.",
    projectLinks: [
      {
        siteName: "github",
        link: "htps://github.com/BayonetArch/hypr_zoomer",
      },
    ],
    previewImgSrc: HyprZoomerPreview,
    previewImgAlt: "preview of hypr Zoomer project",
    tags: ["rust", "tool", "wayland"],
  },
  {
    title: "Tx Launch",
    desc: "tx_launch is an command line tool for launching android apps. it uses android cmd line tools for launching apps.",
    projectLinks: [
      {
        siteName: "github",
        link: "htps://github.com/BayonetArch/tx_launch",
      },
    ],
    previewImgSrc: TxLaunchPreview,
    previewImgAlt: "preview of hypr Zoomer project",
    tags: ["android", "rust", "cli-tool"],
  },
];

function ProjectCard({
  title,
  desc,
  projectLinks,
  previewImgSrc,
  previewImgAlt,
  tags,
}: Project) {
  return (
    <div className="outline flex flex-col gap-2">
      <span className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-all duration-300 text-center">
        {title}
      </span>
      <p className="text-lg text-muted-foreground">{desc}</p>
      <Image src={previewImgSrc} alt={previewImgAlt} width={400} height={300} />
      {projectLinks &&
        projectLinks.map((item) => (
          <a key={item.link} href={item.link} target="_blank" className="">
            {item.siteName}
          </a>
        ))}
      <div>
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-24 flex flex-col gap-10">
      <SectionHeading>Pinned Projects</SectionHeading>
      <div className="flex flex-col gap-12">
        {projects.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            desc={item.desc}
            projectLinks={item.projectLinks}
            previewImgSrc={item.previewImgSrc}
            previewImgAlt={item.previewImgAlt}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
}
