import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../context/FormContext";

interface ICompetitorAuditProps {}

const CompetitorAuditPage: React.FunctionComponent<ICompetitorAuditProps> = (
  props
) => {
  const { formData, updateCompetitorAudit } = useForm();

  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Konkurrensanalys</h1>
            <hr />
            <p className="ingress">
              För att slutföra den här övningen granskar du
              varumärkesidentiteterna för dina topp 3 konkurrenter. Granska en
              konkurrent i taget och dokumentera dina resultat allt eftersom. För
              att få en känsla av varje varumärkes identitet, ta en titt på deras
              webbplats, sociala medieprofiler, etc.
            </p>
          </div>
          <div>
            <img src="/img/comp.png" alt="Competitor analysis illustration" />
          </div>
        </div>

        <div className="segment">
          <table cellSpacing="0">
            <thead>
              <tr>
                <th></th>
                <th>
                  Konkurrent 1
                  <input 
                    type="text" 
                    value={formData.competitorAudit.competitor1}
                    onChange={(e) => updateCompetitorAudit('competitor1', e.target.value)}
                  />
                </th>
                <th>
                  Konkurrent 2
                  <input 
                    type="text" 
                    value={formData.competitorAudit.competitor2}
                    onChange={(e) => updateCompetitorAudit('competitor2', e.target.value)}
                  />
                </th>
                <th>
                  Konkurrent 3
                  <input 
                    type="text" 
                    value={formData.competitorAudit.competitor3}
                    onChange={(e) => updateCompetitorAudit('competitor3', e.target.value)}
                  />
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
                  <textarea 
                    rows={4}
                    value={formData.competitorAudit.competitor1Logo}
                    onChange={(e) => updateCompetitorAudit('competitor1Logo', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={4}
                    value={formData.competitorAudit.competitor2Logo}
                    onChange={(e) => updateCompetitorAudit('competitor2Logo', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={4}
                    value={formData.competitorAudit.competitor3Logo}
                    onChange={(e) => updateCompetitorAudit('competitor3Logo', e.target.value)}
                  ></textarea>
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
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor1Typography}
                    onChange={(e) => updateCompetitorAudit('competitor1Typography', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor2Typography}
                    onChange={(e) => updateCompetitorAudit('competitor2Typography', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor3Typography}
                    onChange={(e) => updateCompetitorAudit('competitor3Typography', e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Färgpalett:{" "}
                    <span>
                      Vilka färger använder de? Är de varma eller kalla? Mörka
                      eller ljusa?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor1ColorPalette}
                    onChange={(e) => updateCompetitorAudit('competitor1ColorPalette', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor2ColorPalette}
                    onChange={(e) => updateCompetitorAudit('competitor2ColorPalette', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor3ColorPalette}
                    onChange={(e) => updateCompetitorAudit('competitor3ColorPalette', e.target.value)}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Annat:{" "}
                    <span>
                      Foton, illustrationer, video, etc. Vad mer märker du?
                    </span>
                  </label>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor1Other}
                    onChange={(e) => updateCompetitorAudit('competitor1Other', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor2Other}
                    onChange={(e) => updateCompetitorAudit('competitor2Other', e.target.value)}
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    rows={3}
                    value={formData.competitorAudit.competitor3Other}
                    onChange={(e) => updateCompetitorAudit('competitor3Other', e.target.value)}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer>
        <Link className="btn" to="/attributespectrum">
          Attributspektrum
        </Link>
      </footer>
    </div>
  );
};

export default CompetitorAuditPage;
