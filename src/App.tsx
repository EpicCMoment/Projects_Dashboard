import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./app/pages/HomePage";
import { ProjectPage } from "./app/pages/ProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
