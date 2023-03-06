import axios from "axios";
import React, { useEffect, useState } from "react";
import CompanyListElement from "./CompanyListElement";
import { useMemo } from "react";
const CompanyList = ({
  companies,
  Upjongpage,
  portfolioPage,
  subscribedCompany,
}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useState();

  useEffect(() => {
    if (sessionStorage.getItem("data")) {
      setLoggedIn(true);
    }
  }, []);

  const modifiedSubscribedComapnyList = useMemo(() => {
    if (subscribedCompany) {
      return subscribedCompany.map((company) => {
        return company.companyName;
      });
    } else {
      return [];
    }
  }, []);

  if (Upjongpage && loggedIn) {
    console.log("업종 페이지 로그인 된 페이지 입니다.");
    // let modifiedComapnyList = companies.map((company) => {
    //   console.log(company.companyName);
    //   return company.companyName;
    // });

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              <th scope="col">#</th>
              <th scope="col">회사이름</th>
              <th scope="col">대중성</th>
              <th scope="col">성장성</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.8rem" }}>
            {companies.map((company, index) => {
              let isSubscribed = false;
              if (modifiedSubscribedComapnyList.includes(company.companyName)) {
                isSubscribed = true;
              }
              return (
                <CompanyListElement
                  key={index}
                  interestPoint={company.interestPoint}
                  growthPoint={company.growthPoint}
                  companyName={company.companyName}
                  eventKey={index}
                  Upjongpage={Upjongpage}
                  isSubscribed={isSubscribed}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (Upjongpage) {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              <th scope="col">#</th>
              <th scope="col">회사이름</th>
              <th scope="col">대중성</th>
              <th scope="col">성장성</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.8rem" }}>
            {companies.map((company, index) => {
              return (
                <CompanyListElement
                  key={index}
                  interestPoint={company.interestPoint}
                  growthPoint={company.growthPoint}
                  companyName={company.companyName}
                  eventKey={index}
                  Upjongpage={Upjongpage}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  if (portfolioPage) {
    console.log(companies);
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              <th scope="col">#</th>
              <th scope="col">업종 이름</th>
              <th scope="col">회사이름</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.8rem" }}>
            {companies.map((company, index) => {
              return (
                <CompanyListElement
                  key={index}
                  interestPoint={company.interestPoint}
                  growthPoint={company.growthPoint}
                  companyName={company.companyName}
                  companyCategoryName={company.companyCategoryName}
                  eventKey={index}
                  portfolioPage={portfolioPage}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            <th scope="col">회사이름</th>
            <th scope="col">대중성</th>
            <th scope="col">성장성</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "0.8rem" }}>
          {companies.map((company, index) => {
            return (
              <CompanyListElement
                key={index}
                interestPoint={company.interestPoint}
                growthPoint={company.growthPoint}
                companyName={company.companyName}
                eventKey={index}
                loggedIn={loggedIn}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );

  // return (
  //   <div>
  //     <table className="table table-striped">
  //       <thead>
  //         <tr>
  //           <th scope="col">#</th>
  //           <th scope="col">회사이름</th>
  //           <th scope="col">대중성</th>
  //           <th scope="col">성장성</th>
  //           <th scope="col"></th>
  //           <th scope="col">구독하기</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {companies.map((company, index) => {
  //           return (
  //             <CompanyListElement
  //               key={index}
  //               interestPoint={company.interestPoint}
  //               growthPoint={company.growthPoint}
  //               companyName={company.companyName}
  //               eventKey={index}
  //               Upjongpage={Upjongpage}
  //             />
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};

export default CompanyList;
