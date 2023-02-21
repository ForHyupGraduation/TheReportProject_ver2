import React, { useEffect } from "react";
import CompanyCard from "../CompanyList/CompanyCard";
import { useState } from "react";

const CompanyCards = (sortedCompany) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      try {
        setData(sortedCompany.sortedCompany);
        setIsLoading(false);
      } catch {}
    };
    fetchData();
  }, [sortedCompany]);

  if (!isLoading) {
    console.log(data);
    return (
      <div>
        {data.map((company, index) => {
          return (
            <CompanyCard
              key={index}
              categoryName={company.categoryName}
              interestPoint={company.interestPoint}
              growthPoint={company.growthPoint}
              companyName={company.companyName}
              subscribed={company.subscribed}
              eventKey={index}
              profilePage={true}
            />
          );
        })}
      </div>
    );
  }
  return null;
};

export default CompanyCards;
