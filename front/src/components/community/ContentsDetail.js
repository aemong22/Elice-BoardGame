import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
    Card,
    CardHeader,
    CardActions,
    CardContent,
    Typography,
    IconButton,
    Button,
} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ContentsDetail({ setIsEditing, isEditable, handleDelete }) {
    const navigate = useNavigate();

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardHeader
                    action={
                        <Button
                            size="small"
                            onClick={() => navigate("/community")}
                        >
                            목록
                        </Button>
                    }
                    title="게시글 제목"
                    subheader="작성자 | 날짜"
                />
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        Word of the Day
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    {isEditable && (
                        <>
                            <IconButton
                                onClick={() => setIsEditing(true)}
                                sx={{ marginLeft: "auto" }}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete()}>
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )}
                </CardActions>
            </Card>
        </>
    );
}

export default ContentsDetail;
