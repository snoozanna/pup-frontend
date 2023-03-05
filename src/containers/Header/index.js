import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ pageTitle, tagline }) => {
  console.log(pageTitle);
  return (
    <>
      <header>
        <div class="pageTitleWrapper">
          {pageTitle ? <h1 className="funtitle">{pageTitle}</h1> : null}
          <h2 className="tagline">{tagline}</h2>
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
      </header>
    </>
  );
};

export default Header;
