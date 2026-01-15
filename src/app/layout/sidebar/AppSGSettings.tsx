import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronUp, Settings } from "lucide-react";

export function AppSGSettings() {
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton variant="outline" tooltip="Settings">
                <Settings />
                <span>Settings</span>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>Audio</DropdownMenuItem>
              <DropdownMenuItem>Video</DropdownMenuItem>
              <DropdownMenuItem>Misc</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
