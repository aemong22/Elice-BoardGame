import React, { useState, useEffect } from "react";
import BoardgameCategory from "./BoardgameCategory"
import BoardgameCard from "./BoardgameCard"
import Header from "../Header";
import "./Boardgame.css"

import * as Api from "../../api";

function Boardgame() {
    const [openCategory, setOpenCategory] = useState(false);
    const [boardgames, setBoardgames] = useState([]);

    useEffect(() => {
        try {
            Api.get("boardGames").then((res) => {
                setBoardgames(res.data);
            })
        } catch (err) {
            console.log("errer message: ", err)
        }
    }, []);

    const boardgameList = boardgames.map((boardgame) => (
        <BoardgameCard
            name={boardgame.game_name}
            min_player={boardgame.min_player}
            max_player={boardgame.max_player}
            domains={boardgame.domains}
            image={boardgame.image}
        />
    ));

    return (
        <>
            <button onClick={() => setOpenCategory(!openCategory) }> --- </button>
            <div className='header'>
                <Header />
            </div>
            <div className='boardgame-container'>
                <div className={ openCategory ? 'boardgame-category active' : 'boardgame-category' }>
                    <BoardgameCategory />
                </div>
                <div className='boardgame-wrapper'>
                    {/* <div className='boardgame-sort'>
                        <div className='boardgame-filterd'>인원수</div>
                        <div className='boardgame-sort-items'>
                            <li>랭킹순</li>
                            <li>리뷰순</li>
                            <li>평점순</li>
                        </div>
                    </div> */}
                    <div className='boardgames'>
                        {boardgameList}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boardgame