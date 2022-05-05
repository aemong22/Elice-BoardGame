import React, { useState } from "react";
import BoardgameCategory from "./BoardgameCategory";
import Sorting from "./Sorting";
import BoardgameData from "./BoardgameData";
import { categoryName, categoryValue } from "./BoardgameCategoryData";
import BoardgameRandomCard from "./BoardgameRandomCard";
import BounceAnimation from "./BounceAnimation";
import "./Boardgame.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Boardgame() {
    const [open, setOpen] = useState(false);
    const [recommend, setReconnend] = useState(true);
    const [condition, setCondition] = useState({
        category: "",
        val1: "",
        type: "",
        page: 1,
        perPage: 9,
    });

    const initializeCondition = () => {
        setCondition((current) => {
            let newCondition = { ...current };
            newCondition.category = "";
            newCondition.val1 = "";
            newCondition.type = "";
            return newCondition;
        });
    };

    const changeCondition = (key, value) => {
        setCondition((current) => {
            let newCondition = { ...current };
            newCondition[key] = value;
            return newCondition;
        });
    };

    const changeOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="boardgame-container">
                <div className="boardgame-info">
                    <div className="boardgame-info-title">보드게임</div>
                    <div 
                        className={recommend ? "boardgame-recommend-active" : "boardgame-recommend"} 
                        onClick={()=> setReconnend(!recommend)}
                    >
                        {
                            recommend ? <BoardgameRandomCard /> : (
                                <div className="boardgame-recommend-container">
                                    <BounceAnimation />
                                    <div className="boardgame-recommend-title">
                                        무슨 <span style={{ color: "#A98E64" }}>보드게임</span>을 해야 할지 모르겠다면?
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="boardgame-info-filtered">
                        <HomeOutlinedIcon />
                        <div>{condition.category !== ""
                            ? ` > ${categoryName(
                                  condition.category
                              )} > ${categoryValue(
                                  condition.category,
                                  condition.val1
                              )}`
                            : " > 최신 보드게임 보기"}
                        </div>
                    </div>
                    <div className="boardgame-info-box">
                        <button 
                            className="boardgame-filter-button"
                            onClick={() => setOpen(!open)}
                        >
                            <FilterAltOutlinedIcon className="boardgame-filter-icon" />
                        </button>
                        <div className="boardgame-filter-value">
                            {condition.category !== ""
                            ? `${categoryValue(
                                condition.category,
                                condition.val1
                            )}`
                            : "최신 보드게임 보기"}
                        </div>
                    </div>
                    <div className="boardgame-sort">
                        <Sorting changeCondition={changeCondition} />
                    </div>
                </div>
                <div className="boardgames">
                    <div className="boardgame-data">
                        <BoardgameData
                            condition={condition}
                            changeCondition={changeCondition}
                        />
                    </div>
                </div>
            </div>
            <div
                className={
                    open ? "boardgame-category active" : "boardgame-category"
                }
            >
                <BoardgameCategory
                    condition={condition}
                    initializeCondition={initializeCondition}
                    changeCondition={changeCondition}
                    changeOpen={changeOpen}
                />
            </div>
        </>
    );
}

export default Boardgame;
