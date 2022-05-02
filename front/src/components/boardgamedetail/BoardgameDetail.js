import DetailContents from "./DetailContents";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BoardgameDetail() {
  const params = useParams();
  const boardgameId = params.Id;
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchBoardgameDetail = async (boardgameId) => {
    const res = await Api.get("gameInfo", boardgameId);
    const gameData = res.data;
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
