import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

import "./GameNav.css";

const GameNav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="uk-navbar-container nav" data-uk-navbar>
                <div className="uk-navbar-left"></div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.data.map((category) => {
                      return (
                        <li key={category.attributes.slug}>
                          <Link
                            to={`/category/${category.attributes.slug}`}
                            className="uk-link-reset"
                          >
                            {category.attributes.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default GameNav;
