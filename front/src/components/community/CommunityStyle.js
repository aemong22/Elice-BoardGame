import { Button, TextareaAutosize } from "@mui/material";
import styled from "@emotion/styled";

const TitleWrite = styled(TextareaAutosize)`
    border-radius: 10px 10px 0 0;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: solid 1px #dcdcdc;
    font-size:20px;
    width: 99%;
    resize: none;
    padding: 3%;
    &: hover {
      background-color: #F7F7F7;
    }

    &: focus {
      border-bottom:solid 1px #D6CCC2;
        outline:none;
      },
`;

const Write = styled(TextareaAutosize)`
    font-size: 20px;
    border: solid 1px #dcdcdc;
    border-radius: 10px;
    width: 99%;
    resize: none;
    padding: 3%;

    &: hover {
      background-color: #F7F7F7;
    }

    &: focus {
      border:solid 1px #D6CCC2;
      outline:none;
    },
`;
const MyButton = styled(Button)`
    color: #82b3ed;
    font-weight: bold;
    size: 17px;
    border-radius: 5px;
    border: solid 1px #82b3ed;
    margin: 3px;

    &: hover {
        color: #ffffff;
        background-color: #0a82ff;
    }
`;

const MyButton2 = styled(Button)`
    color: #ff7878;
    font-weight: bold;
    size: 17px;
    border-radius: 5px;
    border: solid 1px #ff7878;
    margin: 3px;

    &: hover {
        color: #ffffff;
        background-color: #ff5a5a;
    }
`;
export { TitleWrite, Write, MyButton2, MyButton };
