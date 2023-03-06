import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CompanyCards from "../components/Cards/CompanyList/CompanyCards";
import DoughnutChart from "../components/Graphs/DoughnutChart";
import RatioDescription from "../components/RatioDescription/RatioDescription";

const Profile = () => {
  const [member_id, setMember_id] = useState();
  const [subscribed, setSubscribed] = useState();
  const [isLoading, setIsLoading] = useState();
  const [userNickName, setUserNickName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [subscribedCompany, setSubscribedCompany] = useState();
  const [sortedCompany, setSortedCompany] = useState();
  let memberId = JSON.parse(sessionStorage.getItem("data")).id;

  useEffect(() => {
    const fechData = async () => {
      console.log("새로고침");
      setIsLoading(true);
      try {
        await axios
          .get(`http://localhost:8080/my-profile?memberId=${memberId}`)
          .then((res) => {
            setSubscribedCompany(res.data.portFolioDtos);
            setUserNickName(res.data.result.nickName);
            setUserEmail(res.data.result.email);
            setSortedCompany(res.data.companySimpleDtos);
          });
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fechData();
  }, []);

  if (!isLoading && sortedCompany) {
    let subscribedRatios = Object();
    let categoryName = subscribedCompany.map((company) => {
      let name = company.categoryName;
      subscribedRatios[name] = (subscribedRatios[name] || 0) + 1;
      return company.categoryName;
    });
    console.log(categoryName);
    console.log(subscribedRatios);
    return (
      <>
        <ProfileContainer>
          <ProfileForm>
            <ProfileHeader>
              <ProfileImage>
                <img
                  className="profile__Img"
                  src="https://w.namu.la/s/369f2dff95928b30bb3745788067fef8047aa55fcab39c864f6bf4e70f01619e1d9d8d7f3b56b8ea88b34a64d30814f2cab69c3210338923636d8faf0e7aa4dec0276bdf943b4c5b701eebda05d16a40299dffbf80c709f98da3fa0dbc56fd76"
                  alt="profile Img"
                />
              </ProfileImage>
              <ProfileMain>
                <ProfileText>
                  <div style={{ paddingBottom: "10px" }}>
                    닉네임 : {userNickName}
                  </div>
                  <div>이메일 : {userEmail}</div>
                </ProfileText>
              </ProfileMain>
            </ProfileHeader>
            <SubTitle>보유 회사 중 구독수 1~3위</SubTitle>
            <ProfileSubContainer1>
              <div>
                <CompanyCards sortedCompany={sortedCompany} />
              </div>
            </ProfileSubContainer1>
            <SubTitle>업종비율</SubTitle>
            <ProfileSubContainer2>
              <CompanyRatio>
                <DoughnutChart subRatio={subscribedRatios} />
              </CompanyRatio>
              <Description>
                <RatioDescription />
              </Description>
            </ProfileSubContainer2>
          </ProfileForm>
        </ProfileContainer>
      </>
    );
  }
};

export default Profile;

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
  flex-direction: column;
  justify-content: center;
  position: relative;
  justify-content: center;
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

const SubTitle = styled.div`
  text-align: center;
`;

const ProfileImage = styled.div`
  display: flex;
  img {
    border: solid 1px white;
  }
  justify-content: center;
  align-items: center;
  height: 300px;
  border: solid 1px;
  background-size: 800px 300px;
  background-image: url("https://w.namu.la/s/a585247b088ef3ae11d8a649817d1a7c798391317581940983d9fabf3528421f3c4f949d0c82f195f4f4e5a09291e38d506e06ff96c9dfdbb70a99c256615ca55b5e2a7287e4b4a1e4468028095cf7533f63676eeda527eb0e0c5fbadbc012d55b86f7b8fb8ed59a4ce3ab8535045f88");
`;
