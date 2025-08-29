import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../context/FormContext";

interface IBrandAuditProps {}

const print = () => window.print();

const BrandAuditPage: React.FunctionComponent<IBrandAuditProps> = (props) => {
  const { formData, updateBrandAudit } = useForm();

  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Utvärdera ditt Varumärke</h1>
            <hr />
            <p className="ingress">
            Svara på frågorna för att utvärdera ditt varumärke
            och skapa en ny identitet som stödjer dina mål.
            </p>
          </div>
          <div>
            <img src="/img/audit.png" alt="Brand audit illustration" />
          </div>
        </div>

        <div className="segment">
          <h3>Kärnidentitet</h3>
          <p className="ingress">
            Här beskriver du grundläggande delarna av ditt varumärke
          </p>
          <label>
            Företagsnamn
            <input 
              type="text" 
              value={formData.brandAudit.companyName}
              onChange={(e) => updateBrandAudit('companyName', e.target.value)}
            />
          </label>
          <label>
            Verksamhetsbeskrivning <span>Beskriv kortfattat vad du gör</span>
            <textarea 
              rows={6}
              value={formData.brandAudit.whatYouDo}
              onChange={(e) => updateBrandAudit('whatYouDo', e.target.value)}
            ></textarea>
          </label>

          <label>
            Varumärkets kärna{" "}
            <span>
              Beskriv ditt syfte, din vision, ditt uppdrag och dina värderingar
            </span>
            <textarea 
              rows={8}
              value={formData.brandAudit.brandHeart}
              onChange={(e) => updateBrandAudit('brandHeart', e.target.value)}
            ></textarea>
          </label>

          <label>
            Målgrupp <span>Vilka är dina målpersonas?</span>
            <textarea 
              rows={8}
              value={formData.brandAudit.targetAudience}
              onChange={(e) => updateBrandAudit('targetAudience', e.target.value)}
            ></textarea>
          </label>

          <label>
            Konkurrenter <span>Vilka är dina 3-5 främsta konkurrenter</span>
            <textarea 
              rows={6}
              value={formData.brandAudit.competition}
              onChange={(e) => updateBrandAudit('competition', e.target.value)}
            ></textarea>
          </label>

          <label>
            Särskiljande egenskaper{" "}
            <span>Vad gör dig unik jämfört med dina konkurrenter?</span>
            <textarea 
              rows={8}
              value={formData.brandAudit.differentiators}
              onChange={(e) => updateBrandAudit('differentiators', e.target.value)}
            ></textarea>
          </label>

          <label>
            Varumärkets karaktär{" "}
            <span>Hur skulle du beskriva ditt varumärkes personlighet?</span>
            <textarea 
              rows={8}
              value={formData.brandAudit.brandPersonality}
              onChange={(e) => updateBrandAudit('brandPersonality', e.target.value)}
            ></textarea>
          </label>
        </div>

        <div className="segment">
          <h3>Verbal identitet</h3>
          <p className="ingress">Så här talar du om ditt varumärke</p>
          <label>
            Slogan <span>Hur sammanfattar du det du gör i en mening</span>
            <textarea 
              rows={2}
              value={formData.brandAudit.tagline}
              onChange={(e) => updateBrandAudit('tagline', e.target.value)}
            ></textarea>
          </label>

          <label>
            Kundvärde{" "}
            <span>
              Vilket unikt värde får kunderna av att välja dig?
            </span>
            <textarea 
              rows={5}
              value={formData.brandAudit.valueProposition}
              onChange={(e) => updateBrandAudit('valueProposition', e.target.value)}
            ></textarea>
          </label>

          <label>
            Huvudbudskap{" "}
            <span>
              Vilka är dina viktigaste försäljningsargument?
            </span>
            <textarea 
              rows={6}
              value={formData.brandAudit.keyMessages}
              onChange={(e) => updateBrandAudit('keyMessages', e.target.value)}
            ></textarea>
          </label>

          <label>
            Röst <span>Hur talar du i ditt innehåll?</span>
            <textarea 
              rows={6}
              value={formData.brandAudit.voice}
              onChange={(e) => updateBrandAudit('voice', e.target.value)}
            ></textarea>
          </label>

          <label>
            Varumärkets karaktär <span>Hur beskriver du ditt varumärkes personlighet?</span>
            <textarea 
              rows={6}
              value={formData.brandAudit.brandPersonality2}
              onChange={(e) => updateBrandAudit('brandPersonality2', e.target.value)}
            ></textarea>
          </label>
        </div>

        <div className="segment">
          <h3>Visuell Identitet</h3>
          <p className="ingress">
            <span className="underline">
              Om du redan har en visuell identitet
            </span>
            , granska din befintliga identitet och dokumentera vad som fungerar och
            vad som inte fungerar för de olika delarna
          </p>
          <label>
            Logotyp <span></span>
            <textarea 
              rows={6}
              value={formData.brandAudit.logo}
              onChange={(e) => updateBrandAudit('logo', e.target.value)}
            ></textarea>
          </label>

          <label>
            Färgpalett <span></span>
            <textarea 
              rows={6}
              value={formData.brandAudit.colorPalette}
              onChange={(e) => updateBrandAudit('colorPalette', e.target.value)}
            ></textarea>
          </label>

          <label>
            Typografi <span></span>
            <textarea 
              rows={6}
              value={formData.brandAudit.typography}
              onChange={(e) => updateBrandAudit('typography', e.target.value)}
            ></textarea>
          </label>

          <label>
            Annat <span>Bilder, illustrationer, video, etc.</span>
            <textarea 
              rows={6}
              value={formData.brandAudit.other}
              onChange={(e) => updateBrandAudit('other', e.target.value)}
            ></textarea>
          </label>
        </div>

        <div className="segment">
          <h4>Kan den nuvarande identiteten...</h4>
          <label>
            Återspegla din personlighet? <span></span>
            <textarea 
              rows={6}
              value={formData.brandAudit.reflectPersonality}
              onChange={(e) => updateBrandAudit('reflectPersonality', e.target.value)}
            ></textarea>
          </label>

          <label>
            Kommunicera dina värderingar?{" "}
            <textarea 
              rows={6}
              value={formData.brandAudit.communicateValues}
              onChange={(e) => updateBrandAudit('communicateValues', e.target.value)}
            ></textarea>
          </label>

          <label>
            Få ditt varumärke att sticka ut/särskilja sig? <span></span>
            <textarea 
              rows={6}
              value={formData.brandAudit.standOut}
              onChange={(e) => updateBrandAudit('standOut', e.target.value)}
            ></textarea>
          </label>

          <label className="vertical-align">
            Vilka är dina största förbättringsområden{" "}
            <span>
              Identifiera vad du vill att din nya visuella identitet ska
              kommunicera.
            </span>
            <textarea 
              rows={8}
              value={formData.brandAudit.improvementOpportunities}
              onChange={(e) => updateBrandAudit('improvementOpportunities', e.target.value)}
            ></textarea>
          </label>
        </div>
      </div>
      <footer>
        <button className="btn red" onClick={print}>
          Spara som PDF
        </button>
        <Link className="btn" to="/competitoraudit">
          Konkurrensanalys
        </Link>
      </footer>
    </div>
  );
};

export default BrandAuditPage;
