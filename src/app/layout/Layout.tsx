import { SidebarProvider } from "@/components/ui/sidebar";

import type { ReactNode } from "react";
import { AppSidebar } from "./sidebar/AppSidebar";
import { Content } from "./content/Content";

interface LayoutProps {
  children: ReactNode;
  variant?: "grid" | "flex";
}

/**
 * `Layout` describes the general view of a page. Each page should
 * return a `Layout` as the root component and put main content as
 * its `children`.
 *
 * `Layout` consists of a sidebar on the left and main content
 * on the right. `children` of the Layout is displayed in the main
 * content.
 */
export function Layout({ children, variant = "grid" }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <Content variant={variant}>{children}</Content>
    </SidebarProvider>
  );
}
