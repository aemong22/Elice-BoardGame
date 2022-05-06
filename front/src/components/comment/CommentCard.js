import * as React from "react";
import { CardContent, CardHeader, Typography } from "@mui/material";

function CommentCard({ comment }) {
    const { user_id: user_name, content } = comment;

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader subheader={user_name} />
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {content}
                </Typography>
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
            </CardContent>
        </Card>
    );
}

export default CommentCard;
