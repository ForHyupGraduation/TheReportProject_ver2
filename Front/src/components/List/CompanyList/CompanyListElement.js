import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SubsribeButton from "../../SubscribeButton/SubsribeButton";
// import { Accordion, Badge } from "react-bootstrap";
// import LineChart from "../../Graphs/LineChart";
// import Meter from "../../Meters/Meter";

const CompanyListElement = ({
  growthPoint,
  interestPoint,
  eventKey,
  companyName,
  Upjongpage,
  loggedIn,
  portfolioPage,
  isSubscribed,
  companyCategoryName,
}) => {
  if (Upjongpage) {
    return (
      <tr>
        <th scope="row">{eventKey + 1}</th>
        <td>{companyName}</td>
        <td>{interestPoint}%</td>
        <td>{growthPoint}%</td>
        <td>
          <Link
            to={{
              pathname: `/company/${companyName}`,
            }}
          >
            <span>
              <Button>자세히보기</Button>
            </span>
          </Link>
        </td>
        {sessionStorage.getItem("data") ? (
          <td>
            <SubsribeButton
              companyName={companyName}
              isSubscribed={isSubscribed}
            />
          </td>
        ) : (
          <></>
        )}
      </tr>
    );
  }

  if (portfolioPage) {
    return (
      <tr>
        <th scope="row">{eventKey + 1}</th>
        <td>{companyCategoryName}</td>
        <td>{companyName}</td>
        <td>
          <Link
            to={{
              pathname: `/company/${companyName}`,
            }}
          >
            <span>
              <Button>자세히보기</Button>
            </span>
          </Link>
        </td>
        <td>
          <SubsribeButton
            companyName={companyName}
            isSubscribed={isSubscribed}
            portfolioPage={portfolioPage}
          />
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{companyName}</td>
      <td>{interestPoint}%</td>
      <td>{growthPoint}%</td>
      <td>
        <Link
          to={{
            pathname: `/company/${companyName}`,
          }}
        >
          <span>
            <Badge style={{ fontSize: "0.5rem" }}>GO</Badge>
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default CompanyListElement;
