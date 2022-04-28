import React, { useState } from "react";
import BoardgameCategory from "./BoardgameCategory";
import BoardgameData from "./BoardgameData";
import Header from "../Header";
import "./Boardgame.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchField from "./SearchField";

function Boardgame() {
    const [open, setOpen] = React.useState(false);

    // 필터에 사용할 변수
    const [player, setPlayer] = useState([]);
    const [category, setCategory] = useState([]);

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='boardgame-header'>
                <div className='boardgame-header-item' onClick={() => setOpen(true) }>
                    <MenuIcon className='boardgame-header-menu-icon'></MenuIcon>
                    <div className='boardgame-header-menu'>Menu</div>
                </div>
                <SearchField />
            </div>
            <div className='boardgame-container'>
                <div className={ open ? 'boardgame-category active' : 'boardgame-category' }>
                    <BoardgameCategory 
                        player={player}
                        setPlayer={setPlayer}
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
                <div className='boardgame-wrapper'>
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