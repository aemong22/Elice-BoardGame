import "./Intro.css";
import RegisterBtn from "./RegisterBtn";
import LoginForm from "../user/LoginForm";
<<<<<<< HEAD
import { Button, Dialog, Modal } from "@mui/material";
=======
import { Modal } from "@mui/material";
>>>>>>> 240eeb3e1ece6329482f311de0e8fa18f6142870
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
        </div>
        <div>
          <RegisterBtn open={open} handleOpen={handleOpen} />
          <Modal open={open}>
            <LoginForm setOpen={setOpen} handleClose={handleClose} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Intro;
