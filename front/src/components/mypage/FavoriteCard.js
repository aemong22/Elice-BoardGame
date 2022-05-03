import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function FavoriteCard({ wish }) {
  const navigate = useNavigate();
  console.log("favorite", wish);

  return (
    <>
      <div>{wish}</div>
    </>
  );
}

export default FavoriteCard;
