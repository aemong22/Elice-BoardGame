import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button } from "@material-ui/core";

function FavoriteCard({ wish }) {
  const navigate = useNavigate(undefined);

  return (
    <>
      <Card>
        <CardContent>{wish?.boardgamename}</CardContent>
        <CardActions>
          <Button onClick={() => navigate(`/boardgame/${wish.id}`)}></Button>
        </CardActions>
      </Card>
    </>
  );
}

export default FavoriteCard();
