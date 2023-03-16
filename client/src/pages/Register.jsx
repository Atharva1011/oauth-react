import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";

const Register = () => {
  return (
    <section>
      <div className="login-container">
        <form className="card">
          <h1 className="title">Register</h1>
          <div className="social-btns">
            <FacebookLoginButton className="social-btns" />
            <GoogleLoginButton className="social-btns" />
            <LinkedInLoginButton className="social-btns" />
          </div>
          <h3>
            Already have an account? <Link to={`/login`}>Login</Link>
          </h3>
        </form>
      </div>
    </section>
  );
};

export default Register;
