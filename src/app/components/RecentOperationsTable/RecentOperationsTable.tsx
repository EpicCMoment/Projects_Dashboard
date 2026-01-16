import type { OperationArray } from "../../backend/models/operation";
import { columns } from "./columns";
import { DataTable } from "./operations-table";

interface RecentOperationsTableProps {
  operations: OperationArray;
}

export function RecentOperationsTable({
  operations,
}: RecentOperationsTableProps) {
  if (operations === undefined) {
    operations = [];
  }
  return <DataTable columns={columns} data={operations} />;
}
