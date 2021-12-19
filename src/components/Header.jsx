import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBox from "./SearchBox";

export default function Header() {
  let location = useLocation();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://www.eoxvantage.com/"
            rel="noreferrer"
          >
            EOX vantage
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : null
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://assessment.hackerearth.com/challenges/hiring/eox-vantage-senior-react-js-developer-hiring-challenge/"
                  target="_blank"
                >
                  Challenge
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://prasham.me/"
                  target="_blank"
                >
                  About Author
                </a>
              </li>
            </ul>
          </div>
          <SearchBox />
        </div>
      </nav>{" "}
    </header>
  );
}
