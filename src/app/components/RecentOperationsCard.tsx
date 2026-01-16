import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { OperationArray } from "../backend/models/operation";
import { RecentOperationsTable } from "./RecentOperationsTable/RecentOperationsTable";

interface RecentOperationsCardProps {
  operations: OperationArray;
}

export function RecentOperationsCard({
  operations,
}: RecentOperationsCardProps) {
  return (
    <Card className="bg-primary-foreground rounded-lg min-h-100 h-full border-0 p-4 col-span-2">
      <CardTitle className="text-2xl">Recent Operations</CardTitle>
      <CardContent className="grid gap-2">
        <RecentOperationsTable operations={operations} />
      </CardContent>
    </Card>
  );
}
