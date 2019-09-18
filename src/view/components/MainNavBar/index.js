import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const MainNavBar = () => {
  return (
    <header>
      <nav className="offset-s1">
        <div className="nav-wrapper deep-purple lighten-1 MainNavBar">
          <Link to="/" className="brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavBar;
