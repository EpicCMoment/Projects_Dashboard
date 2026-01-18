import type { Table } from "@/app/backend/models/table";
import { TextLine } from "@/app/components/Utilities/TextLine";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { GetFormattedTime } from "@/app/backend/models/sample-wrapper";
import { GetCheckpointBadge } from "./utils";
import { SidebarSeparator } from "@/components/ui/sidebar";

interface SheetVersionHistoryProps {
  data: Table;
}

/**
 *            "table_version_id": "tver-007-v2",
            "version_number": 2,
            "row_count": 248500,
            "column_count": 22,
            "is_materialized": true,
            "checkpoint_type": "user_manual",
            "checkpoint_name": "Feature engineering complete",
            "parent_version_id": "tver-007-v1",
            "created_at": "2024-10-20T15:00:00Z",
            "created_by": "Michael Chen"
 */

export function SheetVersionHistory({ data }: SheetVersionHistoryProps) {
  return data.versions.reverse().map((version) => {
    return (
      <HoverCard key={version.table_version_id} openDelay={100} closeDelay={50}>
        <HoverCardTrigger>
          <div className="m-4">
            <TextLine>
              <div>{version.table_version_id}</div>
            </TextLine>
          </div>
        </HoverCardTrigger>
        <HoverCardContent side="left" sideOffset={20}>
          <div className="w-fit">
            <div className="p-2 grid grid-cols-2">
              <div>
                <b>Created By:</b>
              </div>
              <div>{version.created_by}</div>
            </div>
            <SidebarSeparator className="w-full m-0 p-0" />

            <div className="p-2 grid grid-cols-2">
              <b>Created At:</b> {GetFormattedTime(version.created_at)}
            </div>

            <SidebarSeparator className="w-full m-0 p-0" />
            <div className="p-2 grid grid-cols-2">
              <div>
                <b>Columns:</b>
              </div>{" "}
              <div>{version.column_count}</div>
            </div>

            <SidebarSeparator className="w-full m-0 p-0" />
            <div className="p-2 grid grid-cols-2">
              <div>
                <b>Rows:</b>
              </div>{" "}
              <div>{version.row_count}</div>
            </div>

            <SidebarSeparator className="w-full m-0 p-0" />

            <div className="p-2 grid grid-cols-2">
              <div>
                <b>Checkpointed:</b>
              </div>{" "}
              <div>{GetCheckpointBadge(version)}</div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  });
}
