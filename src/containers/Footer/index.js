import { Link } from "react-router-dom";

import rabbit from "./../../assets/rabbit-icon.png";
import send from "./../../assets/send.png";
import calendar from "./../../assets/calendar.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="navWrapper">
          <li className="navItem">
            <Link to={`/whats-on`} className="linkWrapper">
              <img src={calendar} alt="calendar" className="navIcon" />
              <span>What's on</span>
            </Link>
          </li>
          <li className="navItem">
            <Link to={`/pieces`} className="linkWrapper">
              <img src={rabbit} alt="rabbit" className="navIcon play" />
              <span>Play</span>
            </Link>
          </li>
          <li className="navItem">
            <Link to={`/sign-up`} className="linkWrapper">
              <img src={send} alt="send" className="navIcon" />
              <span>Sign Up</span>
            </Link>
          </li>
          {/* <li className="uk-active">
            <a
              href="https://coneyhq.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Coney
            </a>
          </li> */}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
