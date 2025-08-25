import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrandAuditPage from "./pages/BrandAudit";
import AttributeSpectrumPage from "./pages/AttributeSpectrum";
import HomePage from "./pages/Home";
import CompetitorAuditPage from "./pages/CompetitorAudit";
import BrandBriefPage from "./pages/BrandBrief";
import BrandChecklistPage from "./pages/BrandChecklist";
import ScrollToTop from "./helpers/ScrollToTop";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <FormProvider>
      <div className="brandAudit">      
        <header>
          <a href="/"><img src="img/pure-design-logo.svg" alt="Pure Design" /></a>
        </header>
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
    </FormProvider>
  );
}

export default App;
