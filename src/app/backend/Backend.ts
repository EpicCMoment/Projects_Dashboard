import * as z from "zod";
import { SampleSchema } from "./models/sample-wrapper";
import sampleDataRaw from "./sample_data.json";
import { type Project } from "./models/project";
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

export function GetSampleProject(projectId: string): Project | null {
  let p = null;
  sampleDataParsed.projects.map((project) => {
    if (project.project_id === projectId) {
      p = project;
    }
  });

  return p;
}

export function GetSampleTables(projectId: string): TableArray {
  return sampleDataParsed.project_tables[projectId];
}

export function GetSampleOperations(projectId: string): OperationArray {
  return sampleDataParsed.recent_operations[projectId];
}
