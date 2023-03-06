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
<<<<<<< HEAD
  const [like, setLike] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [subscribeLoading, setSubscribeLoading] = useState();

  useEffect(() => {
    // const fechData = async () => {
    //   setIsLoading(true);
    //   try {
    //     await axios.get(``).then((res) => {});
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   setIsLoading(false);
    // };
    // fechData();
    if (!subscribeLoading) {
      return;
    }
  }, [subscribeLoading]);

  const toggleLike = async (e) => {
    // const res = await axios.post(``);컴퍼니 네임 전달?
    setLike(!like);
  };

  const subscribe = async (e) => {
    let data = {
      memberId: JSON.parse(sessionStorage.getItem("data")).id,
      companyName: companyName,
    };
    console.log(data);
    await axios
      .post("http://localhost:8080/add/portpolio", data,{headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    setSubscribeLoading(true);
  };

  const onClick = async (e) => {
    // await axios
    //   .post(
    //     "http://localhost:8080/add/portfolio",
    //     {
    //       memberId: JSON.parse(sessionStorage.getItem("data")).id,
    //       companyName: { companyName },
    //     },
    //     null
    //   )
    //   .then((res) => {});
  };

=======
>>>>>>> 03315f434f04abaedfa2760665679b3474b053a2
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
