import React, { useState, useEffect } from "react";
import BoardgameCard from "./BoardgameCard";
import BasicPagination from "./BasicPagination";
import * as Api from "../../api";

function BoardgameData({ condition, changeCondition }) {
    const [boardgames, setBoardgames] = useState(undefined);
    const [totalPage, setTotalPage] = useState(1);

    // 보드게임 최근 데이터 불러오기
    const recentlyGamesHandler = async () => {
        console.log("data condtion: ", condition);
        try {
            await Api.get("recentlyGames",
                { params: {
                    page: condition.page,
                    perPage: condition.perPage,
                }}, 
                { withCredentials: true }
            ).then((res) => {
                setBoardgames(res.data.boardGames);
                setTotalPage(res.data.totalPage);
            })
        } catch (err) {
            console.log("errer message: ", err)
        }
    }

    // 보드게임 조건 데이터 불러오기
    const conditionGamesHandler = async () => {
        console.log("data condtion: ", condition);
        try {
            await Api.get("games/conditions",
                { params: {
                    category: condition.category,
                    val1: condition.val1,
                    type: condition.type,
                    page: condition.page,
                    perPage: condition.perPage,
                }}, 
                { withCredentials: true }
            ).then((res) => {
                setBoardgames(res.data.games); 
                setTotalPage(res.data.totalPage);
            })
        } catch (err) {
            console.log("errer message: ", err)
        }
    }

    useEffect(() => {
        (condition.category !== '' || condition.type !== '') ? conditionGamesHandler() : recentlyGamesHandler();
    }, [condition])

    const boardgameList = boardgames?.map((boardgame) => (
        <BoardgameCard
            key={boardgame?.game_id}
            id={boardgame?.game_id}
            name={boardgame?.game_name}
            min_player={boardgame?.min_player}
            max_player={boardgame?.max_player}
            domains={boardgame?.domains === null ? '' : boardgame.domains}
            image={boardgame?.image}
        />
    ));

    return (
        <>
            {boardgameList}
            <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                <BasicPagination 
                    totalPage={totalPage}
                    condition={condition}
                    changeCondition={changeCondition}
                />
                <label>
                    <select
                        type="number"
                        value={condition.perPage}
                        onChange={({ target: { value }}) => changeCondition("perPage", Number(value))}
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
    )
}

export default BoardgameData;