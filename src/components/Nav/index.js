import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">The Pop Up Playhouse</Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to={`/articles-list`} className="uk-link-reset">
                Articles List
              </Link>
            </li>
            <li>
              <Link to={`/whats-on`} className="uk-link-reset">
                Whats on
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
