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
        "relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5",
        className,
      )}
    >
      <Spotlight />
      {children}
    </main>
  );
}
