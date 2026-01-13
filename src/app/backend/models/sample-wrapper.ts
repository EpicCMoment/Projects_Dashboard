import * as z from "zod";

import { ProjectSchema } from "./project";
import { GovernanceSchema } from "./governance";
import { TableLineageSchema } from "./table_lineage";
import { TableSchema } from "./table";
import { OperationSchema } from "./operation";

export const SampleSchema = z.object({
  projects: z.array(ProjectSchema),
  project_tables: z.record(z.string(), z.array(TableSchema)),
  recent_operations: z.record(z.string(), z.array(OperationSchema)),
  governance: z.record(z.string(), GovernanceSchema),
  table_lineage: z.record(z.string(), z.array(TableLineageSchema)),
});
