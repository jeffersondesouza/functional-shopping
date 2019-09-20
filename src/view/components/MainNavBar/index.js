import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./styles.scss";

const MainNavBar = ({ isLoggedIn }) => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper deep-purple MainNavBar">
          <Link to="/products" className="brand-logo">
            <h1>Budega</h1>
            <div>Funcional</div>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink activeClassName="active-link" to="/products">
                Products
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink activeClassName="active-link" to="/create-product">
                    Create Product
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-link" to="/orders">
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-link" to="/login">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink activeClassName="active-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavBar;
