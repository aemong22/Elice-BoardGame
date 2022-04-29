import { Grid, Box } from "@mui/material";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MyBox = styled(Box)`
  border: solid 1px #d6ccc2;
  border-radius: 30px;
  border-shadow: 0 2px 3px 0;
  height: 80vh;
  margin: 5vh;
  paddin: 0;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;

const MyBox2 = styled(Box)`
  border-radius: 30px 0 0 30px;
  color: white;
  width: 30%;
  height: 100%;
  float: left;
  margin: 0;
`;

const Title = styled(Grid)`
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 5%;
  margin-top: 10%;
`;

const ImgGrid = styled(Grid)`
  border: solid 4px #d6ccc2;
  border-radius: 100%;
  color: blue;
  aspect-ratio: 1 / 1;
  margin: 0 20%;
`;

const Photo = styled(Grid)`
  border-radius: 100%;
  height: 80%;
  aspect-ratio: 1 / 1;
  margin: 10%;
`;

const Name = styled(Grid)`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 7%;
`;

const Profile2 = styled(Box)`
  border-radius: 0 30px 30px 0;
  background-color: #f3f0ec;
  width: 70%;
  height: 100%;
  float: right;
  margin: 0;
`;

const MyButton = styled(Button)`
  width: 100%;
  background-color: white;
  font-size: 20px;
  text-align: center;
  padding: 5%;
`;

export { MyBox, MyBox2, ImgGrid, Title, Photo, Name, Profile2, MyButton };
