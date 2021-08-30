import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/three">
            <h1 className="title">Test 1</h1>
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/three/test2">
            <h1 className="title">Test 2</h1>
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/three/test3">
            <h1 className="title">Test 3</h1>
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/three/test4">
            <h1 className="title">Test 4</h1>
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/three/test5">
            <h1 className="title">Test 5</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
