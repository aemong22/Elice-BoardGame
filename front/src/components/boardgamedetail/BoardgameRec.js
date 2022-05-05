import React from "react";
import { useNavigate } from "react-router-dom";
import Coverflow from "react-coverflow";

function BoardgameRec({ recommendData }) {
    const navigate = useNavigate();

    const recommendGames = recommendData?.map((data) => (
        <div
            onClick={() => navigate(`/boardgame/detail/${data.game_id}`)}
            key={data.game_id}
            role="menuitem"
            tabIndex="2"
        >
            <img
                src={data.image}
                alt={data.game_name}
                style={{
                    display: "block",
                    width: "100%",
                }}
            />
        </div>
    ));

    return (
        <Coverflow
            width="100%"
            height="250"
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={true}
            clickable={true}
            active={0}
        >
            {recommendGames}
        </Coverflow>
    );
}

export default BoardgameRec;
