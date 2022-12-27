import { Link } from "react-router-dom";
import "./OpenSesameForm.css";
// import { useForm } from "react-hook-form";
import ContactForm from "./../../components/ContactForm/index.js";

const SignUp = () => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();
  // const onSubmit = (data) => console.log(data);

  return (
    <>
      <main className="landing">
        <h1 className="funtitle">Open Sesame</h1>
        <br />
        <h3 className="howtoplay">How to Play </h3>

        <p>Well done! You entered the correct password.</p>
        <p>We need to send a small envelope to your postal address. </p>
        <p>Please fill in this form so that we can do so.</p>
        <div className="postageWrapper">
          <p> Still need to pay for your postage?</p>
          <div className="buttonWrapper">
            <a
              href="https://www.paypal.com/donate/?business=EU8572VTBBBP4&no_recurring=0&item_name=This+is+a+donation+for+X+game&currency_code=GBP"
              target="_blank"
              rel="noreferrer"
              className="buttonItem"
            >
              <button className="funButton donate">Pay here</button>
            </a>
          </div>
        </div>

        <Link to={`/`}>
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

        <ContactForm />
      </main>
    </>
  );
};

export default SignUp;
