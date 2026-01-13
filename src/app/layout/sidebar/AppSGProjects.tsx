import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const recent_projects = [
  {
    title: "Epyc Income",
    url: "/projects/epyc_income",
  },

  {
    title: "Holy Serpent",
    url: "/projects/holy_serpent",
  },
  {
    title: "Zehra's Tasks",
    url: "/projects/zehras_tasks",
  },
];

export function AppSGProjects() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Recent Projects</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {recent_projects.map((project) => {
              return (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton asChild>
                    <a href={project.url}>
                      <span>{project.title}</span>
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
