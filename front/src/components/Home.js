import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Api from "../api";

import Header from "./Header";

function Home() {
    const navigate = useNavigate();
    const params = useParams();

    // 유저 로그인 상태 관련 코드 추가하기

    // 만약 로그인 된 상태가 아니라면 intro 페이지로 이동시키기
    useEffect(() => {
        navigate("/intro", { replace: true });
    }, [params, navigate]);

    return (
        <>
            <Header />
            Home!
        </>
    )
}

export default Home;