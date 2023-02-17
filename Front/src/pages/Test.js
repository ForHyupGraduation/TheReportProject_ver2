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
      <ProfileContainer>
        <ProfileForm>
          <ProfileHeader>
            <img
              className="profile__background"
              src="https://w.namu.la/s/a585247b088ef3ae11d8a649817d1a7c798391317581940983d9fabf3528421f3c4f949d0c82f195f4f4e5a09291e38d506e06ff96c9dfdbb70a99c256615ca55b5e2a7287e4b4a1e4468028095cf7533f63676eeda527eb0e0c5fbadbc012d55b86f7b8fb8ed59a4ce3ab8535045f88"
              alt="Profile Img"
            />
            <ProfileMain>
              <img
                className="profile__Img"
                src="https://w.namu.la/s/369f2dff95928b30bb3745788067fef8047aa55fcab39c864f6bf4e70f01619e1d9d8d7f3b56b8ea88b34a64d30814f2cab69c3210338923636d8faf0e7aa4dec0276bdf943b4c5b701eebda05d16a40299dffbf80c709f98da3fa0dbc56fd76"
                alt="profile Img"
              />
              <ProfileText>닉네임 : 류으미</ProfileText>
            </ProfileMain>
          </ProfileHeader>
          <ProfileSubContainer1>
            <div className="album py-5">
              <div className="container">
                <CompanyCards />
              </div>
            </div>
          </ProfileSubContainer1>
          <ProfileSubContainer2>
            <CompanyRatio>
              <DoughnutChart />
            </CompanyRatio>
            <Description>
              <RatioDescription />
            </Description>
          </ProfileSubContainer2>
        </ProfileForm>
      </ProfileContainer>
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
