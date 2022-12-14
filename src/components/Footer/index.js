import { Link } from "react-router-dom";
import "./Footer.css";

const Nav = () => {
  return (
    <footer>
      <nav>
        <ul className="footerWrapper">
          <div className="footerItem">
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
          </div>
          <div className="footerItem">
            <li>
              <Link to={`/pieces`} className="uk-link-reset">
                Play
              </Link>
            </li>
          </div>
          <div className="footerItem">
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
          </div>
        </ul>
      </nav>
    </footer>
  );
};

export default Nav;
