import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import Meter from "../../Meters/Meter";

const CompanyCard = ({
  companyName,
  growthPoint,
  interestPoint,
  categoryName,
  subscribed,
  profilePage,
}) => {
  return (
    <CompanyCardForm>
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <div className="mt-3">
            <p className="card-text">카테고리 네임 : {categoryName}</p>
            <h5 className="card-title">회사 이름 : {companyName}</h5>
            <p className="card-text">성장성 : {growthPoint}</p>
            <p className="card-text">대중성 : {interestPoint}</p>
            <p className="card-text">구독자 수 :{subscribed}</p>
            <Content>
              <Meter
                progressEndValue={interestPoint}
                profilePage={profilePage}
              />
              <Meter progressEndValue={growthPoint} profilePage={profilePage} />
            </Content>
            <Link to={`/company/${companyName}`} className="company_card">
              <Badge>자세히 보기</Badge>
            </Link>
          </div>
        </div>
      </div>{" "}
    </CompanyCardForm>
  );
};

export default CompanyCard;

const CompanyCardForm = styled.div`
  border: solid 1px;
  padding: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;
