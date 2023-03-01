import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailChimpForm from "../../components/MailchimpForm/MailchimpForm";
import MailchimpFormRHF from "../../components/MailchimpFormRHF/MailchimpFormRHF.js";

import "./SignUp.css";

const MCURL =
  "https://gmail.us21.list-manage.com/subscribe/post?u=f14eff0c1307f46333b8f7f5f&amp;id=5ea669689a&amp;f_id=0028e7e1f0";

const SignUp = () => {
  return (
    <main className="landing">
      <h1 className="funtitle">Stay in touch </h1>
      <Link to={`/`} className>
        <div className="siteTitleWrapper">
          <h2 className="siteTitle">
            <span>The</span> <span>Pop Up</span>
            <span>Playhouse</span>
          </h2>
          <p className="siteCredit">
            by <span className="coney">Coney</span>
          </p>
        </div>
      </Link>

      {/* <SimpleForm url={MCURL} /> */}
      <MailchimpSubscribe
        url={MCURL}
        render={({ subscribe, status, message }) => (
          <div>
            <MailchimpFormRHF
              status={status}
              message={message}
              onValidated={(formData) => {
                subscribe(formData);
                console.log(formData);
              }}
            />
          </div>
        )}
      />
    </main>
  );
};

export default SignUp;
