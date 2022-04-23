import { useState } from "react";
import { Button } from "@mui/material";

import "./user.css";
function LoginForm({ setOpen, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="modal">
      <Button variant="text" color="primary" onClick={handleClose}>
        닫기
      </Button>
      <img src="image/dice.png" alt="주사위" />

      <div className="login">
        <input
          className="login-input"
          name="email"
          type="text"
          placeholder="E-MAIL"
        />
        <input
          className="login-input"
          name="password"
          type="text"
          placeholder="PASSWORD"
        />
      </div>

      <Button className="login-button">LOGIN</Button>

      <div className="sns-login">sns 로그인</div>

      <Button variant="text" className="login-bottom" href="">
        ID/PW찾기
      </Button>
      <span className="login-bottom">|</span>
      <Button variant="text" className="login-bottom">
        회원가입
      </Button>
    </div>
  );
}

export default LoginForm;
