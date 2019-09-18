import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const MainNavBar = ({ isLoggedIn }) => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper deep-purple MainNavBar">
          <Link to="/products" className="brand-logo">
            Functional Shopping
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/products">Products</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/add">Create Product</Link>
                </li>
                <li>
                  <Link to="/orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
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
