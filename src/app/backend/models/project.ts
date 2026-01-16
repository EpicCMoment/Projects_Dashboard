import * as z from "zod";

const UserSchema = z.object({
  user_id: z.string(),
  name: z.string(),
});

const OwnerSchema = UserSchema.extend({
  title: z.string(),
});

const DepartmentSchema = z.object({
  department_id: z.string(),
  name: z.string(),
});

export const ProjectSchema = z.object({
  project_id: z.string(),
  project_name: z.string(),
  project_type: z.string(),
  status: z.string(),
  owner: OwnerSchema,
  governance_manager: UserSchema.nullable(),
  department: DepartmentSchema,
  is_segmented: z.boolean(),
  objectives: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;
export type ProjectArray = Project[];
