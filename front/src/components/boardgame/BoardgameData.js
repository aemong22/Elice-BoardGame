import React, { useState, useEffect } from "react";
import BoardgameCard from "./BoardgameCard";
import BasicPagination from "./BasicPagination";
import * as Api from "../../api";

function BoardgameData({ condition }) {
    const [first, setFirst] = useState(false);  // 수정하기
    const [boardgames, setBoardgames] = useState([]);

    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    // 보드게임 전체 데이터 불러오기
    useEffect(() => {
        try {
            Api.get("recentlyGames").then((res) => {
                setBoardgames(res.data);
            })
            setFirst(true)
        } catch (err) {
            console.log("errer message: ", err)
        }
    }, []);

    // 보드게임 조건 데이터 불러오기
    useEffect(() => {
        try {
            first && Api.post("games/condition", condition).then((res) => {
                setBoardgames(res.data);
            });
        } catch (err) {
            console.log("errer message: ", err)
        }
    }, [condition]);

    const boardgameList = boardgames.map((boardgame) => (
        <BoardgameCard
            key={boardgame.game_id}
            name={boardgame.game_name}
            min_player={boardgame.min_player}
            max_player={boardgame.max_player}
            domains={boardgame.domains === null ? '' : boardgame.domains}
            image={boardgame.image}
        />
    ));

    // console.log(boardgameList);

    return (
        <>
            {boardgameList.slice(offset, offset + limit)}

            {/* Pagination */}
            <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                <BasicPagination 
                    total={boardgameList.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
                <label>
                    <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value }}) => setLimit(Number(value))}
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