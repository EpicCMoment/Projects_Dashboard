import * as z from "zod";

export const TableLineageSchema = z.object({
  child_table: z.string(),
  parent_table: z.string(),
  parent_type: z.string(),
});
