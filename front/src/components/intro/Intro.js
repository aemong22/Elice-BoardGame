import "./Intro.css";
import RegisterBtn from "./RegisterBtn";
import LoginForm from "../user/LoginForm";
import { Button, Dialog, Modal } from "@mui/material";
import { useState } from "react";

const Intro = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div id="container">
            <div id="wrapper">
                <div id="wrapper_letter">
                    <span id="title">
                        I Do Like <br />
                        Board Games!
                    </span>
                    <span id="sub_title">
                        다양한 보드게임을 추천받고 원하는 게임을 선택해보세요!
                    </span>
                    <a href="https://accounts.google.com/o/oauth2/auth?client_id=74651602496-cli9c5rhrpb72fs07gvsramgr43dlu4o.apps.googleusercontent.com&redirect_uri=http://localhost:3000/oauth&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile">
                        OAuth
                    </a>
                </div>
                <div>
                    <RegisterBtn handleOpen={handleOpen} />
                    <Dialog open={open}>
                        <LoginForm handleClose={handleClose} />
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default Intro;
