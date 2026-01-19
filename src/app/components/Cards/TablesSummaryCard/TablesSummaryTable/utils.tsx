import type { TableVersion } from "@/app/backend/models/table";
import { BadgeCheck, BadgeX } from "lucide-react";
import type { ReactNode } from "react";

export function GetCheckpointBadge(version: TableVersion): ReactNode {
  if (version.checkpoint_type != null) {
    return (
      <div className="flex justify-center">
        <BadgeCheck color="#27e359" />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <BadgeX color="#eb2a2a" />
      </div>
    );
  }
}
