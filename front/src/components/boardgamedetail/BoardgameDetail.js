import DetailContents from "./DetailContents";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Api from "../../api";

function BoardgameDetail() {
  const params = useParams();
  const boardgameId = params.id;

  const [isFetchCompleted, setIsFetchCompleted] = useState(false);
  const [gameData, setGameData] = useState(undefined);

  const fetchBoardgameDetail = async (boardgameId) => {
    const res = await Api.get("gameInfo", boardgameId);
    setGameData(res.data);
  };

  useEffect(() => {
    fetchBoardgameDetail(boardgameId);
    setIsFetchCompleted(true);
  }, []);

  if (!isFetchCompleted) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <DetailContents gameData={gameData} />
    </>
  );
}

export default BoardgameDetail;
