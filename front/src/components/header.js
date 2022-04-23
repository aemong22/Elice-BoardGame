import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <div>
                {/* 임시 코드 */}
                <ul style={{ display: "flex", justifyContent: "space-around", width: "300px", fontSize: "2rem" }}>
                    <li onClick={() => navigate("/")}>About</li>
                    <li onClick={() => navigate("/boardgame")}>Boardgame</li>
                </ul>
            </div>
        </>
    )
}

export default Header;