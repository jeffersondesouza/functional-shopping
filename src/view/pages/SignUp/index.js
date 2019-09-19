import React from "react";

const SignUp = () => {
  return (
    <div className="row">
      <form className="col s12 m6 offset-m3">
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="confirmPassword" type="password" className="validate" />
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
    </div>
  );
};

export default SignUp;
