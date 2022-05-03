import { MyBox, Title, Content, Total } from "./FavoriteStyle.js";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteCard from "./FavoriteCard";
import * as Api from "../../api";

function Favorite({ ownerData }) {
  const [wishes, setWishes] = useState(undefined);
  console.log("favorite", ownerData);

  const FavoriteList = async () => {
    const res = await Api.get("favorite/user");
    setWishes(res.data);
  };

  useEffect(() => {
    FavoriteList();
  }, []);

  return (
    <>
      <MyBox>
        <Title>
          <FavoriteIcon /> 찜 목록
        </Title>
        <Total>Total </Total>
        <Content>찜목록 나오기</Content>
        {/* {wishes.map((wish) => (
          <FavoriteCard wish={wish} />
        ))} */}
      </MyBox>
    </>
  );
}

export default Favorite;
