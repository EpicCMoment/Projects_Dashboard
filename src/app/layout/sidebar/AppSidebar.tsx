import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { AppSGApplication } from "./AppSGApplication";
import { AppSGProjects } from "./AppSGProjects";
import { AppSGSettings } from "./AppSGSettings";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader></SidebarHeader>

      <SidebarContent>
        <AppSGApplication />

        <AppSGProjects />
      </SidebarContent>

      <SidebarFooter>
        <AppSGSettings />
      </SidebarFooter>
    </Sidebar>
  );
}
