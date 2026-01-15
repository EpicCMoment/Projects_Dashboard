import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { GetSampleData } from "../backend/Backend";
import { StatusBadge } from "./StatusBadge";
import { date } from "zod";
import { Badge } from "@/components/ui/badge";
import { TextLine } from "./TextLine";

interface ProjectOverviewCardProps {
  projectId: string;
}

function getFormattedTime(dateString: string): string {
  const dateObj = new Date(dateString);

  try {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(dateObj);

    return formattedDate;
  } catch (err) {
    console.log(err);
    return "Error parsing the date";
  }
}

export function ProjectOverviewCard({ projectId }: ProjectOverviewCardProps) {
  const sampleData = GetSampleData();

  const projectProperties = sampleData.projects.find((project) => {
    return project.project_id === projectId;
  });

  let createdAt = projectProperties?.created_at;

  if (createdAt !== undefined) {
    createdAt = getFormattedTime(createdAt);
  } else {
    createdAt = "Not Assigned";
  }

  let updatedAt = projectProperties?.updated_at;

  if (updatedAt !== undefined) {
    updatedAt = getFormattedTime(updatedAt);
  } else {
    updatedAt = "Not Assigned";
  }

  return (
    <>
      <Card className="bg-primary-foreground rounded-lg h-full border-0 p-4">
        <CardTitle className="text-2xl">
          {projectProperties?.project_name}
          <StatusBadge variant={projectProperties?.status.toLowerCase()} />
        </CardTitle>
        <CardContent className="grid gap-2">
          <TextLine>
            Type: <b>{projectProperties?.project_type}</b>
          </TextLine>

          <TextLine>
            {" "}
            Owner:{" "}
            <b>
              {projectProperties?.owner ? (
                <>{projectProperties.owner.name}</>
              ) : (
                <>Not Assigned</>
              )}{" "}
            </b>
          </TextLine>

          <TextLine>
            {" "}
            Governance Manager:{" "}
            <b>
              {projectProperties?.governance_manager ? (
                <>{projectProperties.governance_manager.name}</>
              ) : (
                <>Not Assigned</>
              )}
            </b>
          </TextLine>

          <TextLine>
            Department:{" "}
            <Badge className="mx-2">{projectProperties?.department.name}</Badge>
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
