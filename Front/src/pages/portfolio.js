import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CompanyList from "../components/List/CompanyList/CompanyList";
import styled from "styled-components";
import { useMemo } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Portfolio = () => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const [companies, setCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let memberId = JSON.parse(sessionStorage.getItem("data")).id;

  useEffect(() => {
    const fechData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:8080/portfolios?memberId=${memberId}`
        );
        setCompanies(res.data.portFolioDtos);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fechData();
  }, [memberId]);

  const filterTitle = useMemo(() => {
    if (companies) {
      return companies.filter((p) => {
        return p.companyName
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
    } else {
      return [];
    }
  }, [companies, search]);

  if (companies && !isLoading) {
    console.log(filterTitle);
    return (
      <div>
        <PortfolioContainer>
          <PortfolioForm>
            <h1>The Reporter</h1>
            <SearchContainer>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="찾으려는 기업 이름을 적으세요"
                  value={search}
                  onChange={onChange}
                />
                <Button variant="outline-secondary">검색</Button>
              </InputGroup>
            </SearchContainer>
            <TagContainer></TagContainer>
            <CompanyList companies={filterTitle} portfolioPage={true} />
          </PortfolioForm>
        </PortfolioContainer>
      </div>
    );
  }
};

export default Portfolio;

const PortfolioContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
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

  margin-bottom: 40px;
`;
