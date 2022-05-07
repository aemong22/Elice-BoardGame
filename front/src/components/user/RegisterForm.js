import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api";
import { Button, Grid, TextField, Box } from "@mui/material";
import { toast } from "react-toastify";
import "./user.css";

function RegisterForm({ setRegister, handleClose }) {
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
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
                user_name: name,
                email,
                password,
                phone_number: phoneNumber,
            });

            // 페이지 이동 loginForm으로 이동할 수 있게 수정하기
            navigate("/");
        } catch (err) {
            toast.err("회원가입에 실패하였습니다.", err);
        }
    };

    return (
        <Box id="register">
            <Grid id="button" style={{ textAlign: "right" }}>
                <Button
                    variant="text"
                    className="closebutton"
                    onClick={handleClose}
                >
                    x
                </Button>
            </Grid>
            <Box className="create-account">Create Account</Box>
            <Grid style={{ height: "80px" }}>
                <TextField
                    className="register-input"
                    style={{ width: "80%", margin: "10px" }}
                    size="small"
                    label="NAME"
                    helperText={isNameValid ? "" : "두글자 이상 입력해주세요."}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid style={{ height: "80px" }}>
                <TextField
                    className="register-input"
                    style={{ width: "80%", margin: "10px" }}
                    size="small"
                    label="E-MAIL"
                    helperText={
                        isEmailValid ? "" : "이메일 형식이 올바르지 않습니다."
                    }
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid style={{ height: "80px" }}>
                <TextField
                    type="password"
                    className="register-input"
                    style={{ width: "80%", margin: "10px" }}
                    size="small"
                    label="PASSWORD"
                    helperText={
                        isPasswordValid ? "" : "비밀번호는 4글자 이상입니다."
                    }
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Grid>
            <Grid style={{ height: "75px" }}>
                <TextField
                    type="password"
                    className="register-input"
                    style={{ width: "80%", margin: "10px" }}
                    size="small"
                    label="CONFIRM-PASSWORD"
                    helperText={
                        isPasswordSame ? "" : "비밀번호가 일치하지 않습니다."
                    }
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Grid>
            <Grid style={{ height: "70px" }}>
                <TextField
                    className="register-input"
                    style={{ width: "80%", margin: "10px" }}
                    size="small"
                    label="PHONE-NUMBER"
                    helperText={"필수입력아닙니다."}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </Grid>
            <Grid>
                <Button
                    variant="text"
                    type="submit"
                    className="createbutton"
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    setRegister={false}
                >
                    회원가입
                </Button>
            </Grid>
        </Box>
    );
}

export default RegisterForm;
