import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Intro from "./components/intro/Intro";
import Boardgame from "./components/boardgame/Boardgame";
import About from "./components/about/About";
import RegisterForm from "./components/user/RegisterForm";

function App() {
  // 유저 로그인 상태 관련 코드 추가하기


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/intro" exact element={<Intro />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/boardgame" exact element={<Boardgame />} />
        <Route path="/register" exact element={<RegisterForm />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
