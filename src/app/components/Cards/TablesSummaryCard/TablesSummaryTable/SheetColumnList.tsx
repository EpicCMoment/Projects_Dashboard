import type { Table } from "@/app/backend/models/table";
import { Badge } from "@/components/ui/badge";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface SheetColumnListProps {
  data: Table;
}

type ColumnRole =
  | "exog"
  | "endog"
  | "not_used"
  | "time_id"
  | "lookup"
  | "default";

const columnRoleToStyle: Record<ColumnRole, string> = {
  exog: "bg-red-400",
  endog: "bg-green-600",
  not_used: "bg-gray-400",
  time_id: "bg-purple-400",
  lookup: "bg-yellow-600",
  default: "",
};

export function SheetColumnList({ data }: SheetColumnListProps) {
  return (
    <div className="p-2 m-2 rounded">
      <div className="text-3xl mx-4 w-fit">
        Columns
        <SidebarSeparator className="m-0 p-0" />
      </div>
      <div className="m-2 grid grid-cols-2">
        <div className="text-center p-2 text-xl">Name</div>
        <div className="text-center p-2 text-xl">Role</div>
      </div>
      {data.columns.map((column) => {
        return (
          <div
            key={column.column_id}
            className="m-2 grid grid-cols-2 border hover:bg-accent"
          >
            <div className="text-center p-2">{column.display_name}</div>
            <div className="flex m-auto p-2">
              <Badge
                className={cn(
                  "text-3sm",
                  columnRoleToStyle[column.role as ColumnRole],
                )}
              >
                {column.role
                  .replace("_", " ")
                  .split(" ")
                  .map((word) => {
                    return word[0].toUpperCase() + word.slice(1);
                  })
                  .join(" ")}
              </Badge>
            </div>
          </div>
        );
      })}
    </div>
  );
}
