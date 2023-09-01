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
          <label className="cbLabel">
          <input type="checkbox" />
          <div className="customCheckbox"></div>
          <div className="cbContent">
            <h4>Logotyp</h4>{" "}
            <p className="ingress">
              - Designa en logotyp som återspeglar varumärkets personlighet.{" "}
            </p>
            <ul>
              <li><p>Se till att logotypdesign fungerar för webb och tryck.</p></li>
              <li><p>Testa att den syns bra i små storlekar.</p></li>
            </ul>            
          </div>
          </label>
          <label className="cbLabel">
          <input type="checkbox" />
          <div className="customCheckbox"></div>
          <div className="cbContent">
            <h4>Färgpalett</h4>{" "}
            <p className="ingress">
              - Ta fram en enkel med flexibel färgpalett.{" "}
            </p>
            <ul>
              <li><p>Välj 1 huvudfärg, 2 primärfärger, 3-5 komplementfärger, och 2 accentfärger</p></li>              
            </ul>            
          </div>
          </label>
          <label className="cbLabel">
          <input type="checkbox" />
          <div className="customCheckbox"></div>
          <div className="cbContent">
            <h4>Typografi</h4>{" "}
            <p className="ingress">
              - Välj ett typsnitt som fungerar som en förlängning av din logotyp.{" "}
            </p>
            <ul>
              <li><p>Ta fram ett primärt, sekundärt och ett alternativt typsnitt.</p></li>
              <li><p>Prova blanda serif och sans serif.</p></li>
              <li><p>Testa läsbarheten i tryck och på skärm.</p></li>
            </ul>            
          </div>
          </label>
          <label className="cbLabel">
          <input type="checkbox" />
          <div className="customCheckbox"></div>
          <div className="cbContent">
            <h4>Fotografier</h4>{" "}
            <p className="ingress">
              - Använd en konsekvent och sammanhängande visuell stil.{" "}
            </p>
            <ul>
              <li><p>Se till att bilderna är av hög kvalitet och hög upplösning.</p></li>
              <li><p>Var uppmärksam på en inkluderande representation.</p></li>
            </ul>            
          </div>
          </label>
          <label className="cbLabel">
          <input type="checkbox" />
          <div className="customCheckbox"></div>
          <div className="cbContent">
            <h4>Illustrationer</h4>{" "}
            <p className="ingress">
              - Använd illustrationer för att visuellt förbättra, inte överväldiga.{" "}
            </p>
            <ul>
              <li><p>Välj en stil.</p></li>
              <li><p>Håll det enkelt.</p></li>
            </ul>            
          </div>
          </label>
          <label className="cbLabel">
          <input type="checkbox" />
          <div className="customCheckbox"></div>
          <div className="cbContent">
            <h4>Ikoner</h4>{" "}
            <p className="ingress">
              - Fokuser på enkelhet och tydlighet.{" "}
            </p>
            <ul>
              <li><p>Dubbelkolla att ikoner återges tydligt i små storlekar.</p></li>
              <li><p>Se till att bilden är relevant för ändamålet.</p></li>
            </ul>            
          </div>
          </label>
          <label className="cbLabel">
          <input type="checkbox" />
          <div className="customCheckbox"></div>
          <div className="cbContent">
            <h4>Datavisualisering</h4>{" "}
            <p className="ingress">
              - Designa för enkel förståelse.{" "}
            </p>
            <ul>
              <li><p>Undvik mönster som krockar (använd färg istället).</p></li>
              <li><p>Överillustrera eller använd inte 3D-diagram.</p></li>
              <li><p>Sortera/ordna data intuitivt (alfabetisk, stigande eller fallande).</p></li>
            </ul>            
          </div>
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
