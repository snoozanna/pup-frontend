import { Link } from "react-router-dom";
import { useState } from "react";
import MailchimpFormRHF from "../../components/MailchimpFormRHF";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Landing.css";
import { set } from "react-hook-form";

const MCURL =
  "https://coneyhq.us11.list-manage.com/subscribe/post?u=3ed2eca54aa8835691860eb0b&amp;id=5e35500c2e&amp;v_id=4544&amp;f_id=003b8de0f0";

const Landing = () => {
  const [showForm, setShowForm] = useState(false);

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
            <p>Would you like to sign up for Coney's mailing list?</p>
            <MailchimpSubscribe
              url={MCURL}
              render={({ subscribe, status, message }) => (
                <div>
                  <MailchimpFormRHF
                    status={status}
                    message={message}
                    onValidated={(formData) => {
                      console.log("trying to submit");
                      subscribe(formData);
                      console.log(formData);
                    }}
                  />
                </div>
              )}
            />
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Landing;
