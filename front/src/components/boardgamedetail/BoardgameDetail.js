import DetailContents from "./DetailContents";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Api from "../../api";

function BoardgameDetail() {
  const params = useParams();
  const boardgameId = params.id;

  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [gameData, setGameData] = useState(undefined);

  const fetchBoardgameDetail = async () => {
    const res = await Api.get("boardgame/detail", boardgameId);
    setGameData(res.data);
  };

  useEffect(() => {
    fetchBoardgameDetail();
    setIsFetchCompleted(true);
  }, []);

  useEffect(() => {
    console.log(gameData);
  }, [gameData]);

  if (!isFetchCompleted) {
    return <div>로딩중...</div>;
  }

  return <>{gameData && <DetailContents gameData={gameData} />}</>;
}

export default BoardgameDetail;
