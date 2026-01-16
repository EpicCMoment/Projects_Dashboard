import { ModeToggle } from "@/components/mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Navbar() {
  return (
    <nav className="p-2 flex items-center justify-between sticky">
      <SidebarTrigger className="justify-start" />

      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </nav>
  );
}
