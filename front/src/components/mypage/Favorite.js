import { MyBox, Title, Content, Total } from "./FavoriteStyle.js";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteCard from "./FavoriteCard";
import * as Api from "../../api";

function Favorite({ ownerData }) {
  const [wishes, setWishes] = useState(undefined);

  const favoriteList = () => {
    Api.get("favorite/user").then((res) => {
      setWishes(res.data);
      console.log(wishes);
    });
  };

  useEffect(() => {
    favoriteList();
  }, []);

  return (
    <>
      <MyBox>
        <Title>
          <FavoriteIcon /> 찜 목록
        </Title>
        <Total>Total </Total>
        <Content>
          {wishes?.map((wish) => (
            <FavoriteCard key={wish} wish={wish} />
          ))}
        </Content>
      </MyBox>
    </>
  );
}

export default Favorite;
