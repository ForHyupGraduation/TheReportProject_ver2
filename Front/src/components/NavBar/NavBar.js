import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const onClickLogOut = () => {
    sessionStorage.clear();
  };

  // const onClickProfile = () => {
  //   window.location = `/profile/${
  //     JSON.parse(sessionStorage.getItem("data")).id
  //   }`;
  // };

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
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              {sessionStorage.getItem("data") ? (
                <a
                  className="nav-link"
                  href={`/portfolio/${
                    JSON.parse(sessionStorage.getItem("data")).id
                  }`}
                >
                  MyPortfolio
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  MyPortfolio
                </a>
              )}
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {sessionStorage.getItem("data") ? (
              <li className="nav-item">
                {/* <i
                  className="fa-solid fa-circle-user fa-lg"
                  onClick={onClickProfile}
                  style={{ paddingRight: "10px", cursor: "pointer" }}
                ></i> */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="http://localhost:3000/"
                    style={{
                      paddingRight: "10px",
                      cursor: "pointer",
                      paddingLeft: "10px",
                    }}
                    onClick={onClickLogOut}
                  >
                    LogOut{" "}
                    <i className="fa-solid fa-right-from-bracket fa-lg"></i>
                  </a>
                </li>
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
