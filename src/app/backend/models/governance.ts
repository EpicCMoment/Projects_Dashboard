import * as z from "zod";

const UserSchema = z.object({
  user_id: z.string(),
  name: z.string(),
});

const ApproverSchema = UserSchema.extend({
  role: z.string(),
});

const StakeholderSchema = ApproverSchema;

const ApprovalSchema = z.object({
  approval_id: z.string(),
  approval_type: z.string(),
  status: z.string(),
  approver: ApproverSchema,
  requested_by: UserSchema.optional(),
  created_at: z.string().optional(),
  comments: z.string().nullable(),
});
const ComplienceChecklistSchema = z.object({
  checklist_id: z.string(),
  template_name: z.string(),
  status: z.string(),
  completion_percentage: z.number(),
  total_items: z.number(),
  completed_items: z.number(),
  assigned_to: UserSchema,
});

export const GovernanceSchema = z.object({
  approvals: z.array(ApprovalSchema),
  compliance_checklist: ComplienceChecklistSchema.nullable(),
  stakeholders: z.array(StakeholderSchema),
});

export type Governance = z.infer<typeof GovernanceSchema>;
export type Stakeholder = z.infer<typeof StakeholderSchema>;
export type StakeholderArray = Stakeholder[];
export type Approval = z.infer<typeof ApprovalSchema>;
export type ApprovalArray = Approval[];
export type Approver = z.infer<typeof ApproverSchema>;
