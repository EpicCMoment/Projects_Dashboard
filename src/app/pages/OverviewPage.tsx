import { ProjectOverviewCard } from "../components/ProjectOverviewCard";
import { Layout } from "../layout/Layout";

import {
  GetSampleProject,
  GetSampleOperations,
  GetSampleTables,
} from "../backend/Backend";
import { ProjectTablesCard } from "../components/TablesSummaryCard";
import { RecentOperationsCard } from "../components/RecentOperationsCard";
import { useParams } from "react-router";

export function OverviewPage() {
  const params = useParams();
  const projectId = params.id;

  const project = GetSampleProject(projectId);
  const tables = GetSampleTables(projectId);
  const operations = GetSampleOperations(projectId);

  return (
    <Layout>
      <ProjectOverviewCard project={project} />
      <ProjectTablesCard tables={tables} />
      <RecentOperationsCard operations={operations} />
    </Layout>
  );
}
