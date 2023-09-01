import React from "react";
import { Link } from "react-router-dom";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="home">
      <div className="wrap">
        <div className="segment-header">
          <div>
            <h1>Verktygslåda Grafisk Profil</h1>
            {/* <h1>Brand Identity Toolkit</h1> */}
            <div className="rebrand-time">
              Är det verkligen dags
              <br /> för en rebrand?
              <img src="/img/arrow.svg" alt="image" />
            </div>
          </div>
          <div className="testing">
            <Link className="btn" to="/brandaudit">
              Utvärdera Varumärke
            </Link>
            <br />
            <Link className="btn" to="/competitoraudit">
              Konkurrensanalys
            </Link>
            <br />
            <Link className="btn" to="/attributespectrum">
              Utforska kärnvärden
            </Link>
            <br />
            <Link className="btn" to="/brandbrief">
              Uppdragsbeskrivning
            </Link>
            <br />
            <Link className="btn" to="/brandchecklist">
              Checklista Grafisk Profil
            </Link>
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
