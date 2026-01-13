import { SidebarTrigger } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <>
      <main className="flex grow">
        <SidebarTrigger />
        {children}
      </main>
    </>
  );
}
