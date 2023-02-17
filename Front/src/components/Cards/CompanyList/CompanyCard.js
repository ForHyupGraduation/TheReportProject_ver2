import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CompanyCard = ({ title, description, iconClassName, companyName }) => {
  return (
    <CompanyCardForm>
      <Link to={`/company/${companyName}`} className="company_card">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <div>
              <i className={iconClassName}></i>
            </div>
            <div className="mt-3">
              <h5 className="card-title">CompanyName</h5>
              <p className="card-text">description</p>
              <p className="card-text">SubScribe</p>
            </div>
          </div>
        </div>
      </Link>
    </CompanyCardForm>
  );
};

export default CompanyCard;

const CompanyCardForm = styled.div`
  border: solid 1px;
`;
