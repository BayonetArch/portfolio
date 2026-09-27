import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProjectPreviewProps = {
  src: StaticImageData;
  alt: string;
  title: string;
};

export default function ProjectPreview({ src, alt, title }: ProjectPreviewProps) {
  return (
    <Dialog>
      <DialogTrigger className="relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-md p-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 45vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <Image
          src={src}
          alt={alt}
          width={src.width}
          height={src.height}
          sizes="(max-width: 768px) 100vw, 48rem"
          className="h-auto max-h-[80dvh] w-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
