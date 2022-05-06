import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api";

function BoardgameRandomCard() {
  const [boardgames, setBoardgames] = useState(undefined);
  const [animation, setAnimation] = useState(false);
  const randomGameID = [316554, 246900, 296151]
  const navigate = useNavigate();

  useEffect(() => {
    RandomGameHandler();
  }, []);

  // 보드게임 데이터 불러오기
  const RandomGameHandler = async () => {
    try { 
      await Api.get("boardgame/detail", randomGameID[Math.floor(Math.random() * 3)])  //수정
      .then((res) => {
        console.log("res.data: ", res.data)
        setBoardgames(res.data.games);
        setAnimation(true);
      });
    } catch (err) {
      console.log("errer message: ", err);
    }
  };

  return (
    <div
      onClick={() => navigate(`/boardgame/detail/316554`)}
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
            src={boardgames?.image}
            alt={boardgames?.game_name}
          /> : <img
            style={{
              width: 0,
              height: 0,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.5s",
            }}
            src={boardgames?.image}
            alt={boardgames?.game_name}
          />
        }
      
    </div>
  );
}

export default BoardgameRandomCard;
