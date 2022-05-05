import React, { useEffect, useState } from "react";
import {
    List,
    ListItemButton,
    ListSubheader,
    ListItemText,
    Divider,
    Card,
    CardActions,
} from "@mui/material/";
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
            <Card sx={{ width: "100%" }}>
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
                    <CardActions disableSpacing>
                        <span>게시글 제목</span>

                        <IconButton
                            onClick={() =>
                                navigate("/communitycontents/create")
                            }
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </ListSubheader>
            </Card>
        </List>
    );
}

export default ContentsDetail;
