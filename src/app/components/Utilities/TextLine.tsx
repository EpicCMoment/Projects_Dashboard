import type { ReactNode } from "react";

interface TextLineProps {
  children: ReactNode;
  className?: string;
}

export function TextLine({ children, className }: TextLineProps) {
  return (
    <div
      className={`flex items-center rounded-lg border bg-card p-3 shadow-sm transition-colors hover:bg-accent text-sm ${className || ""}`}
    >
      {children}
    </div>
  );
}
