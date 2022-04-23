import { bottomNavigationClasses } from "@mui/material";
import "./Intro.css";
import RegisterBtn from "./RegisterBtn";

const Intro = () => {
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

        <RegisterBtn onClick />
      </div>
    </div>
  );
};

export default Intro;
