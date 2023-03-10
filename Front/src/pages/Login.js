import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Layouts/Header";
import LoginBackground from "../videos/LoginBackground.mp4";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const onClickLogin = async () => {
    console.log("click login");
    console.log("ID : ", inputEmail);
    console.log("PW : ", inputPw);

    await axios
      .post(
        "http://localhost:8080/login",
        {
          email: inputEmail,
          password: inputPw,
        },
        null
      )
      .then((res) => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.id);
        console.log("res.data.msg :: ", res.data.nickName);

        const data = { id: res.data.id, nickName: res.data.nickName };
        // if (res.data.userId === undefined) {
        //   //id 일치치하지 않는 경우 userId = undefined, msg = '입력하신 ID가 일치하지 않습니다.'
        //   console.log("======================", res.data.msg);
        //   alert("입력하신 ID 가 일치하지 않습니다.");
        // } else if (res.data.userId === null) {
        //   //id는 있지만, pw는 다른 경우 userId = null , msg = undefined
        //   console.log(
        //     "======================",
        //     "입력하신 비밀번호가 일치하지 않습니다."
        //   );
        // alert("입력하신 비밀번호가 일치하지 않습니다.");
        // }
        // if (res.data.id === inputEmail) {
        //id , pw 모두 일치 userId = userId1 , msg = undefined
        console.log("======================", "로그인 성공");
        sessionStorage.setItem("data", JSON.stringify(data));
        console.log(sessionStorage.getItem("data"));
        window.location = "http://localhost:3000/";
        //작업 완료 되면 페이지 이동(새로고침)
        // }
      })
      .catch();
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/login")
  //     .then((res) => console.log(res))
  //     .catch();
  // }, []);

  return (
    <div
      style={{
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <video muted autoPlay loop style={{ width: "auto", height: "100%" }}>
        <source src={LoginBackground} type="video/mp4" />
      </video>
      <LoginContainer
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm>
          <LoginHeader>
            <LoginTitle style={{ color: "white" }}>Login</LoginTitle>
            <LoginDescription>
              Enter your details to start session
            </LoginDescription>
          </LoginHeader>
          <LoginInput>
            <LoginLabel htmlFor="input-E_mail" style={{ color: "white" }}>
              E-mail
            </LoginLabel>
            <LoginText
              type="text"
              name="input-E_mail"
              value={inputEmail}
              onChange={handleInputEmail}
            />
          </LoginInput>
          <LoginInput>
            <LoginLabel htmlFor="input_pw" style={{ color: "white" }}>
              Password
            </LoginLabel>
            <LoginText
              type="password"
              name="input_pw"
              value={inputPw}
              onChange={handleInputPw}
            />
          </LoginInput>
          <LoginButtonContainer>
            <LoginButton type="button" onClick={onClickLogin}>
              Login
            </LoginButton>
            <ExternalLogin>
              <ExternalLoginButton>
                <i className="fa-brands fa-google"></i>
              </ExternalLoginButton>
              <ExternalLoginButton>
                <i className="fa-solid fa-n"></i>
              </ExternalLoginButton>
            </ExternalLogin>
          </LoginButtonContainer>
          <SignUpLinkContainer>
            <SignUpLink
              to={{ pathname: `/regist` }}
              style={{ textDecoration: "none", color: "white" }}
            >
              Not a member yet?
            </SignUpLink>
          </SignUpLinkContainer>
        </LoginForm>
      </LoginContainer>
    </div>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const LoginForm = styled.form`
  width: 400px;
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const LoginTitle = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: bold;
  color: #333;
`;

const LoginDescription = styled.p`
  font-size: 14px;
  color: #9b9b9b;
  margin-top: 10px;
`;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const LoginLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const LoginText = styled.input`
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #dcdcdc;
  font-size: 14px;
  color: #333;
  transition: 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background: #333;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1e90ff;
  }
`;

const ExternalLogin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const ExternalLoginButton = styled.button`
  width: 49%;
  height: 40px;
  background: #333;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1e90ff;
  }
`;
const SignUpLinkContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const SignUpLink = styled(Link)`
  color: blue;
  font-weight: bold;
  text-decoration: underline;
`;
