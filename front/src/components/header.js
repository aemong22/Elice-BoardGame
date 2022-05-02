import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/actions/userAction";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    // dispatch 함수를 이용해 로그아웃함.
    dispatch(logoutUser());
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <ul className="header-navigate">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/boardgame")}>Boardgame</li>
          <li>MyPage</li>
          <li onClick={logout} style={{ cursor: "pointer" }}>
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
