import React, { useState } from "react";

const SignUpForm = ({ onSignUp }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignUp(formValue);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="col s12 m6 offset-m3">
      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={handleInputChange}
            id="email"
            type="email"
            className="validate"
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={handleInputChange}
            id="password"
            type="password"
            className="validate"
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={handleInputChange}
            id="confirmPassword"
            type="password"
            className="validate"
          />
          <label htmlFor="password">Confirm Password</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button
            className="btn waves-effect waves-light green darken-1"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
