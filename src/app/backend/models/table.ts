import * as z from "zod";

const TableVersionSchema = z.object({
  table_version_id: z.string(),
  version_number: z.number(),
  row_count: z.number(),
  column_count: z.number(),
  is_materialized: z.boolean(),
  checkpoint_type: z.string().nullable(),
  created_at: z.string(),
  created_by: z.string(),
});

const ColumnSchema = z.object({
  column_id: z.string(),
  column_name: z.string(),
  display_name: z.string(),
  data_type: z.string(),
  role: z.string(),
});

export const TableSchema = z.object({
  project_table_id: z.string(),
  table_name: z.string(),
  display_name: z.string(),
  table_type: z.string(),
  current_version_id: z.string(),
  versions: z.array(TableVersionSchema),
  columns: z.array(ColumnSchema),
});

export const TableArraySchema = z.array(TableSchema);
export type TableArray = z.infer<typeof TableArraySchema>;
export type Table = z.infer<typeof TableSchema>;
export type TableVersion = z.infer<typeof TableVersionSchema>;
