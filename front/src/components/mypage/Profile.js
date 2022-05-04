import React, { useState } from "react";
import * as Api from "../../api";
import { StylesProvider } from "@material-ui/core";
import AWS from "aws-sdk";
import PersonIcon from "@mui/icons-material/Person";

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
    //이미지 넣는 코드
    const region = "ap-northeast-2";
    const bucket = "pinkpig-bucket";

    AWS.config.update({
        region: region,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    const handleFileInput = async (e) => {
        // input 태그를 통해 선택한 파일 객체
        console.log(ownerData._id);
        const file = e.target.files[0];

        // img 필드에 id값 업로드
        await Api.put(`user/${ownerData._id}`, {
            image: ownerData._id,
        });

        console.log("이미지 성공");
        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: bucket, // 버킷 이름
                Key: ownerData._id + ".png", // 유저 아이디
                Body: file, // 파일 객체
            },
        });

        const promise = upload.promise();
        promise.then(
            function () {
                alert("이미지 업로드에 성공했습니다.");
                window.location.reload();
            },
            function (err) {
                return console.log("오류가 발생했습니다: ", err);
            }
        );
    };

    //회원정보 변경 코드
    const [user_name, setUser_name] = useState(ownerData.user_name);
    const email = ownerData.email;
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone_number, setPhone_number] = useState(ownerData?.phone_number);
    const isPasswordValid = password.length >= 4;
    const isPasswordSame = password === confirmPassword;
    const isNameValid = user_name.length >= 2;
    const isFormValid = isPasswordValid && isPasswordSame && isNameValid;

    console.log("유저데이터", ownerData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await Api.put(`user/${ownerData._id}`, {
            user_name,
            email,
            password,
            phone_number,
        });
        const updateUser = res.data;
        setOwnerData(updateUser);
        console.log(updateUser);
        setPassword("");
        setConfirmPassword("");

        alert("정보를 수정했습니다.");
    };

    return (
        <>
            <MyBox>
                <Title>
                    <PersonIcon /> 회원정보 변경
                </Title>
                <form onSubmit={handleSubmit} style={{ height: "80%" }}>
                    <Content>
                        <SubContent>
                            <SubTitle>프로필 사진 변경하기</SubTitle>
                            <StyledInput
                                style={{ width: "50%" }}
                                type="file"
                                id="upload"
                                className="image-upload"
                                onChange={handleFileInput}
                            />
                        </SubContent>
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
                            {isNameValid ? null : (
                                <HelperText>
                                    {" "}
                                    2글자 이상입력해주세요.
                                </HelperText>
                            )}
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
                                type="password"
                                value={password}
                                required
                                placeholder="비밀번호 변경"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {isPasswordValid ? null : (
                                <HelperText>
                                    {" "}
                                    4자리 이상 입력해주세요.
                                </HelperText>
                            )}
                        </SubContent>

                        <SubContent>
                            <SubTitle>비밀번호 확인</SubTitle>
                            <StyledInput
                                type="password"
                                required
                                value={confirmPassword}
                                placeholder="비밀번호 확인"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            {isPasswordSame ? null : (
                                <HelperText>
                                    비밀번호가 일치하지 않습니다.
                                </HelperText>
                            )}
                        </SubContent>

                        <SubContent>
                            <SubTitle>전화번호</SubTitle>
                            <StyledInput
                                type="text"
                                placeholder="전화번호 변경"
                                required
                                value={phone_number}
                                onChange={(e) =>
                                    setPhone_number(e.target.value)
                                }
                            />
                        </SubContent>
                        <SubContent
                            style={{ textAlign: "center", height: "10%" }}
                        >
                            <StylesProvider injectFirst>
                                <MyButton type="submit" disabled={!isFormValid}>
                                    변경하기
                                </MyButton>
                            </StylesProvider>
                        </SubContent>
                    </Content>
                </form>
            </MyBox>
        </>
    );
}

export default Profile;
