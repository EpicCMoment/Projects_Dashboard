import type { Stakeholder } from "@/app/backend/models/governance";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Stakeholder>[] = [
  {
    accessorKey: "name",
    header: () => {
      return <div className="text-xl">Stakeholder</div>;
    },
  },
  {
    accessorKey: "role",
    header: () => {
      return <div className="text-xl">Role</div>;
    },
  },
];
