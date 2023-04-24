import useState from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailchimpFormRHF from "../../components/MailchimpFormRHF/index.js";

import "./SignUp.css";

const MCURL =
  "https://coneyhq.us11.list-manage.com/subscribe/post?u=3ed2eca54aa8835691860eb0b&amp;id=5e35500c2e&amp;v_id=4544&amp;f_id=003b8de0f0";

const SignUp = () => {
  return (
    <>
      <Header pageTitle={"Stay in Touch"} />
      <main className="signup contentWrapper">
        {/* <SimpleForm url={MCURL} /> */}

        <div class="contentItem">
          <h2>Sign up for our mailing list</h2>
          <p>
            To be kept up to date with new releases and upcoming Zoom Bar events
          </p>
          <p>
            By signing up you agree to our {""}
            <a
              href="https://coneyhq.org/privacy-cookies/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div class="contentItem">
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
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
