import type { Table, TableVersion } from "@/app/backend/models/table";
import { type ColumnDef } from "@tanstack/react-table";
import { BadgeCheck, BadgeX } from "lucide-react";

export const columns: ColumnDef<Table>[] = [
  {
    id: "checkpoint",
    header: "Checkpointed",
    accessorFn: (data) => data.versions.length > 0,
    cell: ({ row }) => {
      const rowData: Table = row.original;

      if (rowData.versions.length > 0) {
        return (
          <div className="flex justify-center">
            <BadgeCheck />
          </div>
        );
      }

      return (
        <div className="flex justify-center">
          <BadgeX />
        </div>
      );
    },
  },
  {
    accessorKey: "display_name",
    header: "Display Name",
  },
  {
    accessorKey: "table_name",
    header: "Table Name",
  },
  {
    accessorKey: "table_type",
    header: "Type",
    cell: ({ row }) => {
      return (
        row.original.table_type[0].toUpperCase() +
        row.original.table_type.slice(1)
      );
    },
  },
  {
    accessorKey: "current_version_id",
    header: "Current Version",
  },
  {
    id: "row_count",
    header: "Row Count",
    cell: ({ row }) => {
      const rowData: Table = row.original;

      let currentVersionTable: TableVersion = {} as TableVersion;

      rowData.versions.map((version) => {
        if (version.table_version_id === rowData.current_version_id) {
          currentVersionTable = version;
        }
      });

      if (currentVersionTable === undefined) {
        return null;
      }

      return currentVersionTable.row_count;
    },
  },
];
