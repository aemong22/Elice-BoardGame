import "./App.css";
import Intro from "./components/intro/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route path="*" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default App;
