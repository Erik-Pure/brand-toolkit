import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { useForm } from "../context/FormContext";

interface IAttributeSpectrumProps {}

const AttributeSpectrumPage: React.FunctionComponent<
  IAttributeSpectrumProps
> = (props) => {
  const { formData, updateAttributeSpectrum } = useForm();

  return (
    <div>
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Attributspektrum</h1>
            <hr />
            <p className="ingress">
              Använd dessa spektrum för att identifiera varumärkets personlighet
              och positionering. Flytta reglaget för varje spektrum för att
              indikera var ditt varumärke faller på skalan.
            </p>
          </div>
          <div>
            <img src="/img/spectrum.png" alt="Attribute spectrum illustration" />
          </div>
        </div>

        <div className="segment sliders">
          <div className="sliderWrap">
            <p className="blue">Exklusiv</p>
            <Slider 
              value={formData.attributeSpectrum.exclusiveAccessible}
              onChange={(value) => updateAttributeSpectrum('exclusiveAccessible', value)}
            />
            <p className="red">Tillgänglig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Traditionell</p>
            <Slider 
              value={formData.attributeSpectrum.traditionalProgressive}
              onChange={(value) => updateAttributeSpectrum('traditionalProgressive', value)}
            />
            <p className="red">Progressiv</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Korporativ</p>
            <Slider 
              value={formData.attributeSpectrum.corporateFriendly}
              onChange={(value) => updateAttributeSpectrum('corporateFriendly', value)}
            />
            <p className="red">Vänlig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Seriös</p>
            <Slider 
              value={formData.attributeSpectrum.seriousFun}
              onChange={(value) => updateAttributeSpectrum('seriousFun', value)}
            />
            <p className="red">Kul, Lekfull</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Försiktig, varsam</p>
            <Slider 
              value={formData.attributeSpectrum.cautiousBold}
              onChange={(value) => updateAttributeSpectrum('cautiousBold', value)}
            />
            <p className="red">Framåt, modig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Enkel</p>
            <Slider 
              value={formData.attributeSpectrum.simpleComplex}
              onChange={(value) => updateAttributeSpectrum('simpleComplex', value)}
            />
            <p className="red">Komplex</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Stad, Urban</p>
            <Slider 
              value={formData.attributeSpectrum.urbanNatural}
              onChange={(value) => updateAttributeSpectrum('urbanNatural', value)}
            />
            <p className="red">Naturlig</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Familjär</p>
            <Slider 
              value={formData.attributeSpectrum.familiarDisruptive}
              onChange={(value) => updateAttributeSpectrum('familiarDisruptive', value)}
            />
            <p className="red">Disruptiv</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Stadig, Stabil</p>
            <Slider 
              value={formData.attributeSpectrum.stableDynamic}
              onChange={(value) => updateAttributeSpectrum('stableDynamic', value)}
            />
            <p className="red">Dynamisk</p>
          </div>
          <div className="sliderWrap">
            <p className="blue">Realistisk</p>
            <Slider 
              value={formData.attributeSpectrum.realisticIdealistic}
              onChange={(value) => updateAttributeSpectrum('realisticIdealistic', value)}
            />
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
            <input 
              type="text" 
              value={formData.attributeSpectrum.attribute1}
              onChange={(e) => updateAttributeSpectrum('attribute1', e.target.value)}
            />
          </label>
          <label>
            Attribut 2
            <input 
              type="text" 
              value={formData.attributeSpectrum.attribute2}
              onChange={(e) => updateAttributeSpectrum('attribute2', e.target.value)}
            />
          </label>
          <label>
            Attribut 3
            <input 
              type="text" 
              value={formData.attributeSpectrum.attribute3}
              onChange={(e) => updateAttributeSpectrum('attribute3', e.target.value)}
            />
          </label>
          <label>
            Attribut 4
            <input 
              type="text" 
              value={formData.attributeSpectrum.attribute4}
              onChange={(e) => updateAttributeSpectrum('attribute4', e.target.value)}
            />
          </label>
          <label>
            Attribut 5
            <input 
              type="text" 
              value={formData.attributeSpectrum.attribute5}
              onChange={(e) => updateAttributeSpectrum('attribute5', e.target.value)}
            />
          </label>
        </div>
      </div>
      <footer>
        <button className="btn red" onClick={() => window.print()}>
          Spara som PDF
        </button>
        <Link className="btn" to="/brandbrief">
          Uppdragsbeskrivning
        </Link>
      </footer>
    </div>
  );
};

export default AttributeSpectrumPage;
