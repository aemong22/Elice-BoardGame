import { useNavigate } from "react-router-dom";
import "./Header.css"

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <div className="header">
                <ul className="header-navigate">
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li onClick={() => navigate("/boardgame")}>Boardgame</li>
                    <li>MyPage</li>
                </ul>
            </div>
        </>
    )
}

export default Header;