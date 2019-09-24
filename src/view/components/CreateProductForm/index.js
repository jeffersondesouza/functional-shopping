import React, { useState, useEffect } from "react";

const CreateProductForm = props => {
  const { createProductSuccess, onCreateProduct } = props;

  const [formValue, setFormValue] = useState({
    name: "",
    proze: "",
    imageUrl: ""
  });

  useEffect(() => {
    if (createProductSuccess) {
      setFormValue({
        name: "",
        proze: "",
        imageUrl: ""
      });
    }
  }, [createProductSuccess]);

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreateProduct(formValue);
  };

  return (
    <form onSubmit={handleSubmit} className="col s12 m6 offset-m3" noValidate>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor="name">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="prize"
            name="prize"
            type="number"
            onChange={handleInputChange}
          />
          <label htmlFor="prize">Prize</label>
        </div>
      </div>

      <div className="row">
        <div className="file-field input-field">
          <div className="btn deep-purple">
            <span>Image</span>
            <input
              type="file"
              multiple
              onChange={handleInputChange}
              id="imageUrl"
              name="imageUrl"
            />
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
            className="btn green darken-1 waves-effect waves-light"
            type="submit"
          >
            Create Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProductForm;
