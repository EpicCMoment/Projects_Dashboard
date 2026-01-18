import type { Executer, Operation } from "@/app/backend/models/operation";
import { GetFormattedTime } from "@/app/backend/models/sample-wrapper";
import { Button } from "@/components/ui/button";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Operation>[] = [
  {
    accessorKey: "operation_name",
    header: "Name",
  },
  {
    accessorKey: "operation_type",
    header: "Type",
  },
  {
    accessorKey: "executed_by",
    header: () => <div>Executer</div>,
    cell: ({ row }) => {
      const executerObject: Executer = row.getValue("executed_by");
      return executerObject.name;
    },
  },
  {
    accessorKey: "affected_table",
    header: "Affected Table",
  },
  {
    accessorKey: "execution_timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const timeString: string = row.getValue("execution_timestamp");
      return GetFormattedTime(timeString);
    },
  },
];
