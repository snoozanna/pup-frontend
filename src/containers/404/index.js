import { Link } from "react-router-dom";

import "./404.css";
const NotFound = () => {
  return (
    <>
      <main className="notfound">
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
        <h1>Sorry not found</h1>
      </main>
    </>
  );
};

export default NotFound;
