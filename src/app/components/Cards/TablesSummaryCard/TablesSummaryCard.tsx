import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { TableArray } from "@/app/backend/models/table";
import { TablesSummaryTable } from "./TablesSummaryTable/TablesSummaryTable";

interface TablesSummaryCardProps {
  tables: TableArray;
}

export function ProjectTablesCard({ tables }: TablesSummaryCardProps) {
  return (
    <Card className="bg-primary-foreground rounded-lg h-full border-0 p-4 col-span-2">
      <CardTitle className="text-2xl">Tables</CardTitle>
      <CardContent className="grid gap-2">
        <TablesSummaryTable tables={tables} />
      </CardContent>
    </Card>
  );
}
