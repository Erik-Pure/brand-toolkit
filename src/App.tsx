import React from "react";
import "./App.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BrandAuditPage from "./pages/BrandAudit";
import AttributeSpectrumPage from "./pages/AttributeSpectrum";
import HomePage from "./pages/Home";
import CompetitorAuditPage from "./pages/CompetitorAudit";
import BrandBriefPage from "./pages/BrandBrief";
import BrandChecklistPage from "./pages/BrandChecklist";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <div className="brandAudit">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="brandaudit" element={<BrandAuditPage />} />
          <Route path="competitoraudit" element={<CompetitorAuditPage />} />
          <Route path="attributespectrum" element={<AttributeSpectrumPage />} />
          <Route path="brandbrief" element={<BrandBriefPage />} />
          <Route path="brandchecklist" element={<BrandChecklistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
