import * as z from "zod";
import { SampleSchema } from "./models/sample-wrapper";
import sampleDataRaw from "./sample_data.json";
import { type Project, type ProjectArray } from "./models/project";
import { type TableArray } from "./models/table";
import type { OperationArray } from "./models/operation";

// because SampleSchema is an object, we need to infer its type
type SampleDataType = z.infer<typeof SampleSchema>;

let sampleDataParsed: SampleDataType;

try {
  sampleDataParsed = SampleSchema.parse(sampleDataRaw);
} catch (err) {
  console.log(err);
}

export function GetSampleData() {
  return sampleDataParsed;
}

export function GetSampleProjects(): ProjectArray {
  return sampleDataParsed.projects;
}

export function GetSampleProject(
  projectId: string | undefined
): Project | null {
  if (projectId === undefined) {
    return null;
  }

  let p = null;
  sampleDataParsed.projects.map((project) => {
    if (project.project_id === projectId) {
      p = project;
    }
  });

  return p;
}

export function GetSampleTables(projectId: string | undefined): TableArray {
  if (projectId === undefined) {
    return [];
  }
  return sampleDataParsed.project_tables[projectId];
}

export function GetSampleOperations(
  projectId: string | undefined
): OperationArray {
  if (projectId === undefined) {
    return [];
  }
  return sampleDataParsed.recent_operations[projectId];
}
