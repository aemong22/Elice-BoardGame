import React, { useState } from "react";
import { Card, CardHeader } from "@mui/material";
import CommentCard from "./CommentCard";
import CommentEditForm from "./CommentEditForm";

function Comments({ comments }) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <>
            <Card sx={{ width: "100%" }}>
                <CardHeader title="댓글" />

                {isEditing ? (
                    <CommentEditForm />
                ) : (
                    <>
                        {comments?.map((comment) => (
                            <CommentCard comment={comment} />
                        ))}
                    </>
                )}
            </Card>
        </>
    );
}

export default Comments;
