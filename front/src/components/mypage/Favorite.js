import { MyBox, Title, Content, Total } from "./FavoriteStyle.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import FavoriteCard from "./FavoriteCard";
import * as Api from "../../api";

function Favorite() {
  const navigate = useNavigate();
  const [wishes, setWishes] = useState(undefined);

  useEffect(async () => {
    await Api.get("wishList").then((res) => setWishes(res.data));
  }, [navigate]);

  return (
    <>
      <MyBox>
        <Title>Favorite</Title>
        <Total>Total </Total>
        <Content>찜목록 나오기</Content>
        {wishes.map((wish) => (
          <FavoriteCard wish={wish} />
        ))}
      </MyBox>
    </>
  );
}

export default Favorite;
