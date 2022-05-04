import { Grid, Box, InputBase, FormHelperText, Card } from "@mui/material";

import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";

const MyBox = styled(Box)`
    background-color: #ffffff;
    width: 70%;
    height: 100%;
    margin: 2%;
`;

const Title = styled(Grid)`
    border-bottom: solid 1px #ebebeb;
    font-size: 30px;
    font-weight: bold;
    color: black;
    padding: 3%;
    margin-bottom: 3%;
`;

const Total = styled(Grid)`
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: right;
    padding-bottom: 3%;
`;

const Content = styled(Grid)`
    border: solid 1px;
`;

const GameCard = styled(Card)`
    display: inline-block;
`;

export { MyBox, Title, Content, Total, GameCard };
