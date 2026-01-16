import { Routes, Route } from "react-router";
import "./App.css";
import { OverviewPage } from "./app/pages/OverviewPage";
import { HomePage } from "./app/pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/projects/:id" element={<OverviewPage />} />
      </Routes>
    </>
  );
}

export default App;
