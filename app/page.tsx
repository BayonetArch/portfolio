import Image from "next/image";
import Photo from "./assets/photo.jpg";
import ProjectsCard from "./components/ProjectsCard";
import HeroButtons from "./components/HeroButton";

function Introduction() {
  return (
    <div>
      <p>Hi, I am Sudip Paudel</p>
      <p>A Passonate full stack developer from nepal.</p>
      <p>I specialize in languages such as</p>
      <p>Javascript, React, Next js, Rust</p>
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
      <h1>About me</h1>
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
            <hr className="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className=" h-full">
      <Introduction />
      <PhotoCard />
      <HeroButtons />
      <div>
        <p>Available for work </p>
      </div>
      <About />
      <ProjectsCard />
      <div className="h-screen" />
    </div>
  );
}
