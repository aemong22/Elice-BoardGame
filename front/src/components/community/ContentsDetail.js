import React, { useEffect, useState } from "react";
import { List, ListSubheader } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function ContentsDetail() {
    return (
        <List
            sx={{
                width: "100%",
                bgcolor: "background.paper",
            }}
            aria-labelledby="nested-list-subheader"
        >
            <ListSubheader
                component="div"
                id="nested-list-subheader"
                style={{
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <span>게시글 제목</span>

                <IconButton
                    onClick={() => navigate("/communitycontents/create")}
                >
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </ListSubheader>
        </List>
    );
}

export default ContentsDetail;
