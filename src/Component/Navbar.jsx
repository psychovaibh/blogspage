import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="navbar nav-underline nav-fill  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="brand">Blog's</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse nav-space" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-color"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-color" to="/template1">
                  Template 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-color" to="/template2">
                  Template 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-color" to="/template3">
                  Template 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
