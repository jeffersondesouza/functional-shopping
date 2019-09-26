import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(formValue);
  };

  return (
    <form onSubmit={handleSubmit} className="col s12 m6 offset-m3" noValidate>
      <div className="row">
        <div className="input-field col s12">
          <input
            onChange={handleInputChange}
            id="email"
            name="email"
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
            name="password"
            type="password"
            className="validate"
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button
            className="btn waves-effect waves-light green darken-1"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
