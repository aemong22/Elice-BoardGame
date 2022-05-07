import React, { useState } from "react";
import "./user.css";
import * as Api from "../../api";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/userAction";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Box } from "@mui/material";
import OAuthBtn from "./OAuthBtn";
import { toast } from "react-toastify";

function LoginForm({ handleClose }) {
    const [findPW, setFindPW] = useState(false);
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const isEmailValid = validateEmail(email);

    const isPasswordValid = password.length >= 4;
    const isFormValid = isEmailValid && isPasswordValid;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await Api.post("user/login", {
                email,
                password,
            });

            const user = res.data;

            const jwtToken = user.token;

            sessionStorage.setItem("userToken", jwtToken);

            dispatch(loginUser(user));

            navigate("/", { replace: true });
        } catch (err) {
            toast.error("이메일 또는 비밀번호가 유효하지 않습니다.");
        }
        console.log(email, password);
    };

    const handleFindPw = async (e) => {
        e.preventDefault();

        try {
            const reset = await Api.post(`reset_token`, {
                email,
            });

            if (reset.data.status === "Success") {
                toast.info("메일을 전송했습니다.");
                // 로그인 페이지로 이동함.
                setFindPW(false);
            } else if (reset.data === false) {
                toast.info("구글 로그인입니다.");
            } else {
                toast.error("존재하지 않는 이메일입니다.");
            }
        } catch (err) {
            toast.error("존재하지 않는 이메일입니다.");
            console.log("비밀번호 전송에 실패했습니다.", err);
        }
    };

    return (
        <>
            {register ? (
                <RegisterForm
                    setRegister={setRegister}
                    handleClose={handleClose}
                />
            ) : (
                <Box id="modal">
                    <Grid id="button" style={{ textAlign: "right" }}>
                        <Button
                            variant="text"
                            className="closebutton"
                            onClick={handleClose}
                        >
                            x
                        </Button>
                    </Grid>

                    <img src="image/dice.png" alt="주사위" />
                    {!findPW ? (
                        <>
                            <Grid className="login">
                                <TextField
                                    type="email"
                                    style={{
                                        width: "80%",
                                        margin: "10px",
                                        height: "60px",
                                    }}
                                    label="E-MAIL"
                                    size="small"
                                    onChange={(e) => setEmail(e.target.value)}
                                    helperText={
                                        isEmailValid
                                            ? ""
                                            : "이메일 형식이 올바르지 않습니다."
                                    }
                                />
                                <TextField
                                    type="password"
                                    style={{
                                        width: "80%",
                                        margin: "10px",
                                        height: "60px",
                                    }}
                                    label="PASSWORD"
                                    size="small"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    helperText={
                                        isPasswordValid
                                            ? ""
                                            : "비밀번호는 4글자 이상입니다."
                                    }
                                />
                            </Grid>

                            <Button
                                className="login-button"
                                onClick={handleSubmit}
                                disabled={!isFormValid}
                            >
                                LOGIN
                            </Button>
                            <Box className="or">or</Box>
                            <br />
                            <OAuthBtn />
                            <br />

                            <Button
                                variant="text"
                                className="login-bottom"
                                onClick={() => setFindPW(true)}
                            >
                                ID/PW찾기
                            </Button>
                            <span className="login-bottom">|</span>
                            <Button
                                variant="text"
                                className="login-bottom"
                                onClick={() => setRegister(true)}
                            >
                                회원가입
                            </Button>
                        </>
                    ) : (
                        <>
                            <Box id="findPw">비밀번호 재설정</Box>

                            <TextField
                                type="email"
                                style={{
                                    width: "80%",
                                    margin: "20px",
                                    height: "65px",
                                }}
                                label="E-MAIL"
                                size="small"
                                onChange={(e) => setEmail(e.target.value)}
                                helperText={
                                    isEmailValid
                                        ? ""
                                        : "이메일 형식이 올바르지 않습니다."
                                }
                            />

                            <Button
                                className="login-button"
                                onClick={handleFindPw}
                                disabled={!isEmailValid}
                            >
                                찾기
                            </Button>

                            <Box className="findPW-detail">
                                <Grid>
                                    입력한 E-Mail로 임시 비밀번호를
                                    보내드립니다.
                                    <br />
                                    <br />
                                    입력후 찾기 버튼을 눌러주세요.
                                </Grid>
                            </Box>
                            <Box className="or">or</Box>
                            <Box className="findPW-detail">
                                아직 회원이 아니시면 회원가입을 해주세요.
                            </Box>

                            <Button
                                variant="text"
                                className="login-bottom"
                                onClick={() => (
                                    setRegister(true), setFindPW(false)
                                )}
                            >
                                회원가입
                            </Button>
                        </>
                    )}
                </Box>
            )}
        </>
    );
}

export default LoginForm;
