import { useState } from "react";
import "./user.css";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="login-modal">
      <img src="image/dice.png" alt="주사위" />
    </div>
  );
}

export default LoginForm;
