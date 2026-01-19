import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ApprovalsTable } from "./ApprovalsTable/ApprovalsTable";
import type { ApprovalArray } from "@/app/backend/models/governance";

interface SheetApprovalsProps {
  approvals: ApprovalArray;
}

export function SheetApprovals({ approvals }: SheetApprovalsProps) {
  return (
    <SheetContent className="overflow-scroll">
      <SheetHeader>
        <SheetTitle className="text-2xl text-destructive">
          Pending Approvals
        </SheetTitle>
      </SheetHeader>
      <ApprovalsTable approvals={approvals} className="m-2" />
    </SheetContent>
  );
}
