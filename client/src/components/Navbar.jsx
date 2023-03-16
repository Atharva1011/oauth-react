import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <Link to={`/`}>
            <img src={Logo} className="logo" alt="" />
          </Link>
        </div>
        <div className="center">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <Link to={`/login`}>
            <button className="button-64">SignUp</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
