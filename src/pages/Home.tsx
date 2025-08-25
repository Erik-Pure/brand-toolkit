import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../context/FormContext";

interface IHomeProps {}

const HomePage: React.FunctionComponent<IHomeProps> = (props) => {
  const { resetAll } = useForm();

  return (
    <div className="home">
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Verktygslåda Grafisk Profil</h1>
            <Link className="btn" to="/brandaudit">
              Utvärdera Varumärke
            </Link>
            
            <Link className="btn" to="/competitoraudit">
              Konkurrensanalys
            </Link>
            
            <Link className="btn" to="/attributespectrum">
              Utforska kärnvärden
            </Link>
            
            <Link className="btn" to="/brandbrief">
              Uppdragsbeskrivning
            </Link>
            
            <Link className="btn" to="/brandchecklist">
              Checklista Grafisk Profil
            </Link>
            
            <button 
              className="btn red" 
              onClick={() => {
                if (window.confirm('Är du säker på att du vill radera all data? Detta går inte att ångra.')) {
                  resetAll();
                }
              }}
            >
              Rensa all data
            </button>
            
            <div className="rebrand-time">
              Är det verkligen dags
              <br /> för en rebrand?
              <img src="/img/arrow.svg" alt="arrow" />
            </div>
          </div>
          <div>
            
          </div>
        </div>
        <div>
          <Link
            className="btn red"
            target="_blank"
            to="https://www.columnfivemedia.com/how-to-know-if-you-should-rebrand"
          >
            Is it time for a rebrand?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
