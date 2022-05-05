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

function ContentsDetail({ setIsEditing, isEditable, handleDelete, contents }) {
    const navigate = useNavigate();
    const { title, content, createdAt, author } = contents;
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
                    title={title}
                    subheader={`${author} | ${createdAt.slice(0, 10)}`}
                />
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {content}
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
