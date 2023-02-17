import React from "react";
import styled from "styled-components";
import StarImg from "./Img/StarImg.png";
import EmptyStarImg from "./Img/EmptyStarImg.png";
const SubsribeButton = ({ like, onClick }) => {
  return (
    <div>
      <Subscribe src={like ? StarImg : EmptyStarImg} onClick={onClick} />
    </div>
  );
};

export default SubsribeButton;

const Subscribe = styled.img`
  width: 30px;
`;
