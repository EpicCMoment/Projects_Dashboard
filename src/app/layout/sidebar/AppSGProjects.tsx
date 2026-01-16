import { GetSampleProjects } from "@/app/backend/Backend";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSGProjects() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Recent Projects</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {GetSampleProjects().map((project) => {
              return (
                <SidebarMenuItem key={project.project_id}>
                  <SidebarMenuButton asChild>
                    <a href={"/projects/" + project.project_id}>
                      <span>{project.project_name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}
