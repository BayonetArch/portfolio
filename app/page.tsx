import Image from "next/image";
import Photo from "./assets/photo.jpg";
import ProjectsCard from "./components/ProjectsCard";
import HeroButtons from "./components/HeroButton";
import { Link as LinkIcon } from "lucide-react";

function Introduction() {
  return (
    <div className="flex flex-col gap-8 ">
      <p className="text-3xl font-bold text-border text-center">Introduction</p>

      <div className="text-lg text-muted-foreground flex flex-col">
        <p>
          <span className="font-bold text-xl text-foreground">HI</span>, I am{" "}
          <span className="font-bold text-2xl text-accent">Sudip Paudel.</span>
        </p>
        <p>
          A Passonate <span className=" text-xl">full stack developer</span>{" "}
          from nepal.
        </p>
        <p>I specialize in languages such as</p>
        <p className="text-foreground">Javascript, React, Next js, Rust</p>
      </div>
    </div>
  );
}

function PhotoCard() {
  return (
    <div>
      <Image
        src={Photo}
        alt="photo of sudip paudel"
        width={200}
        height={300}
        className="rounded-lg"
      />
    </div>
  );
}

const aboutItems = [
  {
    topic: "Focus",
    desc: "Full stack and systems",
  },
  {
    topic: "Languages",
    desc: "TS . JS . RUST . C",
  },
  {
    topic: "Interests",
    desc: "Performance Tooling . Backend",
  },
];

function About() {
  return (
    <section id="about">
      <p className="text-2xl font-bold text-border text-center">
        About me
      </p>
      <p>
        I work across the whole stack, but my main foucs is writing React and
        TypeScript on one side of the wire and Rust or C on the other and being
        the person who can debug both. I care about readable code, honest
        benchmarks, and shipping things that still make sense six months later.
      </p>
      <div className="mt-2 flex flex-col gap-2">
        <hr />
        {aboutItems.map((item) => (
          <div key={item.topic}>
            <div
              key={item.topic}
              className="flex gap-2 p-2 items-center justify-between "
            >
              <p className="text-muted-foreground">{item.topic}</p>
              <p className="text-right">{item.desc}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}

const contactItems = [
  { name: "Github", href: "https://github.com/BayonetArch" },
  {
    name: "Linked In",
    href: "https://www.linkedin.com/in/sudip-paudel-6b3b4b1b7/",
  },
];

function ContactLinks({ name, href }: { name: string; href: string }) {
  return (
    <a href={href} target="_blank" className="flex gap-2">
      <LinkIcon className="size-4" />
      <span className="text-lg text-accent hover:text-foreground transition-all duration-250">
        {name}
      </span>
    </a>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-24 flex flex-col gap-4">
      <p className="text-2xl font-bold">Contact</p>
      <p>
        Open to freelance work and full-time roles involving full-stack or
        systems engineering.
      </p>
      <a
        href="mailto:sudipxd123@gmail.com"
        className="font-bold text-xl tracking-wider inline-block hover:cursor-pointer transition-all duration-250 ease-in-out hover:text-muted-foreground active:scale-95"
      >
        sudipxd123@gmail.com
        <hr className="mt-1" />
      </a>

      <div className="flex flex-col gap-2 mt-2">
        {contactItems.map((item) => (
          <ContactLinks key={item.name} name={item.name} href={item.href} />
        ))}
      </div>
    </section>
  );
}

function HeroHeader() {
  return (
    <div className="flex flex-col gap-6">
      <Introduction />
      <PhotoCard />
      <HeroButtons />
    </div>
  );
}

export default function Home() {
  return (
    <section className="h-full flex flex-col gap-4" id="home">
      <HeroHeader />
      <div>
        <p>Available for work </p>
      </div>
      <About />
      <ProjectsCard />
      <Contact />
    </section>
  );
}
