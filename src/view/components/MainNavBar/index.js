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
          <ul  className="right hide-on-med-and-down">
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/products/1">products id</Link>
            </li>
            <li>
              <Link to="/add">add</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavBar;
