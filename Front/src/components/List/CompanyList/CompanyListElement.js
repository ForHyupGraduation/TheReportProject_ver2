import React from "react";
import { Badge } from "react-bootstrap";
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
  page,
  loggedIn,
}) => {
  const [like, setLike] = useState(false);
  const [isLoading, setIsLoading] = useState();

  // useEffect(() => {
  //   const fechData = async () => {
  //     setIsLoading(true);
  //     try {
  //       await axios.get(``).then((res) => {});
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setIsLoading(false);
  //   };
  //   fechData();
  // }, []);

  const toggleLike = async (e) => {
    // const res = await axios.post(``);컴퍼니 네임 전달?
    setLike(!like);
  };
  if (loggedIn) {
    console.log(loggedIn);
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
            <Badge>자세히 보기</Badge>
          </Link>
        </td>
        <td>
          <SubsribeButton like={like} onClick={toggleLike} />
        </td>
      </tr>
    );
  }

  if (page) {
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
            <Badge style={{ fontSize: "0.5rem" }}>GO</Badge>
          </Link>
        </td>
      </tr>
    );
  }
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
          <Badge>자세히 보기</Badge>
        </Link>
      </td>
      <td>sad</td>
    </tr>
  );
};

export default CompanyListElement;
