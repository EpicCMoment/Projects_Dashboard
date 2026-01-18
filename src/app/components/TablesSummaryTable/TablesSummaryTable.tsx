import { columns } from "./columns";
import { DataTable } from "./data-table";
import type { TableArray } from "@/app/backend/models/table";

interface TablesSummaryTableProps {
  tables: TableArray;
}

export function TablesSummaryTable({ tables }: TablesSummaryTableProps) {
  if (tables === undefined) {
    tables = [];
  }
  return <DataTable columns={columns} data={tables} />;
}
