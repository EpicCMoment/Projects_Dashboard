import type {
  ApprovalArray,
  Governance,
  StakeholderArray,
} from "@/app/backend/models/governance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextLine } from "../../Utilities/TextLine";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SheetStakeholders } from "./SheetStakeholders";
import { SheetApprovals } from "./SheetApprovals";

interface GovernanceCardProps {
  governance: Governance | null;
}

type contentVariants = "approvals" | "stakeholders";
type contentTuple = [contentVariants, ApprovalArray | StakeholderArray];

export function GovernanceCard({ governance }: GovernanceCardProps) {
  // this state passes the Approvals or Stakeholders
  // arrays to the sheet
  const [sheetContent, setSheetContent] = useState<contentTuple>();

  if (governance === null || governance.approvals.length === 0) {
    return (
      <Card className="bg-primary-foreground border-0 rounded-lg h-full p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Governance Status</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <div className="flex justify-center mb-8 text-destructive">
          Governance information not found!
        </div>
      </Card>
    );
  }

  let pendingApprCount = 0;
  const pendingApprovals = [] as ApprovalArray;
  governance.approvals.map((approval) => {
    if (approval.status === "Pending") {
      pendingApprovals.push(approval);
      pendingApprCount++;
    }
  });

  return (
    <Card className="bg-primary-foreground border-0 rounded-lg h-full p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Governance Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {governance.compliance_checklist?.template_name}
          <div className="flex items-center gap-2">
            <Progress
              value={governance.compliance_checklist?.completion_percentage}
            />
            <div className="text-l text-nowrap">
              {governance.compliance_checklist?.completion_percentage}%
              Completed
            </div>
          </div>
        </div>

        <Sheet>
          <SheetTrigger
            asChild
            className="cursor-pointer"
            onClick={() => {
              setSheetContent(["approvals", pendingApprovals]);
            }}
          >
            <div className="my-2">
              <TextLine>
                <b>Pending Approvals:</b>{" "}
                <span className="text-lg text-destructive">
                  {pendingApprCount}
                </span>
              </TextLine>
            </div>
          </SheetTrigger>

          <SheetTrigger
            asChild
            className="cursor-pointer"
            onClick={() => {
              setSheetContent(["stakeholders", governance.stakeholders]);
            }}
          >
            <div className="my-2">
              <TextLine>
                <b>Stakeholders:</b>{" "}
                <span className="text-lg">
                  {governance.stakeholders.length}
                </span>
              </TextLine>
            </div>
          </SheetTrigger>

          {sheetContent?.[0] === "approvals" ? (
            <SheetApprovals approvals={pendingApprovals} />
          ) : (
            <SheetStakeholders stakeholders={governance.stakeholders} />
          )}
        </Sheet>
      </CardContent>
    </Card>
  );
}
