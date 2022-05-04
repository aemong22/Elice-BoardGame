import React from "react";
import Coverflow from "react-coverflow";

const fn = function () {
    /* do your action */
};

function BoardgameRec({ gameData }) {
    return (
        <Coverflow
            width="100%"
            height="300"
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={true}
            clickable={true}
            active={0}
        >
            {/* <Card sx={{ width: 50, my: 10, height: 100 }}>
        <CardMedia component="img" image="/image/garam_pic.png" alt="garam" />
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h6" component="span">
              보드게임이름
            </Typography>
          </div>
        </CardContent>
      </Card> */}

            <div
                onClick={() => fn()}
                onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
            >
                <img
                    src="/image/aerim_pic.png"
                    alt="title or description"
                    style={{
                        display: "block",
                        width: "100%",
                    }}
                />
            </div>
            <img
                src="image/path"
                alt="title or description"
                data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
                src="image/path"
                alt="title or description"
                data-action="http://andyyou.github.io/react-coverflow/"
            />
        </Coverflow>
    );
}

export default BoardgameRec;
