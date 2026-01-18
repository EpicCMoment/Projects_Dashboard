import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { GetSampleProjects } from "../../backend/Backend";
import { TextLine } from "../Utilities/TextLine";

export function ProjectsListingCard() {
  return (
    <div className="flex items-center justify-center">
      <Card className="bg-primary-foreground rounded-lg h-full border-0 p-4 w-fit">
        <CardTitle className="text-2xl">Projects</CardTitle>
        <CardContent className="grid gap-2">
          {GetSampleProjects().map((project) => {
            return (
              <TextLine key={project.project_id}>
                <a href={"/projects/" + project.project_id}>
                  {project.project_name}
                </a>
              </TextLine>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
