import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight-new";

interface ContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={cn(
        "relative flex justify-center items-center flex-col mx-auto px-5 md:px-10 ",
        className,
      )}
    >
      <div className="absolute inset-0 overflow-x-hidden pointer-events-none">
        <Spotlight xOffset={500} />
      </div>

      {children}
    </main>
  );
}
