import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";

const Header = (isLoggedIn) => {
  return (
    <Title>
      <NavBar isLoggedIn={isLoggedIn} />
      <main>
        <Outlet />
      </main>
    </Title>
  );
};

export default Header;

const Title = styled.div``;
