import type { Table, TableVersion } from "@/app/backend/models/table";
import { type ColumnDef } from "@tanstack/react-table";
import { GetCheckpointBadge } from "./utils";

export const columns: ColumnDef<Table>[] = [
  {
    id: "checkpoint",
    header: "Checkpointed",
    accessorFn: (data) => data.versions.length > 0,
    cell: ({ row }) => {
      const rowData: Table = row.original;
      const currentTableVersionId = rowData.current_version_id;

      let currentTableVersion: TableVersion = {} as TableVersion;

      rowData.versions.map((version) => {
        if (version.table_version_id === currentTableVersionId) {
          currentTableVersion = version;
        }
      });

      return GetCheckpointBadge(currentTableVersion);
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
    id: "col_count",
    header: "Columns",
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

      return currentVersionTable.column_count;
    },
  },
  {
    id: "row_count",
    header: "Rows",
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
