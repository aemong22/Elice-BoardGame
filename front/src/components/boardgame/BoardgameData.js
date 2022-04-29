import React, { useState, useEffect } from "react";
import BoardgameCard from "./BoardgameCard";
import BasicPagination from "./BasicPagination";
import * as Api from "../../api";

function BoardgameData({ player, category }) {
    const [boardgames, setBoardgames] = useState([]);

    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    // 보드게임 전체 데이터 불러오기
    // useEffect(() => {
    //     try {
    //         Api.get("boardGames").then((res) => {
    //             setBoardgames(res.data);
    //         })
    //     } catch (err) {
    //         console.log("errer message: ", err)
    //     }
    // }, []);


    /*
    카테고리 : 인원수 / 연령 / 테마 / 게임시간 / 난이도

    정렬 : 랭킹순 / 평점순 / 리뷰순

    인원수 : 2 / 3 / 4 / 5 이상
    연령 : 9 / 12 / 15 / 19  
    난이도 : 1 ~ 5
    테마(domain) : Thematic / strategy /  family / customizable ...
    게임시간 (minplaytime) :  30 / 60 / 120~


    post("boardgame") {
players : 2 || "",
time :234 || "",
...
sort : sorting || ""
}

const [sort, setSort] = useState("")

useEffect(()=>{
  Api.post('router', {
  players: player,
  time: time,
   ... , 
  sort: sort,
  })
},[players,time, ... , sort])


<button
 value="rank"
 onClick={(e)=> setSort(e.target.value)}
 >rank</button>
 
 <button
 value="review"
 onClick={(e)=> setSort(e.target.value)}
 >review</button>
    */


    // 보드게임 플레이어 수로 데이터 불러오기
    useEffect(() => {
        try {
            Api.get("games", player[0]).then((res) => {
                setBoardgames(res.data);
            })
        } catch (err) {
            console.log("errer message: ", err)
        }
    }, [player]);

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
            {boardgameList.slice(offset, offset + limit)}

            {/* 페이지네이션 */}
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