import { SidebarProvider } from "@/components/ui/sidebar";

import type { ReactNode } from "react";
import { AppSidebar } from "./sidebar/AppSidebar";
import { Content } from "./content/Content";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <Content>{children}</Content>
    </SidebarProvider>
  );
}
