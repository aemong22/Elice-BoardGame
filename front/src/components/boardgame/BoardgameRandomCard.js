import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api";

function BoardgameRandomCard() {
  const [boardgame, setBoardgames] = useState(undefined);
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    RandomGameHandler();
  }, []);

  // 보드게임 데이터 불러오기
  const RandomGameHandler = async () => {
    try { 
      await Api.get("randomgame")
      .then((res) => {
        console.log("res.data: ", res.data)
        setBoardgames(res.data);
        setAnimation(true);
      });
    } catch (err) {
      console.log("errer message: ", err);
    }
  };

  return (
    <div
      onClick={() => navigate(`/boardgame/detail/${boardgame?.game_id}`)}
      style={{ width: "200px", height: "200px", margin: "0 auto", }}>
        {
          animation ? <img
            style={{
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              position: "relative",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "10px",
              transition: "all 0.5s",
            }}
            src={boardgame?.image}
            alt={boardgame?.game_name}
          /> : <img
            style={{
              width: 0,
              height: 0,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.5s",
            }}
            src={boardgame?.image}
            alt={boardgame?.game_name}
          />
        }
      
    </div>
  );
}

export default BoardgameRandomCard;
