"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function HeroButtons() {
  return (
    <div className="flex gap-2 mt-2 mb-2">
      <Button
        variant="secondary"
        size="lg"
        className="text-md hover:cursor-pointer"
        onClick={() => {
          redirect("/#projects");
        }}
      >
        View Projects
      </Button>
      <Button
        size="lg"
        className="text-md hover:cursor-pointer"
        onClick={() => {
          redirect("/#contact");
        }}
      >
        Get in touch
      </Button>
    </div>
  );
}
