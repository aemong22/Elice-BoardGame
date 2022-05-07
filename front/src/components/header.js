import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/actions/userAction";
import { MenuList, MenuItem, Button, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as Api from "../api";
import "./Header.css";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => (state ? state.userReducer : {}));

    const isLogin = !!userState?.user;

    const logout = () => {
        // dispatch 함수를 이용해 로그아웃함.
        dispatch(logoutUser());
        // 기본 페이지로 돌아감.
        navigate("/");
    };

    const [ownerData, setOwnerData] = useState(undefined);

    const fetchPorfolioOwner = async () => {
        const res = await Api.get("currentUser");
        setOwnerData(res.data);
    };

    useEffect(() => {
        fetchPorfolioOwner();
    }, [navigate]);

    if (window.location.pathname === "/pwlink") return null;
    return (
        <>
            {isLogin && (
                <div className="header">
                    <nav>
                        <ul className="home">
                            <li onClick={() => navigate("/")}>
                                <Button variant="text" color="default">
                                    <div className="home-logo" /> boardmon
                                </Button>
                            </li>
                        </ul>
                        <ul className="menu">
                            <li onClick={() => navigate("/boardgame")}>
                                <Button color="default">Boardgame</Button>
                            </li>
                            <li onClick={() => navigate("/community")}>
                                <Button color="default">Community</Button>
                            </li>
                            <li id="menu" style={{ cursor: "pointer" }}>
                                <Grid
                                    id="profile"
                                    style={{
                                        backgroundImage: `url(https://elice-boardgame-project.s3.ap-northeast-2.amazonaws.com/${ownerData?.image}.png)`,
                                        backgroundSize: "100% 100%",
                                        backgroundRepeat: "no-repeat",
                                        float: "left",
                                    }}
                                />
                                <ArrowDropDownIcon />
                                <MenuList id="submenu">
                                    <MenuItem className="item" disabled={true}>
                                        Hi {ownerData?.user_name}
                                    </MenuItem>
                                    <MenuItem
                                        className="item"
                                        onClick={() => navigate("/mypage")}
                                    >
                                        Mypage
                                    </MenuItem>
                                    <MenuItem
                                        className="item"
                                        onClick={() => logout()}
                                    >
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;
