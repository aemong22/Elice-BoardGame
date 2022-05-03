import React, { useState } from "react";
import BoardgameCategory from "./BoardgameCategory";
import Sorting from "./Sorting";
import BoardgameData from "./BoardgameData";
import "./Boardgame.css";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchField from "./SearchField";

function Boardgame() {
    const header = document.getElementsByClassName('header')
    const [open, setOpen] = useState(false);
    const [condition, setCondition] = useState({ 
        "category": "",
        "val1": "",
        "type": "",
        "page": 1,
        "perPage": 9,
    })
    
    const initializeCondition = () => {
        setCondition(current => {
            let newCondition = { ...current };
            newCondition.category = "";
            newCondition.val1 = "";
            newCondition.type = "";
            return newCondition;
        })
    }

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
                {
                    open ? header[0].classList.add('boardgame-container-slide') : header[0].classList.remove('boardgame-container-slide')
                }
                <div className='boardgame-header'>
                    <div className='boardgame-header-item' onClick={() => setOpen(!open) }>
                        <FilterAltOutlinedIcon className='boardgame-header-filtered-icon' />
                        <div className='boardgame-header-filtered'>
                        {
                            condition.category !== '' ? (<span>{condition.category} : {condition.val1}</span>): 'filter'
                        }
                        </div>
                    </div>
                    <SearchField />
                </div>
                <div className='boardgame-sort'>
                    <Sorting changeCondition={changeCondition} />
                </div>
                <div className='boardgames'>
                    <BoardgameData condition={condition} changeCondition={changeCondition}/>
                </div>
            </div>
            <div className={ open ? 'boardgame-category active' : 'boardgame-category' }>
                <BoardgameCategory 
                    condition={condition}
                    initializeCondition={initializeCondition}
                    changeCondition={changeCondition}
                    changeOpen={changeOpen}
                />
            </div>
        </>
    )
}

export default Boardgame;
