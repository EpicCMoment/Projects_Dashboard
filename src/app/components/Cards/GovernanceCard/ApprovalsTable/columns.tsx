import type { Approval, Approver } from "@/app/backend/models/governance";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Approval>[] = [
  {
    accessorKey: "approver_name",
    header: () => {
      return <div className="text-xl">Approver</div>;
    },
    cell: ({ row }) => {
      const data: Approver = row.original.approver;

      return data.name;
    },
  },
  {
    accessorKey: "approval_type",
    header: () => {
      return <div className="text-xl">Type</div>;
    },
  },
];
