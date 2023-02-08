import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Resist = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputNickName, setInputNickName] = useState("");

  const handleInputId = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputNickName = (e) => {
    setInputNickName(e.target.value);
  };

  const onClickResist = () => {
    console.log("click regist");
    console.log("ID : ", inputEmail);
    console.log("PW : ", inputPw);

    axios
      //serer url 요청
      .post("/user_inform/resist", null, {
        params: {
          user_id: inputEmail,
          user_pw: inputPw,
          user_NickName: inputNickName,
        },
      })
      .catch();
    document.location.href = "/login";
  };
  useEffect(() => {
    axios
      .get("/user_inform/resist")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <LoginContainer>
      <LoginForm>
        <LoginHeader>
          <LoginTitle>Resist</LoginTitle>
          <LoginDescription>
            Enter your details to start session
          </LoginDescription>
        </LoginHeader>
        <LoginInput>
          <LoginLabel htmlFor="input-E_mail">E-mail</LoginLabel>
          <LoginText
            type="text"
            name="input-E_mail"
            value={inputEmail}
            onChange={handleInputId}
          />
        </LoginInput>
        <LoginInput>
          <LoginLabel htmlFor="input_pw">Password</LoginLabel>
          <LoginText
            type="password"
            name="input_pw"
            value={inputNickName}
            onChange={handleInputNickName}
          />
        </LoginInput>
        <LoginInput>
          <LoginLabel htmlFor="input_NickName">NickName</LoginLabel>
          <LoginText
            type="text"
            name="input_NickName"
            value={inputPw}
            onChange={handleInputPw}
          />
        </LoginInput>
        <LoginButtonContainer>
          <LoginButton type="button" onClick={onClickResist}>
            Resist
          </LoginButton>
        </LoginButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Resist;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f2f2;
`;

const LoginForm = styled.form`
  width: 400px;
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const LoginTitle = styled.h1`
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
