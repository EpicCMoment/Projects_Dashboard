import { ProjectOverviewCard } from "../components/Cards/ProjectOverviewCard/ProjectOverviewCard";
import { Layout } from "../layout/Layout";

import {
  GetSampleProject,
  GetSampleOperations,
  GetSampleTables,
  GetSampleGovernance,
} from "../backend/Backend";
import { RecentOperationsCard } from "../components/Cards/RecentOperationsCard/RecentOperationsCard";
import { useParams } from "react-router";
import { ProjectTablesCard } from "@/app/components/Cards/TablesSummaryCard/TablesSummaryCard";
import { GovernanceCard } from "../components/Cards/GovernanceCard/GovernanceCard";

export function OverviewPage() {
  const params = useParams();
  const projectId = params.id;

  const project = GetSampleProject(projectId);
  const tables = GetSampleTables(projectId);
  const operations = GetSampleOperations(projectId);
  const governance = GetSampleGovernance(projectId);

  return (
    <Layout variant="grid">
      <ProjectOverviewCard project={project} />
      <ProjectTablesCard tables={tables} />
      <GovernanceCard governance={governance} />
      <RecentOperationsCard operations={operations} />
    </Layout>
  );
}
