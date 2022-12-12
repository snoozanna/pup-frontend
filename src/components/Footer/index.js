import { Link } from "react-router-dom";
import "./Footer.css";

const Nav = () => {
  return (
    <footer>
      <nav>
        <ul className="uk-subnav uk-subnav-divider" uk-margin>
          <li>
            <Link to={`/home`} className="uk-link-reset">
              Notice Board
            </Link>
          </li>
          <li>
            <Link to={`/whats-on`} className="uk-link-reset">
              Zoom Bar
            </Link>
          </li>
          <li>
            <Link to={`/pieces`} className="uk-link-reset">
              Play
            </Link>
          </li>
          <li>
            <Link to={`/sign-up`} className="uk-link-reset">
              Sign up
            </Link>
          </li>
          <li className="uk-active">
            <a
              href="https://coneyhq.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Coney
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Nav;
