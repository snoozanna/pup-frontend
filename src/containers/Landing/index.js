import { Link } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  return (
    <section className="landing">
      <div className="yellow shape"></div>
      <div className="blue shape"></div>
      <div className="pink shape"></div>
      <div className="green shape"></div>
      <div className="landing-container">
        <div className="landing-title">
          <h1>
            <span>The</span> <span>Pop Up</span>
            <span>Playhouse</span>
          </h1>
        </div>
        <p>
          First things first, would you like to sign up to the mailing list?
        </p>
        <div className="options-container">
          <Link to={`/pieces`} className="uk-link-reset">
            <button className="raise">Yes</button>
          </Link>

          <Link to={`/pieces`} className="uk-link-reset">
            <button className="raise"> Maybe later</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
