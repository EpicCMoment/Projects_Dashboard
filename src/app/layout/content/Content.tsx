import type { ReactNode } from "react";
import { Navbar } from "../navbar/Navbar";

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <>
      <main className="w-full">
        <Navbar />

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 m-2 grow h-full border-0">
          {children}
        </div>
      </main>
    </>
  );
}
