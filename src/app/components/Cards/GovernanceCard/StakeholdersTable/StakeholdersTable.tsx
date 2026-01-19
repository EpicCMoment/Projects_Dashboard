import { columns } from "./columns";
import { StakeholdersDataTable } from "./StakeholdersDataTable";
import type { StakeholderArray } from "@/app/backend/models/governance";

interface StakeholdersTableProps {
  stakeholders: StakeholderArray;
  className?: string;
}

export function StakeholdersTable({
  stakeholders,
  className,
}: StakeholdersTableProps) {
  if (stakeholders === undefined) {
    stakeholders = [];
  }
  return (
    <StakeholdersDataTable
      className={className}
      columns={columns}
      data={stakeholders}
    />
  );
}
