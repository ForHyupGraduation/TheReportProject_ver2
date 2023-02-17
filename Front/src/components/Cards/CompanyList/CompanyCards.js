import React from "react";
import CompanyCard from "../CompanyList/CompanyCard";

const CompanyCards = () => {
  return (
    <div className="col">
      <CompanyCard
        title={"title"}
        description={"upjong.description"}
        iconClassName={"iconClassName"}
        theNumberOfCompanies={"theNumberOfCompanies"}
        companyName={"companyName"}
      />
    </div>
  );
};

export default CompanyCards;
