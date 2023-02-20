import React, { useState, useEffect } from "react";
import axios from "axios";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import styled from "styled-components";
import CompanyCards from "../components/Cards/CompanyList/CompanyCard";
import RatioDescription from "../components/RatioDescription/RatioDescription";

const Test = () => {
  const [testData, setTestData] = useState();
  const [Loading, setLoading] = useState();

  // useEffect(() => {
  //   const fechData = async () => {
  //     setLoading(true);
  //     try {
  //       await axios
  //         .get("http://localhost:5000/company/yearly/sales/263/카카오게임즈")
  //         .then((response) => {
  //           setTestData(response.data.yearlySales);
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fechData();

  //   setLoading(false);
  // }, []);
  // if (Loading) {
  //   return <div>로딩중입니다.</div>;
  // }

  // if (!testData) {
  //   return null;
  // }

  // if (!Loading && testData) {
  //   console.log(testData);
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  background: #f2f2f2;
`;

const ProfileForm = styled.div`
  width: 800px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  img.profile__background {
    border-radius: 10px;

    width: 100%;
    height: 30vh;
  }
  img.profile__Img {
    border-radius: 50%;
    width: 8vw;
  }
`;

const ProfileSubContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: solid 1px;
`;

const ProfileSubContainer2 = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: solid 1px;
`;

const ProfileText = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  justify-content: center;
  border: solid 1px;
  align-items: center;
`;

const ProfileMain = styled.div`
  display: flex;
`;

const CompanyRatio = styled.div`
  display: flex;
  border: solid 1px;
  width: 50%;
`;

const Description = styled.div`
  display: flex;
  border: solid 1px;
  width: 50%;
`;
