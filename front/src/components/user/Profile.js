import React, { useState } from "react";
import { useEffect } from "react";
import * as Api from "../../api";
import {
  MyBox,
  Title,
  StyledInput,
  Content,
  SubTitle,
  SubContent,
  HelperText,
} from "./ProfileStyle";

function Profile({ ownerData, setOwnerData }) {
  console.log(ownerData);
  const [user_name, setUser_name] = useState(ownerData?.user_name);
  const [email, setEmail] = useState(ownerData?.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone_number, setPhone_number] = useState(ownerData.phone_number);

  const isPasswordValid = password.length >= 4;
  const isPasswordSame = password === confirmPassword;

  return (
    <>
      <MyBox>
        <Title>회원 정보 수정</Title>
        <Content>
          <SubContent>
            <SubTitle>이름</SubTitle>
            <StyledInput
              type="text"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
            />
          </SubContent>

          <SubContent>
            <SubTitle>이메일</SubTitle>
            <StyledInput type="text" disabled={true} value={email} />
            <HelperText> 변경하실 수 없습니다.</HelperText>
          </SubContent>

          <SubContent>
            <SubTitle>비밀번호</SubTitle>
            <StyledInput
              type="text"
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
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </SubContent>
        </Content>
      </MyBox>
    </>
  );
}

export default Profile;
