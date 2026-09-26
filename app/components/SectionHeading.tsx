type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span aria-hidden="true" className="h-1 w-10 rounded-full bg-accent" />
      <h2 className="text-2xl font-oswald tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
