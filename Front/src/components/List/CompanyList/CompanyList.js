import axios from "axios";
import React, { useEffect, useState } from "react";
import CompanyListElement from "./CompanyListElement";

const CompanyList = ({ companies, Upjongpage, portfolioPage }) => {
  const [like, setLike] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [loggedIn, setLoggedIn] = useState(true);

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
