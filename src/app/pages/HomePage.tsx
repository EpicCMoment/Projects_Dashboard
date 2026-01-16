import { ProjectOverviewCard } from "../components/ProjectOverviewCard";
import { Layout } from "../layout/Layout";

import {
  GetSampleProject,
  GetSampleOperations,
  GetSampleTables,
} from "../backend/Backend";
import { ProjectTablesCard } from "../components/TablesSummaryCard";
import { RecentOperationsCard } from "../components/RecentOperationsCard";

export function HomePage() {
  const projID = "proj-001";

  const project = GetSampleProject(projID);
  const tables = GetSampleTables(projID);
  const operations = GetSampleOperations(projID);

  return (
    <Layout>
      <ProjectOverviewCard project={project} />
      <ProjectTablesCard tables={tables} />
      <RecentOperationsCard operations={operations} />
    </Layout>
  );
}
