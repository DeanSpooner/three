import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            <h1 className="title">Test 1</h1>
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/test2">
            <h1 className="title">Test 2</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
