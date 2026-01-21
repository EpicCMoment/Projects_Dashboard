import { Layout } from "../layout/Layout";

{
  /** An empty page */
}
export function HomePage() {
  return (
    <Layout variant="flex">
      <div>
        Please select a project from the sidebar or click{" "}
        <b>
          <a href="/projects">Projects</a>
        </b>
        .
      </div>
    </Layout>
  );
}
