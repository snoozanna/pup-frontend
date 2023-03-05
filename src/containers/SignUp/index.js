import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailChimpForm from "../../components/MailchimpForm/MailchimpForm";
import MailchimpFormRHF from "../../components/MailchimpFormRHF/index.js";

import "./SignUp.css";

const MCURL =
  "https://gmail.us21.list-manage.com/subscribe/post?u=f14eff0c1307f46333b8f7f5f&amp;id=5ea669689a&amp;f_id=0028e7e1f0";

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
          <p>By signing up you agree to our [Privacy Policy].</p>
        </div>
        <div class="contentItem">
          <MailchimpSubscribe
            url={MCURL}
            render={({ subscribe, status, message }) => (
              <MailchimpFormRHF
                status={status}
                message={message}
                onValidated={(formData) => {
                  subscribe(formData);
                  console.log(formData);
                }}
              />
            )}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
