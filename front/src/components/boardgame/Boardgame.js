import React, { useState } from "react";
import BoardgameCategory from "./BoardgameCategory"
import Header from "../Header";
import BoardgameData from "./BoardgameData";
import "./Boardgame.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchField from "./SearchField";

function Boardgame() {
    const [openCategory, setOpenCategory] = useState(false);

    // 필터에 사용할 변수
    const [player, setPlayer] = useState([]);
    const [category, setCategory] = useState([]);

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='boardgame-header'>
                <div className='boardgame-header-item' onClick={() => setOpenCategory(!openCategory) }>
                    <MenuIcon className='boardgame-header-menu-icon'></MenuIcon>
                    <div className='boardgame-header-menu'>Menu</div>
                </div>
                <SearchField />
            </div>
            <div className='boardgame-container'>
                <div className={ openCategory ? 'boardgame-category active' : 'boardgame-category' }>
                    <BoardgameCategory 
                        player={player}
                        setPlayer={setPlayer}
                        category={category}
                        setCategory={setCategory}
                    />
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
                        <BoardgameData
                            player={player}
                            category={category}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boardgame