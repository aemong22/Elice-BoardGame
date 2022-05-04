import React, { useState, useEffect } from "react";
import BoardgameCard from "./BoardgameCard";
import BasicPagination from "./BasicPagination";
import * as Api from "../../api";

function BoardgameData({ condition, changeCondition }) {
  const [boardgames, setBoardgames] = useState(undefined);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    conditionGamesHandler();
  }, [condition]);

  /*
  useEffect(() => {
    condition.category !== "" || condition.type !== ""
      ? conditionGamesHandler()
      : recentlyGamesHandler();
  }, [condition]);

  보드게임 최근 데이터 불러오기
  const recentlyGamesHandler = async () => {
    console.log("data condtion: ", condition);
    try {
      await Api.getQuery(
        "recentlyGames",
        {
          params: {
            page: condition.page,
            perPage: condition.perPage,
          },
        },
        { withCredentials: true }
      ).then((res) => {
        console.log("res.data: ", res.data)
        setBoardgames(res.data.games);
        setTotalPage(res.data.totalPage);
      });
    } catch (err) {
      console.log("errer message: ", err);
    }
  };
  */

  // 보드게임 데이터 불러오기
  const conditionGamesHandler = async () => {
    console.log("data condtion: ", condition);
    try {
      await Api.getQuery(
        "games/conditions",
        {
          params: {
            category: condition.category,
            val1: condition.val1,
            type: condition.type,
            page: condition.page,
            perPage: condition.perPage,
          },
        },
        { withCredentials: true }
      ).then((res) => {
        console.log("res.data: ", res.data)
        setBoardgames(res.data.games);
        setTotalPage(res.data.totalPage);
      });
    } catch (err) {
      console.log("errer message: ", err);
    }
  };

  const boardgameList = boardgames?.map((boardgame) => (
    <BoardgameCard
      key={boardgame?.game_id}
      id={boardgame?.game_id}
      name={boardgame?.game_name}
      min_player={boardgame?.min_player}
      max_player={boardgame?.max_player}
      theme={boardgame?.theme === null ? "" : boardgame.theme}
      image={boardgame?.image}
      min_age={boardgame?.min_age}
      min_playing_time={boardgame?.min_playing_time}
      max_playing_time={boardgame?.max_playing_time}
    />
  ));

  return (
    <>
      {boardgameList}
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{ margin: "0 auto", display: "flex", alignItems: "center" }}
        >
          <BasicPagination
            totalPage={totalPage}
            condition={condition}
            changeCondition={changeCondition}
          />
          <label>
            <select
              type="number"
              value={condition.perPage}
              onChange={({ target: { value } }) =>
                changeCondition("perPage", Number(value))
              }
            >
              <option value="9">9</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="90">90</option>
            </select>
          </label>
        </div>
      </div>
    </>
  );
}

export default BoardgameData;
