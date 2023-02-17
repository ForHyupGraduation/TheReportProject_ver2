import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CompanyList from "../components/List/CompanyList/CompanyList";
import styled from "styled-components";

const Portfolio = () => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const [companies, setCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    const fechData = async () => {
      setIsLoading(true);
      try {
        await axios
          .get(`http://localhost:8080/home?categoryName=게임엔터테인먼트`)
          .then((response) => {
            setCompanies(response.data.simpleInfos);
          });
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fechData();
  }, []);

  console.log(companies);

  if (companies && !isLoading) {
    const filterTitle = companies.filter((p) => {
      return p.companyName
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });
    return (
      <div>
        <PortfolioContainer>
          <PortfolioForm>
            <SearchContainer>
              <input type="text" value={search} onChange={onChange} />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </SearchContainer>
            <TagContainer>태그란</TagContainer>
            <CompanyList companies={filterTitle} upjongNumber={263} />
          </PortfolioForm>
        </PortfolioContainer>
      </div>
    );
  }
};

export default Portfolio;

const PortfolioContainer = styled.div`
  border: solid 1px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: row;
  padding: 40px;
`;

const PortfolioForm = styled.div`
  width: 700px;
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  border: solid 1px;
  margin-bottom: 40px;
`;
