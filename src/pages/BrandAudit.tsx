import React from "react";
import { Link } from "react-router-dom";

export interface IBrandAuditProps {}

const print = () => window.print();

const BrandAuditPage: React.FunctionComponent<IBrandAuditProps> = (props) => {
  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Utvärdera ditt Varumärke</h1>
            <hr />
            <p className="ingress">
              Svara på dessa frågor för att utvärdera ditt nuvarande varumärke
              och skapa en ny varumärkesidentitet som kommer att stödja dina
              mål.
            </p>
          </div>
          <div>
            <img src="/img/audit.png" alt="image" />
          </div>
        </div>

        <div className="segment">
          <h3>Kärnidentitet</h3>
          <p className="ingress">
            Här beskriver du grundläggande delarna av ditt varumärke
          </p>
          <label>
            Företagsnamn
            <input type="text" />
          </label>
          <label>
            Vad gör du? <span>Besrkiv kortfattat din verksamhet</span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Varumärkets hjärta{" "}
            <span>
              Beskriv ditt syfte, din vision, ditt uppdrag och dina värderingar
            </span>
            <textarea rows={8}></textarea>
          </label>

          <label>
            Målgrupp <span>Vilka är dina målpersonas?</span>
            <textarea rows={8}></textarea>
          </label>

          <label>
            Konkurrens <span>Vilka är dina topp 3-5 konkurrenter</span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Viktiga differentiatorer{" "}
            <span>Vad gör dig annorlunda/bättre än dina konkurrenter?</span>
            <textarea rows={8}></textarea>
          </label>

          <label>
            Varumärkets personlighet{" "}
            <span>Hur beskriver du ditt varumärke?</span>
            <textarea rows={8}></textarea>
          </label>
        </div>

        <div className="segment">
          <h3>Verbal identitet</h3>
          <p className="ingress">Så här talar du om ditt varumärke</p>
          <label>
            Tagline <span>Hur sammanfattar du det du gör i en enda mening</span>
            <textarea rows={2}></textarea>
          </label>

          <label>
            Värdesproposition{" "}
            <span>
              Vilket unikt värde får kunderna av att köpa din produkt/tjänst?
            </span>
            <textarea rows={5}></textarea>
          </label>

          <label>
            Nyckelbudskap{" "}
            <span>
              Vilka är dina främsta försäljningsargument eller budskap?
            </span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Röst <span>Hur talar du i ditt innehåll?</span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Varumärkespersonlighet <span>Hur beskriver du ditt varumärke?</span>
            <textarea rows={6}></textarea>
          </label>
        </div>

        <div className="segment">
          <h3>Visuell Identitet</h3>
          <p className="ingress">
            <span className="underline">
              Om du redan har en visuell identitet
            </span>
            , granska din befintliga identitet och dokumentera vad funkar och
            inte fungera för de olika delarna
          </p>
          <label>
            Logotyp <span></span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Färgpalett <span></span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Typografi <span></span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Annat <span>Foton, illustrationer, video, etc.</span>
            <textarea rows={6}></textarea>
          </label>
        </div>

        <div className="segment">
          <h4>Kan den nuvarande identiteten...</h4>
          <label>
            Återspegla din personlighet? <span></span>
            <textarea rows={6}></textarea>
          </label>

          <label>
            Förhålla sig till/kommunicera dina värderingar?{" "}
            <textarea rows={6}></textarea>
          </label>

          <label>
            Få ditt varumärke att sticka ut/särskilja sig? <span></span>
            <textarea rows={6}></textarea>
          </label>

          <label className="vertical-align">
            Vilka är dina största förbättringsmöjligheter{" "}
            <span>
              Identifiera de saker du vill att din nya visuella identitet ska
              kommunicera.
            </span>
            <textarea rows={8}></textarea>
          </label>
        </div>
      </div>
      <footer>
      <button className="btn red" onClick={print}>
          Save as PDF
        </button>
        <Link className="btn" to="/competitoraudit">
          Konkurrensanalys
        </Link>
      </footer>
    </div>
  );
};

export default BrandAuditPage;
