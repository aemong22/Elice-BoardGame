import React, { useState } from "react";
import { useEffect } from "react";
import * as Api from "../../api";
import { StylesProvider } from "@material-ui/core";
import {
  MyBox,
  Title,
  StyledInput,
  Content,
  SubTitle,
  SubContent,
  HelperText,
  MyButton,
} from "./ProfileStyle";

function Profile({ ownerData, setOwnerData }) {
  const [user_name, setUser_name] = useState(ownerData.user_name);
  const email = ownerData.email;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone_number, setPhone_number] = useState(ownerData?.phone_number);

  const isPasswordValid = password.length >= 4;
  const isPasswordSame = password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await Api.put(`users/${ownerData.id}`, {
      user_name,
      email,
      password,
      phone_number,
    });
    const updateUser = res.data;
    setUser_name(updateUser);

    alert("정보를 수정했습니다.");
  };

  return (
    <>
      <MyBox>
        <Title>회원 정보 수정</Title>
        <Content>
          <SubContent>
            <SubTitle>이름</SubTitle>
            <StyledInput
              type="text"
              required
              value={user_name}
              onChange={(e) => {
                setUser_name(e.target.value);
              }}
            />
          </SubContent>

          <SubContent>
            <SubTitle>이메일</SubTitle>
            <StyledInput
              type="text"
              required
              disabled={true}
              value={ownerData.email}
            />
            <HelperText> 변경하실 수 없습니다.</HelperText>
          </SubContent>

          <SubContent>
            <SubTitle>비밀번호</SubTitle>
            <StyledInput
              type="text"
              required
              placeholder="비밀번호 변경"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPasswordValid ? null : (
              <HelperText> 4자리 이상 입력해주세요.</HelperText>
            )}
          </SubContent>

          <SubContent>
            <SubTitle>비밀번호 확인</SubTitle>
            <StyledInput
              type="text"
              required
              placeholder="비밀번호 확인"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {isPasswordSame ? null : (
              <HelperText>비밀번호가 일치하지 않습니다.</HelperText>
            )}
          </SubContent>

          <SubContent>
            <SubTitle>전화번호</SubTitle>
            <StyledInput
              type="text"
              placeholder="전화번호 변경"
              required
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </SubContent>
          <SubContent style={{ textAlign: "center" }}>
            <StylesProvider injectFirst>
              <MyButton onClick={handleSubmit}>변경하기</MyButton>
            </StylesProvider>
          </SubContent>
        </Content>
      </MyBox>
    </>
  );
}

export default Profile;
