import { Link } from "react-router-dom";
import { useState } from "react";
import MailChimpFormRHF from "../../components/MailchimpFormRHF";
import "./Landing.css";
import { set } from "react-hook-form";
const Landing = () => {
  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  return (
    <>
      <section className="landing">
        {/* <div className="yellow shape spinning"></div>
        <div className="blue shape spinning"></div>
        <div className="pink shape spinning"></div>
        <div className="green shape spinning"></div> */}

        <div className="landing-title">
          <h1>
            <span>The</span> <span>Pop Up</span>
            <span>Playhouse</span>
          </h1>
          <p className="siteCredit">
            by <span className="coney">Coney</span>
          </p>
          {showForm ? (
            <Link to={`/pieces`} className="uk-link-reset">
              <button className="raise yellow "> Take me in!</button>
            </Link>
          ) : (
            <>
              <button
                className="raise yellow "
                onClick={() => setShowForm(!showForm)}
              >
                Enter
              </button>
            </>
          )}
        </div>
        {showForm ? (
          <div className="landingFormWrapper">
            <h2>First things first...</h2>
            <p>Would you like to sign up for our mailing list?</p>
            <MailChimpFormRHF />
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Landing;
