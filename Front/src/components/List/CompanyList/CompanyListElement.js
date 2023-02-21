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
  Upjongpage,
  loggedIn,
  portfolioPage,
  isSubscribed,
}) => {
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

    await axios
      .post("http://localhost:8080/add/portfolio", JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    setSubscribeLoading(true);
  };

  const unSubscribe = async (e) => {
    console.log("unSub");
    let data = {
      memberId: JSON.parse(sessionStorage.getItem("data")).id,
      companyName: companyName,
    };
    console.log("data");

    await axios
      .post("http://localhost:8080/remove/portfolio", JSON.stringify(data), {
        headers: {
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    setSubscribeLoading(true);
  };

  if (Upjongpage) {
    console.log(isSubscribed);
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
              <Badge>자세히보기</Badge>
            </span>
          </Link>
        </td>
        {sessionStorage.getItem("data") ? (
          <td>
            {/* <SubsribeButton like={like} onClick={toggleLike} /> */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={subscribe}
            >
              {subscribeLoading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                `구독하기`
              )}
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      선택하신 기업 구독이 완료되었습니다.
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    포트폴리오 기능 중 알람을 설정하여 원하는 떄에 이메일을 받을
                    수 있습니다.
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        setSubscribeLoading(false);
                      }}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setSubscribeLoading(false);
                        window.location.reload();
                      }}
                      data-bs-dismiss="modal"
                    >
                      Understood
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
        <td>{companyName}</td>
        <td>
          <Link
            to={{
              pathname: `/company/${companyName}`,
            }}
          >
            <span>
              <Badge>자세히보기</Badge>
            </span>
          </Link>
        </td>
        <td>
          {/* <SubsribeButton like={like} onClick={toggleLike} /> */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={unSubscribe}
          >
            {subscribeLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              `구독취소하기`
            )}
          </button>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    선택하신 기업 구독 취소 되었습니다.
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  원하실 경우 다시 구독 설정하여 원하는 떄에 이메일을 받을 수
                  있습니다.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setSubscribeLoading(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setSubscribeLoading(false);
                      window.location.reload();
                    }}
                    data-bs-dismiss="modal"
                  >
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
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
