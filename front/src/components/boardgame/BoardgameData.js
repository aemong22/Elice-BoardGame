import React, { useState, useEffect } from "react";
import BoardgameCard from "./BoardgameCard";
import BasicPagination from "./BasicPagination";
import * as Api from "../../api";
import { toast } from "react-toastify";

function BoardgameData({ condition, changeCondition, search }) {
    const [boardgames, setBoardgames] = useState(undefined);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        conditionGamesHandler();
    }, [condition]);

    useEffect(() => {
        if (search) {
            searchGamesHandler();
        }
    }, [search]);

    // 보드게임 조건 데이터 불러오기
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
                console.log("res.data: ", res.data);
                setBoardgames(res.data.games);
                setTotalPage(res.data.totalPage);
            });
        } catch (err) {
            console.log("errer message: ", err);
        }
    };

    // 보드게임 검색 데이터 불러오기
    const searchGamesHandler = async () => {
        console.log("data search/condtion: ", search, condition);
        try {
            await Api.getQuery(
                "search",
                {
                    params: {
                        keyword: search,
                        page: condition.page,
                        perPage: condition.perPage,
                    },
                },
                { withCredentials: true }
            ).then((res) => {
                console.log("res.data: ", res.data);
                setBoardgames(res.data.games);
                setTotalPage(res.data.totalPage);
            });
        } catch (err) {
            toast.error("일치하는 보드게임이 없습니다.");
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
            complexity_average={boardgame?.complexity_average}
            min_playing_time={boardgame?.min_playing_time}
            max_playing_time={boardgame?.max_playing_time}
            favorite={boardgame?.favorite}
        />
    ));

    return (
        <>
            {boardgameList}
            <div style={{ width: "100%", display: "flex" }}>
                <div
                    style={{
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "baseline",
                    }}
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
                            <option value="9">9개씩 보기</option>
                            <option value="15">15개씩 보기</option>
                            <option value="30">30개씩 보기</option>
                            <option value="90">90개씩 보기</option>
                        </select>
                    </label>
                </div>
            </div>
        </>
    );
}

export default BoardgameData;
