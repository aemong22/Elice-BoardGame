import { useState, useEffect } from "react";
import * as Api from "../../api";

import Header from "../Header";
import Profile from "./Profile";
import Favorite from "./Favorite";
import { Container } from "@mui/material";
import { StylesProvider } from "@material-ui/core";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import {
  MyBox,
  MyBox2,
  ImgGrid,
  Photo,
  Name,
  MyButton,
  SubContent,
} from "./MypageStyle";

function Mypage() {
  const [Modify, setModify] = useState(true);
  const [ownerData, setOwnerData] = useState(undefined);

  const fetchPorfolioOwner = async () => {
    const res = await Api.get("currentUser");
    setOwnerData(res.data);
  };

  useEffect(() => {
    fetchPorfolioOwner();
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ padding: "0", marginTop: "80px" }}>
        <MyBox>
          <MyBox2>
            <ImgGrid>
              <Photo
                style={{
                  backgroundImage: `url(https://pinkpig-bucket.s3.ap-northeast-2.amazonaws.com/${ownerData?.image}.jpg)`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </ImgGrid>
            <Name>{ownerData?.user_name}</Name>
            <SubContent>
              <StylesProvider injectFirst>
                <MyButton onClick={() => setModify(true)}>
                  <EmojiPeopleOutlinedIcon />
                  profile
                </MyButton>
                <MyButton id="button" onClick={() => setModify(false)}>
                  <FavoriteBorderOutlinedIcon />
                  Favorite
                </MyButton>
              </StylesProvider>
            </SubContent>
          </MyBox2>
          {Modify
            ? ownerData && (
                <Profile ownerData={ownerData} setOwnerData={setOwnerData} />
              )
            : ownerData && <Favorite ownerData={ownerData} />}
        </MyBox>
      </Container>
    </>
  );
}

export default Mypage;
