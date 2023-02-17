import React from "react";
import { Link } from "react-router-dom";

const RatioDescription = () => {
  return (
    <div>
      Hello.....<p>This is description component</p>
      <p>First is description component</p>
      <p>Seconde is description component</p>
      <p>Third is description component</p>
      <Link
        to={{
          pathname: `/portfolio/${
            JSON.parse(sessionStorage.getItem("data")).nickName
          }`,
        }}
        style={{
          textDecoration: "none",
          color: "black",
          alignContent: "center",
        }}
      >
        <button>My portfolio</button>
      </Link>
    </div>
  );
};

export default RatioDescription;
