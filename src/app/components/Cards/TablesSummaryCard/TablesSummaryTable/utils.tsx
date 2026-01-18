import type { TableVersion } from "@/app/backend/models/table";
import { BadgeCheck, BadgeX } from "lucide-react";
import type { ReactNode } from "react";

export function GetCheckpointBadge(version: TableVersion): ReactNode {
  if (version.checkpoint_type != null) {
    return (
      <div className="flex justify-center">
        <BadgeCheck />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <BadgeX />
      </div>
    );
  }
}
