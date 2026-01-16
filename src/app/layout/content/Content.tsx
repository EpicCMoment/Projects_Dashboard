import type { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";

interface ContentProps {
  children: ReactNode;
  variant: "grid" | "flex";
}

export function Content({ children, variant }: ContentProps) {
  return (
    <>
      {variant === "grid" ? (
        <main className="w-full">
          <Navbar />
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 m-2 grow border-0">
            {children}
          </div>
        </main>
      ) : (
        <main className="w-full">
          <Navbar />
          <div className="flex items-center justify-center h-2/3 gap-4 m-2 grow border-0">
            {children}
          </div>
        </main>
      )}
    </>
  );
}
