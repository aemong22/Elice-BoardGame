import React, { useState, useEffect, createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "./store/actions/userAction";
import * as Api from "./api";

import Home from "./components/Home";
import Intro from "./components/intro/Intro";
import Boardgame from "./components/boardgame/Boardgame";
import About from "./components/about/About";
import RegisterForm from "./components/user/RegisterForm";
import GoogleLoading from "./components/intro/GoogleLoading";
export const DispatchContext = createContext(null);
function App() {
    const [userState, userDispatch] = useReducer(loginReducer, {
        user: null,
    });
    function loginReducer(userState, action) {
        switch (action.type) {
            case "LOGIN_SUCCESS":
                console.log("%c로그인!", "color: #d93d1a;");
                return {
                    ...userState,
                    user: action.payload,
                };
            case "LOGOUT":
                console.log("%c로그아웃!", "color: #d93d1a;");
                return {
                    ...userState,
                    user: null,
                };
            default:
                return userState;
        }
    }

    // 유저 로그인 상태 관련 코드 추가하기
    const dispatch = useDispatch();
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const fetchCurrentUser = async () => {
        try {
            // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
            const res = await Api.get("currentUser");
            const currentUser = res.data;

            // userDispatch 함수를 통해 로그인 성공 상태로 만듦.
            dispatch(loginUser(currentUser));

            console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
        } catch {
            console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
        }
        setIsFetchCompleted(true);
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    if (!isFetchCompleted) {
        return <div>로딩중...</div>;
    }

    return (
        <DispatchContext.Provider value={{ userDispatch }}>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/intro" exact element={<Intro />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/oauth" exact element={<GoogleLoading />} />
                    <Route path="/boardgame" exact element={<Boardgame />} />
                    <Route path="/register" exact element={<RegisterForm />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </DispatchContext.Provider>
    );
}

export default App;
