import { columns } from "./columns";
import { ApprovalsDataTable } from "./ApprovalsDataTable";
import type { ApprovalArray } from "@/app/backend/models/governance";

interface ApprovalsTableProps {
  approvals: ApprovalArray;
  className?: string;
}

export function ApprovalsTable({ approvals, className }: ApprovalsTableProps) {
  if (approvals === undefined) {
    approvals = [];
  }
  return (
    <ApprovalsDataTable
      className={className}
      columns={columns}
      data={approvals}
    />
  );
}
