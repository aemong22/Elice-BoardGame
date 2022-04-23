import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./components/intro/Intro";
import About from "./components/About";
import Boardgame from "./components/boardgame/Boardgame";

function App() {
  // 유저 로그인 상태 관련 코드 추가하기


  return (
    <Router>
      <Routes>
        <Route path="/intro" exact element={<Intro />} />
        <Route path="/" exact element={<About />} />
        <Route path="/boardgame" exact element={<Boardgame />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
