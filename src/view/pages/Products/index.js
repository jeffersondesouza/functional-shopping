import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const imgLink =
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFAuJKZMsVve-JO1mZcuEQ72D-X5e2DPjiNhcvcdlYXKc8nE5h-oc&usqp=CAc";

const Products = () => {
  return (
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={imgLink} alt="" />
            <button className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <Link to={`/products/${1}`}>More Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
