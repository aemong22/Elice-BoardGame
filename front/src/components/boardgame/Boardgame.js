import React, { useState } from "react";
import BoardgameCategory from "./BoardgameCategory";
import BoardgameData from "./BoardgameData";
import "./Boardgame.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchField from "./SearchField";

function Boardgame() {
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState({
    player: "",
    age: "",
    theme: "",
    time: "",
    complexity: "",
    type: "",
  });

  return (
    <>
      <div className="boardgame-header">
        <div className="boardgame-header-item" onClick={() => setOpen(!open)}>
          <MenuIcon className="boardgame-header-menu-icon"></MenuIcon>
          <div className="boardgame-header-menu">Menu</div>
        </div>
        <SearchField />
      </div>
      <div className="boardgame-container">
        <div className="boardgames">
          <BoardgameData condition={condition} />
        </div>
      </div>

      <div
        className={open ? "boardgame-category active" : "boardgame-category"}
      >
        <BoardgameCategory
          condition={condition}
          setCondition={setCondition}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </>
  );
}

export default Boardgame;
