import { Link } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  return (
    <section className="landing">
      <div className="yellow shape spinning"></div>
      <div className="blue shape spinning"></div>
      <div className="pink shape spinning"></div>
      <div className="green shape spinning"></div>

      <div className="landing-title">
        <h1>
          <span>The</span> <span>Pop Up</span>
          <span>Playhouse</span>
        </h1>
      </div>
      <div className="landing-container">
        <p>
          First things first, would you like to sign up to the mailing list?
        </p>
        <div className="options-container">
          <Link to={`/sign-up`} className="uk-link-reset">
            <button className="raise">Yes</button>
          </Link>

          <Link to={`/home`} className="uk-link-reset">
            <button className="raise"> Maybe later</button>
          </Link>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
