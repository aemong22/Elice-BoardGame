import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";
import Header from "../Header";
import Chart from "./Chart";
import Detail from "./Detail";
import Member from "./Member";

function Home() {
  const navigate = useNavigate();
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const userState = useSelector((state) =>
    state ? state.userReducer.user : {}
  );

  // 만약 로그인 된 상태가 아니라면 intro 페이지로 이동시키기
  useEffect(() => {
    if (!userState) {
      navigate("/intro", { replace: true });
      return;
    }

    setIsFetchCompleted(true);
  }, [userState, navigate]);

  if (!isFetchCompleted) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header />
      <div id="main_wrapper">
        <div id="main_title_wrapper">
          <div id="main_title">Boardmon으로 보드게임을 시작해보자!</div>
          <div id="subtitle">
            세상엔 너무 많은 보드게임이 있어 무엇을 골라야 할지 고민이 될 때
            <br />
            Boardmon을 통해 보드게임을 추천받고, 선택해보세요.
          </div>
          <div id="plus">자세히 보기</div>
        </div>

        <div id="main_visual_wrapper">
          <img
            alt="보드게임테이블"
            style={{ width: "40%", height: "90%" }}
            src="/image/main_visual2.png"
          />

          <img
            alt="보드게임도구"
            style={{ width: "40%", height: "70%" }}
            src="/image/main_visual.png"
          />
        </div>
      </div>
      <Chart />
      <Detail />
      <Member />
    </>
  );
}

export default Home;
