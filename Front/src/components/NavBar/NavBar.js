import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logOut = () => {
    sessionStorage.clear();
    window.location = "http://localhost:3000/";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          The Reporter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a className="nav-link" href="/about">
              About
            </a>
            <li className="nav-item"></li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {sessionStorage.getItem("data") ? (
              <li className="nav-item">
                <Link
                  to={{
                    pathname: `/profile/${
                      JSON.parse(sessionStorage.getItem("data")).nickName
                    }`,
                  }}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    alignContent: "center",
                  }}
                >
                  <i className="fa-solid fa-circle-user fa-2x"></i>{" "}
                </Link>
                <button style={{ alignContent: "center" }} onClick={logOut}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login <i className="fa-solid fa-right-to-bracket fa-lg"></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
