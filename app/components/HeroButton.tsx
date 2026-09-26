"use client";

import { Button } from "@/components/ui/button";

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroButtons() {
  return (
    <div className="flex gap-2 mt-2 mb-2">
      <Button
        size="lg"
        className=" hover:cursor-pointer rounded-md  transition-all duration-300 bg-accent text-secondary "
        onClick={() => scrollToSection("projects")}
      >
        View Projects
      </Button>
      <Button
        size="lg"
        variant="secondary"
        className="text-md hover:cursor-pointer rounded-md transition-all duration-300 text-muted-foreground"
        onClick={() => scrollToSection("contact")}
      >
        Get in touch
      </Button>
    </div>
  );
}
