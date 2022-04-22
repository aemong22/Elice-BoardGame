import { useState } from "react";
import "./user.css";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="modal">
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

      <button className="login-button">LOGIN</button>

      <div>sns 로그인</div>

      <button className="login-bottom">ID/PW찾기</button>
      <span className="login-bottom">|</span>
      <button className="login-bottom">회원가입</button>
    </div>
  );
}

export default LoginForm;
