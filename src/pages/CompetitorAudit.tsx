import React from "react";
import { Link } from "react-router-dom";

export interface ICompetitorAuditProps {}

const print = () => window.print();

const CompetitorAuditPage: React.FunctionComponent<ICompetitorAuditProps> = (
  props
) => {
  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Analys av Konkurrenter</h1>
            <hr />
            <p className="ingress">
              Använd den här mallen för att granska dina konkurrenters
              varumärkesidentiteter och identifiera möjligheter att särskilja
              din egen identitet.
            </p>
          </div>
          <div>
            <img src="/img/comp.png" alt="image" />
          </div>
        </div>

        <div className="segment">
          <p className="ingress">
            För att slutföra den här övningen granskar du
            varumärkesidentiteterna för dina topp 3 konkurrenter. Granska en
            konkurrent i taget och dokumentera dina resultat allt eftersom. För
            att få en känsla av varje varumärkes identitet, ta en titt på deras
            webbplats, sociala medieprofiler, etc.
          </p>
          <table cellSpacing="0">
            <thead>
              <tr>
                <th></th>
                <th>
                  Konkurrent 1
                  <input type="text" />
                </th>
                <th>
                  Konkurrent 2
                  <input type="text" />
                </th>
                <th>
                  Konkurrent 3
                  <input type="text" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label>
                    Logotyp:{" "}
                    <span>
                      Vilka former/bilder använder de? Använder de ett word
                      mark, logotyp eller båda?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea rows={4}></textarea>
                </td>
                <td>
                  <textarea rows={4}></textarea>
                </td>
                <td>
                  <textarea rows={4}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Typografi:{" "}
                    <span>
                      Vilka dominerande typsnitt använder de (serif vs. sans
                      serif)? Vilka vikter använder de (lätt, vanlig, fet)?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Färgpalett:{" "}
                    <span>
                      Vilka dominerande färger använder de? Är de lika andra
                      konkurrenter?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Foton:{" "}
                    <span>Använder de stock- eller egna- fotografier? </span>
                  </label>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Illustrationer:{" "}
                    <span>
                      Vilken stil använder de? Är människor avbildade i deras
                      illustration stil?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Brand story:{" "}
                    <span>
                      Förstår du deras personlighet, positionering etc genom
                      deras visuella presentation?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Texter:{" "}
                    <span>
                      Vad är tonen (humoristisk, knasig, allvarlig, lättsam)?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
                <td>
                  <textarea rows={3}></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="segment">
          <h3>Viktiga lärdomar</h3>
          <p className="ingress">
            Baserat på din utvärdering, dokumentera de insikter som kan hjälpa
            dig att designa en bra och unik grafisk identitet.
          </p>
          <label>
            Vilka gemensamma visuella teman observerade du hos konkurrenterna?
            <textarea rows={10} id="logo"></textarea>
          </label>
          <label>
            Vart ser du störst möjligheter till att särskilja dig?{" "}
            <textarea rows={10} id="logo"></textarea>
          </label>
        </div>
      </div>

      <footer>
      <button className="btn red" onClick={print}>
          Save as PDF
        </button>
        <Link className="btn" to="/attributespectrum">
          Utforska kärnvärden
        </Link>
      </footer>
    </div>
  );
};

export default CompetitorAuditPage;
