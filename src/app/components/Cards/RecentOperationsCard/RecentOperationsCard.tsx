import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { OperationArray } from "../../../backend/models/operation";
import { RecentOperations } from "./RecentOperations/RecentOperations";

interface RecentOperationsCardProps {
  operations: OperationArray;
}

export function RecentOperationsCard({
  operations,
}: RecentOperationsCardProps) {
  return (
    <Card className="bg-primary-foreground rounded-lg border-0 p-4 col-span-2">
      <CardTitle className="text-2xl">Recent Operations</CardTitle>
      <CardContent className="grid gap-2">
        <RecentOperations operations={operations} />
      </CardContent>
    </Card>
  );
}
