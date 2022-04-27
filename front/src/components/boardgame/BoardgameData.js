import React, { useState, useEffect } from "react";
import BoardgameCard from "./BoardgameCard"
import * as Api from "../../api";

function BoardgameData({ player, category }) {
    const [boardgames, setBoardgames] = useState([]);

    // 보드게임 전체 데이터 불러오기
    useEffect(() => {
        try {
            Api.get("boardGames").then((res) => {
                setBoardgames(res.data);
            })
        } catch (err) {
            console.log("errer message: ", err)
        }
    }, []);

    // 보드게임 플레이어 수로 데이터 불러오기
    // useEffect(() => {
    //     try {
    //         Api.get("games/player", player[0]).then((res) => {
    //             setBoardgames(res.data);
    //         })
    //     } catch (err) {
    //         console.log("errer message: ", err)
    //     }
    // }, [player]);

    const boardgameList = boardgames.map((boardgame) => (
        <BoardgameCard
            key={boardgame.game_id}
            name={boardgame.game_name}
            min_player={boardgame.min_player}
            max_player={boardgame.max_player}
            domains={boardgame.domains}
            image={boardgame.image}
        />
    ));

    return (
        <>
            {boardgameList}
        </>
    )
}

export default BoardgameData;