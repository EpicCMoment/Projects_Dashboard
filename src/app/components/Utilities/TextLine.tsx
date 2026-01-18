import type { ReactNode } from "react";

interface TextLineProps {
  children: ReactNode;
}

export function TextLine({ children }: TextLineProps) {
  return (
    <div className="flex items-center rounded-lg border bg-card p-3 shadow-sm transition-colors hover:bg-accent">
      <span className="text-sm">{children}</span>
    </div>
  );
}
