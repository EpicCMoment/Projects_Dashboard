import { ProjectsListingCard } from "../components/Cards/ProjectsListingCard/ProjectsListingCard";
import { Layout } from "../layout/Layout";

export function ProjectsPage() {
  return (
    <Layout variant="flex">
      <ProjectsListingCard />
    </Layout>
  );
}
