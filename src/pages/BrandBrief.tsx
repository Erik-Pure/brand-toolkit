import React from "react";
import { Link } from "react-router-dom";

export interface IBrandBriefProps {}

const BrandBriefPage: React.FunctionComponent<IBrandBriefProps> = (props) => {
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
            <img src="/img/brief.png" alt="image" />
          </div>
        </div>

        <div className="segment">
          <label>
            Projektnamn
            <input type="text" />
          </label>
          <label>
            Projektöversikt
            <textarea rows={3}></textarea>
          </label>

          <label>
            Mål{" "}
            <span>
              Beskriv ditt syfte, din vision, ditt uppdrag och dina värderingar
            </span>
            <textarea rows={4}></textarea>
          </label>

          <label>
            Mätvärden för ett lyckat resultat
            <textarea rows={4}></textarea>
          </label>

          <label>
            Leverabler <span>Logotyp, färgpalett, typografi, m.m.</span>
            <textarea rows={4}></textarea>
          </label>

          <label>
            Huvudintressenter
            <textarea rows={3}></textarea>
          </label>

          <label>
            Målgrupp
            <textarea rows={3}></textarea>
          </label>
          <label>
            Nyckelattribut att förmedla i den nya identiteten
            <textarea rows={4}></textarea>
          </label>
          <label>
            Huvudbudskap
            <textarea rows={4}></textarea>
          </label>
          <label>
            Budget
            <textarea rows={4}></textarea>
          </label>
          <label>
            Tidsåtgång
            <textarea rows={4}></textarea>
          </label>
          <label>
            Specifikationer
            <textarea rows={4}></textarea>
          </label>
          <label>
            Annat att ha i åtanke{" "}
            <span>Länkar till inspiration, referensbilder m.m.</span>
            <textarea rows={4}></textarea>
          </label>
        </div>
      </div>
      <footer>
        <a href="#" className="btn red">
          Save as PDF
        </a>
        <Link className="btn" to="/brandchecklist">
          Checklista Grafisk Profil
        </Link>
      </footer>
    </div>
  );
};

export default BrandBriefPage;
