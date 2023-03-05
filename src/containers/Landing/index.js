import { Link } from "react-router-dom";
import stamp from "./../../assets/ConeyLogoStamp.png";
import rabbit from "./../../assets/rabbit2.png";
import wheel from "./../../assets/wheel.png";
import "./Landing.css";
const Landing = () => {
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
          <Link to={`/pieces`} className="uk-link-reset">
            <button className="raise yellow "> Enter</button>
          </Link>
          {/* <img src={rabbit} alt="rabbit" className="logo" /> */}
          {/* <img src={wheel} alt="a spinning wheel" className="" /> */}

          {/* <div className="landing-container">
            <p>
              First things first, would you like to sign up to the mailing list?
            </p>
            <div className="options-container">
              <Link to={`/sign-up`} className="uk-link-reset">
                <button className="raise yellow ">Yes</button>
              </Link>

              <Link to={`/home`} className="uk-link-reset">
                <button className="raise yellow "> Maybe later</button>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Landing;
