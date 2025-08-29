import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../context/FormContext";

interface IBrandChecklistProps {}

const BrandChecklistPage: React.FunctionComponent<IBrandChecklistProps> = (
  props
) => {
  const { formData, updateBrandChecklist } = useForm();

  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Checklista Grafisk Profil</h1>
            <hr />
            <p>
              Använd den här checklistan för att säkerställa att du har designat
              en komplett och sammanhållen identitet.
            </p>
          </div>
          <div>
            <img src="/img/checklist.png" alt="Brand checklist illustration" />
          </div>
        </div>

        <div className="segment">
          <label className="cbLabel">
            <input 
              type="checkbox" 
              checked={formData.brandChecklist.logo}
              onChange={(e) => updateBrandChecklist('logo', e.target.checked)}
            />
            <div className="customCheckbox"></div>
            <h4>Logotyp</h4>          
          </label>
          <div className="cbContent">
            <p>
              - Designa en logotyp som återspeglar varumärkets personlighet.{" "}
            </p>
            <ul>
              <li><p>Se till att logotypdesign fungerar för webb och tryck.</p></li>
              <li><p>Testa att den syns bra i små storlekar.</p></li>
            </ul>            
          </div>
          
          <label className="cbLabel">
            <input 
              type="checkbox" 
              checked={formData.brandChecklist.colorPalette}
              onChange={(e) => updateBrandChecklist('colorPalette', e.target.checked)}
            />
            <div className="customCheckbox"></div>
            <h4>Färgpalett</h4>          
          </label>
          <div className="cbContent">            
            <p>
              - Ta fram en enkel med flexibel färgpalett.{" "}
            </p>
            <ul>
              <li><p>Välj 1 huvudfärg, 2 primärfärger, 3-5 komplementfärger, och 2 accentfärger</p></li>              
            </ul>            
          </div>
          
          <label className="cbLabel">
            <input 
              type="checkbox" 
              checked={formData.brandChecklist.typography}
              onChange={(e) => updateBrandChecklist('typography', e.target.checked)}
            />
            <div className="customCheckbox"></div>
            <h4>Typografi</h4>          
          </label>
          <div className="cbContent">
            <p>
              - Välj typsnitt som stödjer varumärkets personlighet.{" "}
            </p>
            <ul>
              <li><p>Välj 1-2 huvudtypsnitt för rubriker och 1-2 för brödtext</p></li>
              <li><p>Se till att typsnitten är läsbara i olika storlekar</p></li>
            </ul>            
          </div>
          
          <label className="cbLabel">
            <input 
              type="checkbox" 
              checked={formData.brandChecklist.imagery}
              onChange={(e) => updateBrandChecklist('imagery', e.target.checked)}
            />
            <div className="customCheckbox"></div>
            <h4>Bildmaterial</h4>          
          </label>
          <div className="cbContent">
            <p>
              - Skapa riktlinjer för fotografi och illustrationer.{" "}
            </p>
            <ul>
              <li><p>Definiera stil, färger, komposition och ton</p></li>
              <li><p>Skapa en samling med referensbilder</p></li>
            </ul>            
          </div>
          
          <label className="cbLabel">
            <input 
              type="checkbox" 
              checked={formData.brandChecklist.applications}
              onChange={(e) => updateBrandChecklist('applications', e.target.checked)}
            />
            <div className="customCheckbox"></div>
            <h4>Tillämpningar</h4>          
          </label>
          <div className="cbContent">
            <p>
              - Testa identiteten på olika medier.{" "}
            </p>
            <ul>
              <li><p>Webb, sociala medier, tryck, kläder, etc.</p></li>
              <li><p>Se till att den fungerar i både färg och svartvitt</p></li>
            </ul>            
          </div>
          
          <label className="cbLabel">
            <input 
              type="checkbox" 
              checked={formData.brandChecklist.guidelines}
              onChange={(e) => updateBrandChecklist('guidelines', e.target.checked)}
            />
            <div className="customCheckbox"></div>
            <h4>Riktlinjer</h4>          
          </label>
          <div className="cbContent">
            <p>
              - Dokumentera alla riktlinjer.{" "}
            </p>
            <ul>
              <li><p>Skapa en varumärkesmanual med alla regler</p></li>
              <li><p>Inkludera exempel på rätt och fel användning</p></li>
            </ul>            
          </div>
          
          <label className="cbLabel">
            <input 
              type="checkbox" 
              checked={formData.brandChecklist.testing}
              onChange={(e) => updateBrandChecklist('testing', e.target.checked)}
            />
            <div className="customCheckbox"></div>
            <h4>Testning</h4>          
          </label>
          <div className="cbContent">
            <p>
              - Testa identiteten med målgruppen.{" "}
            </p>
            <ul>
              <li><p>Samla feedback från potentiella kunder</p></li>
              <li><p>Se till att identiteten kommunicerar rätt budskap</p></li>
            </ul>            
          </div>
        </div>
      </div>
      <footer>
        <button className="btn red" onClick={() => window.print()}>
          Spara som PDF
        </button>
        <Link className="btn" to="/">
          Tillbaka till start
        </Link>
      </footer>
    </div>
  );
};

export default BrandChecklistPage;
