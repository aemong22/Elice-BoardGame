import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api";

function RegisterForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // 유효한 이메일 형태인지 확인
    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    // 조건 확인
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 4;
    const isPasswordSame = password === confirmPassword;
    const isNameValid = name.length >= 2;
    const isFormValid =
        isEmailValid && isPasswordValid && isPasswordSame && isNameValid;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // "user/register" 엔드포인트로 post요청
            await Api.post("user/register", {
                user_name : name,
                email,
                password,
                phone_number : phoneNumber,
            });

            // 페이지 이동 loginForm으로 이동할 수 있게 수정하기
            navigate("/");
        } catch (err) {
            alert("회원가입에 실패하였습니다.", err);
        }
    };


    return (
        <>
            <input
              className="register-input"
              name="name"
              type="text"
              placeholder="NAME"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="register-input"
              name="email"
              type="text"
              placeholder="E-MAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="register-input"
              name="password"
              type="text"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="register-input"
              name="confirm-password"
              type="text"
              placeholder="CONFIRM-PASSWORD"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className="register-input"
              name="phone-number"
              type="text"
              placeholder="PHONE-NUMBER"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button 
              variant="text" 
              type="submit"
              className="closebutton" 
              onClick={handleSubmit}
            >
            회원가입
            </button>

        </>
    )
}

export default RegisterForm