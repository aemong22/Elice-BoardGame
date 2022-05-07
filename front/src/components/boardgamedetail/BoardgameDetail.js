import DetailContents from "./DetailContents";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Api from "../../api";

function BoardgameDetail() {
    const params = useParams();
    const boardgameId = params.id;

    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const [gameData, setGameData] = useState(undefined);
    const [recommendData, setRecommendData] = useState(undefined);

    const fetchBoardgameDetail = async () => {
        try {
            await Api.get(
                "boardgame/detail", 
                boardgameId).then((res) => {
                    setGameData(res.data.games);
                    setRecommendData(res.data.recommendGames);
                    setIsFetchCompleted(true);
                    console.log("게임데이타", res.data.games);
            });
        } catch (err) {
            console.log("errer message: ", err);
        }
    };

    useEffect(() => {
        fetchBoardgameDetail();
    }, [boardgameId]);

    if (!isFetchCompleted) {
        return <div>로딩중...</div>;
    }

    return (
        <>
            {gameData && (
                <DetailContents
                    gameData={gameData}
                    recommendData={recommendData}
                />
            )}
        </>
    );
}

export default BoardgameDetail;
