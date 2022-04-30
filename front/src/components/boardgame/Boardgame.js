import React, { useState, useEffect } from "react";
import BoardgameCategory from "./BoardgameCategory";
import BoardgameData from "./BoardgameData";
import Header from "../Header";
import "./Boardgame.css";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchField from "./SearchField";

function Boardgame() {
    const [open, setOpen] = useState(false);
    const [condition, setCondition] = useState({ 
        "player": "",
        "age": "",
        "theme": "",
        "time": "",
        "complexity": "",
        "type": ""
    })

    return (
        <>
            <div className={ open ? 'boardgame-container-slide' : 'boardgame-container' }>
                <div className='header'>
                    <Header />
                </div>
                <div className='boardgame-header'>
                    <div className='boardgame-header-item' onClick={() => setOpen(!open) }>
                        <FilterAltOutlinedIcon className='boardgame-header-menu-icon' />
                        <div className='boardgame-header-menu'>
                        {
                            Object.keys(condition).map((key) => (
                                condition[key] !== '' ? key : null
                            ))
                        }
                        </div>
                    </div>
                    <SearchField />
                </div>
                <div className='boardgames'>
                    <BoardgameData condition={condition} />
                </div>
            </div>
            <div className={ open ? 'boardgame-category active' : 'boardgame-category' }>
                <BoardgameCategory 
                    condition={condition}
                    setCondition={setCondition}
                    open={open}
                    setOpen={setOpen}
                />
            </div>
        </>
    )
}

export default Boardgame