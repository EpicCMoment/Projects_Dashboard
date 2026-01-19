import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { StatusBadge, type StatusBadgeVariant } from "./StatusBadge";
import { Badge } from "@/components/ui/badge";
import { TextLine } from "../../Utilities/TextLine";
import type { Project } from "../../../backend/models/project";
import { GetFormattedTime } from "../../../backend/models/sample-wrapper";

interface ProjectOverviewCardProps {
  project: Project | null;
}

export function ProjectOverviewCard({ project }: ProjectOverviewCardProps) {
  let createdAt = project?.created_at;

  if (createdAt !== undefined) {
    createdAt = GetFormattedTime(createdAt);
  } else {
    createdAt = "Not Assigned";
  }

  let updatedAt = project?.updated_at;

  if (updatedAt !== undefined) {
    updatedAt = GetFormattedTime(updatedAt);
  } else {
    updatedAt = "Not Assigned";
  }

  return (
    <>
      <Card className="bg-primary-foreground border-0 rounded-lg h-full p-4">
        <CardTitle className="text-2xl">
          {project?.project_name}
          <StatusBadge
            variant={
              project?.status
                ? (project?.status.toLowerCase() as StatusBadgeVariant)
                : "unknown"
            }
          />
        </CardTitle>
        <CardContent className="grid gap-2">
          <TextLine>
            Type: <b>{project?.project_type}</b>
          </TextLine>

          <TextLine>
            {" "}
            Owner:{" "}
            <b>
              {project?.owner ? (
                <>{project?.owner.name}</>
              ) : (
                <>Not Assigned</>
              )}{" "}
            </b>
          </TextLine>

          <TextLine>
            {" "}
            Governance Manager:{" "}
            <b>
              {project?.governance_manager ? (
                <>{project?.governance_manager.name}</>
              ) : (
                <>Not Assigned</>
              )}
            </b>
          </TextLine>

          <TextLine>
            Department:{" "}
            <Badge className="mx-2">{project?.department.name}</Badge>
          </TextLine>

          <TextLine>
            Created: <b>{createdAt}</b>
          </TextLine>

          <TextLine>
            Updated: <b>{updatedAt}</b>
          </TextLine>
        </CardContent>
      </Card>
    </>
  );
}
