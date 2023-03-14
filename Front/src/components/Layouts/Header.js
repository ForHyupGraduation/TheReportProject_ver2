import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
