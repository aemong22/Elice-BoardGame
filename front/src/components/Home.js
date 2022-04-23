import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Api from "../api";
import Header from "./Header";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const userState = useSelector((state) => state.userReducer.user);

  // 만약 로그인 된 상태가 아니라면 intro 페이지로 이동시키기
  useEffect(() => {
    if (!userState) {
      navigate("/intro", { replace: true });
      return;
    }

    setIsFetchCompleted(true);
  }, [params, userState, navigate]);

  if (!isFetchCompleted) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header />
      Home!
    </>
  );
}

export default Home;
