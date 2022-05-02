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
        "category": "",
        "val1": "",
        "type": "", //rank
        "page": 1,
        "perPage": 9,
    })

    const changeCondition = (key, value) => {
        setCondition(current => {
            let newCondition = { ...current };
            newCondition[key] = value;
            return newCondition;
        })
    }

    const changeOpen = () => {
        setOpen(!open);
    }

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
                            condition.category !== '' ? condition.category : null
                        }
                        </div>
                    </div>
                    <SearchField />
                </div>
                <div className='boardgames'>
                    <BoardgameData condition={condition} changeCondition={changeCondition}/>
                </div>
            </div>
            <div className={ open ? 'boardgame-category active' : 'boardgame-category' }>
                <BoardgameCategory 
                    condition={condition}
                    changeCondition={changeCondition}
                    changeOpen={changeOpen}
                />
            </div>
        </>
    )
}

export default Boardgame