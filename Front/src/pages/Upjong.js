import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";

import { useLocation } from "react-router-dom";
import CompaniesDB from "../components/DB/Companies.json";
import CompanyList from "../components/List/CompanyList/CompanyList";
import ScatterChart from "../components/Graphs/ScatterChart";

import axios from "axios";

const Upjong = () => {
  const [companies, setCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [upjong, setUpjong] = useState(0);
  const [upjongNumber, setUpjongNumber] = useState(null);
  const [subscribedCompany, setSubscribedCompany] = useState(null);

  const location = useLocation();
  const title = location.state?.title; // 추가된 부분
  let memberId = null;
  if (sessionStorage.getItem("data")) {
    memberId = JSON.parse(sessionStorage.getItem("data")).id;
  }

  useEffect(() => {
    setIsLoading(false);
    const fechData = async () => {
      setIsLoading(true);
      try {
        if (memberId) {
          await axios
            .get(
              `http://localhost:8080/home?categoryName=${title}&memberId=${memberId}`
            )
            .then((res) => {
              console.log("로그인된 페이지");
              setSubscribedCompany(res.data.portFolioDtos);
              setCompanies(res.data.simpleInfos);
            });
        } else {
          await axios
            .get(`http://localhost:8080/home?categoryName=${title}`)
            .then((response) => {
              console.log("로그인x 페이지");
              setCompanies(response.data.simpleInfos);
            });
        }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fechData();
  }, []);

  useEffect(() => {
    setUpjongNumber(location.pathname.split("/")[2]);
    setUpjong(CompaniesDB.categoryName);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  } else if (!isLoading && companies) {
    console.log(companies);

    return (
      <div className="container">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">{upjong} 산업</h1>
              <ScatterChart
                labels={companies.map((company) => company.companyName)}
                data={companies.map((company) => ({
                  x: company.salesGrowthRate,
                  y: company.operatingProfitGrowthRate,
                }))}
                backgroundColor={`rgba(255, 99, 132, 1)`}
              />
              <div className="mt-3">
                <p className="lead text-muted">
                  {upjong} 평균 매출 증가율은 number% 입니다.
                </p>
                <p className="lead text-muted">
                  {upjong} 이윤 매출 증가율은 number% 입니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          {memberId ? (
            <CompanyList
              companies={companies}
              upjongNumber={upjongNumber}
              Upjongpage={true}
              subscribedCompany={subscribedCompany}
            />
          ) : (
            <CompanyList
              companies={companies}
              upjongNumber={upjongNumber}
              Upjongpage={true}
            />
          )}
        </div>
      </div>
    );
  }
};

export default Upjong;
