import React from "react";

const AddProduct = () => {
  return (
    <div className="row">
      <form className="col s12 m6 offset-m3">
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="prize" type="number" />
            <label htmlFor="prize">Prize</label>
          </div>
        </div>

        <div className="row">
          <div className="file-field input-field">
            <div className="btn">
              <span>Image</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Set a cool image to you product"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 offset-m3">
            <button
              className="btn waves-effect waves-light deep-purple"
              type="submit"
            >
              Create Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
