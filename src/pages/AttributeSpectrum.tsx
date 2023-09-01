import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

export interface IAttributeSpectrumProps {}

const AttributeSpectrumPage: React.FunctionComponent<
  IAttributeSpectrumProps
> = (props) => {
  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Utforska kärnvärden</h1>
            <hr />
            <p className="ingress">
              Använd den här övningen för att identifiera de kärnvärden du vill
              att din varumärkesidentitet ska kommunicera.
            </p>
          </div>
          <div>
            <img src="/img/spectrum.png" alt="image" />
          </div>
        </div>

        <div className="segment">
          <h5>Steg 1</h5>
          <h4>Samla ditt varumärkesteam / stakeholders.</h4>
          <p className="ingress">
            Det är bäst att göra detta med alla i samma rum (virtuellt eller
            fysiskt).
          </p>

          <h5>Step 2</h5>
          <h4>
            Använd mallen nedanför eller kopiera diagrammet till en whiteboard
            eller ett delat dokument (t.ex miro eller figjam).
          </h4>
          <p className="ingress">
            Låt varje deltagare lägga till ett X där de tror att ditt varumärke
            faller på varje spektrum nedan.
          </p>
        </div>

        <div className="segment">
          <div className="sliderWrap">
            <p className="blue">Exklusiv</p>
            <Slider />
            <p className="red">Tillgänglig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Traditionell</p>
            <Slider />
            <p className="red">Progressiv</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Korporativ</p>
            <Slider />
            <p className="red">Vänlig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Seriös</p>
            <Slider />
            <p className="red">Kul, Lekfull</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Försiktig, varsam</p>
            <Slider />
            <p className="red">Framåt, modig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Enkel</p>
            <Slider />
            <p className="red">Komplex</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Stad, Urban</p>
            <Slider />
            <p className="red">Naturlig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Familjär</p>
            <Slider />
            <p className="red">Disruptiv</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Stadig, Stabil</p>
            <Slider />
            <p className="red">Dynamisk</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Realistisk</p>
            <Slider />
            <p className="red">Idealistisk</p>
          </div>
        </div>

        <div className="segment">
          <h5>Step 3</h5>
          <h4>Samla dina insikter</h4>
          <p className="ingress">
            Prata igenom varje spektrum och välj sedan 3-5 attribut som alla
            dina intressenter är starkt anpassade till.
          </p>
          <p>
            Om du inte gillar de exakta orden som anges i diagrammet, välj de
            som bäst beskriver ditt varumärke. Det här kommer att vara orden du
            kommer att få använda för att bygga din visuella identitet.
          </p>
          <label>
            Attribut 1
            <input type="text" />
          </label>
          <label>
            Attribut 2
            <input type="text" />
          </label>
          <label>
            Attribut 3
            <input type="text" />
          </label>
          <label>
            Attribut 4
            <input type="text" />
          </label>
          <label>
            Attribut 5
            <input type="text" />
          </label>
        </div>
      </div>
      <footer>
        <a href="#" className="btn red">
          Save as PDF
        </a>
        <Link className="btn" to="/brandbrief">
          Uppdragsbeskrivning
        </Link>
      </footer>
    </div>
  );
};

export default AttributeSpectrumPage;
