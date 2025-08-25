import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../context/FormContext";

interface IBrandBriefProps {}

const BrandBriefPage: React.FunctionComponent<IBrandBriefProps> = (props) => {
  const { formData, updateBrandBrief } = useForm();

  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Beskrivning av uppdraget för varumärket</h1>
            <hr />
            <p className="ingress">
              Använd denna uppdragsbeskrivning för att kommunicera den
              nyckelinformation som ditt team behöver för att kunna skapa en ny
              varumärkesidentitet.
            </p>
          </div>
          <div>
            <img src="/img/brief.png" alt="Brand brief illustration" />
          </div>
        </div>

        <div className="segment">
          <label>
            Projektnamn
            <input 
              type="text" 
              value={formData.brandBrief.projectName}
              onChange={(e) => updateBrandBrief('projectName', e.target.value)}
            />
          </label>
          <label>
            Projektöversikt
            <textarea 
              rows={4}
              value={formData.brandBrief.projectOverview}
              onChange={(e) => updateBrandBrief('projectOverview', e.target.value)}
            ></textarea>
          </label>

          <label>
            Mål{" "}
            <span>
              Beskriv ditt syfte, din vision, ditt uppdrag och dina värderingar
            </span>
            <textarea 
              rows={5}
              value={formData.brandBrief.goals}
              onChange={(e) => updateBrandBrief('goals', e.target.value)}
            ></textarea>
          </label>

          <label>
            Mätvärden för ett lyckat resultat
            <textarea 
              rows={5}
              value={formData.brandBrief.successMetrics}
              onChange={(e) => updateBrandBrief('successMetrics', e.target.value)}
            ></textarea>
          </label>

          <label>
            Leverabler <span>Logotyp, färgpalett, typografi, m.m.</span>
            <textarea 
              rows={5}
              value={formData.brandBrief.deliverables}
              onChange={(e) => updateBrandBrief('deliverables', e.target.value)}
            ></textarea>
          </label>

          <label>
            Huvudintressenter
            <textarea 
              rows={4}
              value={formData.brandBrief.stakeholders}
              onChange={(e) => updateBrandBrief('stakeholders', e.target.value)}
            ></textarea>
          </label>

          <label>
            Målgrupp
            <textarea 
              rows={4}
              value={formData.brandBrief.targetAudience}
              onChange={(e) => updateBrandBrief('targetAudience', e.target.value)}
            ></textarea>
          </label>
          <label>
            Nyckelattribut att förmedla i den nya identiteten
            <textarea 
              rows={4}
              value={formData.brandBrief.keyAttributes}
              onChange={(e) => updateBrandBrief('keyAttributes', e.target.value)}
            ></textarea>
          </label>
          <label>
            Huvudbudskap
            <textarea 
              rows={4}
              value={formData.brandBrief.mainMessage}
              onChange={(e) => updateBrandBrief('mainMessage', e.target.value)}
            ></textarea>
          </label>
          <label>
            Budget
            <textarea 
              rows={4}
              value={formData.brandBrief.budget}
              onChange={(e) => updateBrandBrief('budget', e.target.value)}
            ></textarea>
          </label>
          <label>
            Tidsåtgång
            <textarea 
              rows={4}
              value={formData.brandBrief.timeline}
              onChange={(e) => updateBrandBrief('timeline', e.target.value)}
            ></textarea>
          </label>
          <label>
            Specifikationer
            <textarea 
              rows={4}
              value={formData.brandBrief.specifications}
              onChange={(e) => updateBrandBrief('specifications', e.target.value)}
            ></textarea>
          </label>
          <label>
            Annat att ha i åtanke{" "}
            <span>Länkar till inspiration, referensbilder m.m.</span>
            <textarea 
              rows={4}
              value={formData.brandBrief.otherConsiderations}
              onChange={(e) => updateBrandBrief('otherConsiderations', e.target.value)}
            ></textarea>
          </label>
        </div>
      </div>
      <footer>
        <button className="btn red" onClick={() => window.print()}>
          Save as PDF
        </button>
        <Link className="btn" to="/brandchecklist">
          Checklista Grafisk Profil
        </Link>
      </footer>
    </div>
  );
};

export default BrandBriefPage;
