import React, { useState, useEffect } from "react";
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

    // useEffect(() => {
    //     // test
    //     console.log(player);
    //     console.log(category);
    //   }, [player, category]);

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='boardgame-header'>
                <div className='boardgame-header-item' onClick={() => setOpen(!open) }>
                    <MenuIcon className='boardgame-header-menu-icon'></MenuIcon>
                    <div className='boardgame-header-menu'>Menu</div>
                </div>
                <SearchField />
            </div>
            <div className='boardgame-container'>
                <div className='boardgames'>
                    <BoardgameData
                        player={player}
                        category={category}
                    />
                </div>
            </div>

            <div className={ open ? 'boardgame-category active' : 'boardgame-category' }>
                <BoardgameCategory 
                    player={player}
                    setPlayer={setPlayer}
                    category={category}
                    setCategory={setCategory}
                />
            </div>
        </>
    )
}

export default Boardgame