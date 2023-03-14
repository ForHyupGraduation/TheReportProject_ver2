import React from "react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const onClickLogOut = () => {
    sessionStorage.clear();
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollPosition > 0 ? "rgba(0, 0, 0, 0.6)" : "transparent",
    transition: "background-color 0.5s ease",
  };
  // const onClickProfile = () => {
  //   window.location = `/profile/${
  //     JSON.parse(sessionStorage.getItem("data")).id
  //   }`;
  // };

  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
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
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              {sessionStorage.getItem("data") ? (
                <a
                  className="nav-link text-white"
                  href={`/portfolio/${
                    JSON.parse(sessionStorage.getItem("data")).id
                  }`}
                >
                  MyPortfolio
                </a>
              ) : (
                <a className="nav-link text-white" href="/login">
                  MyPortfolio
                </a>
              )}
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {sessionStorage.getItem("data") ? (
              <li className="nav-item text-white">
                {/* <i
                  className="fa-solid fa-circle-user fa-lg"
                  onClick={onClickProfile}
                  style={{ paddingRight: "10px", cursor: "pointer" }}
                ></i> */}
                <li className="nav-item text-white">
                  <a
                    className="nav-link text-white"
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
              <li className="nav-item ">
                <a className="nav-link text-white" href="/login">
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
