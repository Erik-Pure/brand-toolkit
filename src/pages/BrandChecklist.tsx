import React from "react";
import { Link } from "react-router-dom";

export interface IBrandChecklistProps {}

const BrandChecklistPage: React.FunctionComponent<IBrandChecklistProps> = (
  props
) => {
  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Checklista Grafisk Profil</h1>
            <hr />
            <p className="ingress">
              Använd den här checklistan för att säkerställa att du har designat
              en komplett och sammanhållen identitet.
            </p>
          </div>
          <div>
            <img src="/img/checklist.png" alt="image" />
          </div>
        </div>

        <div className="segment">
          <label>
            <h4>Logotyp</h4>
            <p className="ingress">
              Designa en logotyp som speglar ditt varumärkes personlighet.{" "}
            </p>
            <ul>
              <li>Se till att logotypdesign fungerar för webb och tryck.</li>
              <li>Testa att den syns bra i små storlekar.</li>
            </ul>
            <input type="checkbox" />
          </label>
        </div>
      </div>
      <footer>
        <a href="#" className="btn red">
          Save as PDF
        </a>
      </footer>
    </div>
  );
};

export default BrandChecklistPage;
