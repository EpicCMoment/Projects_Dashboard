import type { StakeholderArray } from "@/app/backend/models/governance";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { StakeholdersTable } from "./StakeholdersTable/StakeholdersTable";

interface SheetStakeholdersProps {
  stakeholders: StakeholderArray;
}

export function SheetStakeholders({ stakeholders }: SheetStakeholdersProps) {
  return (
    <SheetContent className="overflow-scroll">
      <SheetHeader>
        <SheetTitle className="text-2xl">Stakeholders</SheetTitle>
      </SheetHeader>
      <StakeholdersTable stakeholders={stakeholders} className="m-2" />
    </SheetContent>
  );
}
