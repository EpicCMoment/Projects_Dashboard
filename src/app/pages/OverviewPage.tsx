import { ProjectOverviewCard } from "../components/Cards/ProjectOverviewCard/ProjectOverviewCard";
import { Layout } from "../layout/Layout";

import {
  GetSampleProject,
  GetSampleOperations,
  GetSampleTables,
} from "../backend/Backend";
import { RecentOperationsCard } from "../components/Cards/RecentOperationsCard/RecentOperationsCard";
import { useParams } from "react-router";
import { ProjectTablesCard } from "@/app/components/Cards/TablesSummaryCard/TablesSummaryCard";

export function OverviewPage() {
  const params = useParams();
  const projectId = params.id;

  const project = GetSampleProject(projectId);
  const tables = GetSampleTables(projectId);
  const operations = GetSampleOperations(projectId);

  return (
    <Layout variant="grid">
      <ProjectOverviewCard project={project} />
      <ProjectTablesCard tables={tables} />
      <RecentOperationsCard operations={operations} />
    </Layout>
  );
}
