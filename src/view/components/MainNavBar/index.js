import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./styles.scss";

const MainNavBar = props => {
  const { totalProducts, isLoggedIn, onLogout } = props;

  return (
    <header>
      <nav className="MainNavBar">
        <div className="nav-wrapper deep-purple MainNavBar__nav-wrapper">
          <Link to="/products" className="brand-logo">
            <h1 className="MainNavBar__title-wrap">
              <div className="MainNavBar__title">Budega</div>
              <div className="MainNavBar__subtitle">Functional</div>
            </h1>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li className="MainNavLinks__item">
              <div className="MainNavLinks__item-count">{totalProducts}</div>
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
                  <button className="btn-empty" onClick={onLogout}>
                    Logout
                    <i className="material-icons right">exit_to_app</i>
                  </button>
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
