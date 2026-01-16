import * as z from "zod";

const ExecuterSchema = z.object({
  user_id: z.string(),
  name: z.string(),
});

export const OperationSchema = z.object({
  operation_log_id: z.string(),
  operation_type: z.string(),
  operation_name: z.string(),
  input_parameters: z.object(),
  executed_by: ExecuterSchema,
  execution_timestamp: z.string(),
  affected_table: z.string(),
  output_table_version: z.string().nullable(),
});

export const OperationArraySchema = z.array(OperationSchema);

export type OperationArray = z.infer<typeof OperationArraySchema>;
export type Operation = z.infer<typeof OperationSchema>;
export type Executer = z.infer<typeof ExecuterSchema>;
