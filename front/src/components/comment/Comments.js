import React, { useState, useEffect } from "react";
import { Card, CardHeader } from "@mui/material";
import CommentCard from "./CommentCard";
import CommentEditForm from "./CommentEditForm";
import CommentEdidtForm from "./CommentEditForm";

function Comments({ comments, contentId }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <Card sx={{ width: "100%" }}>
                <CardHeader title="댓글" />
                <CommentEdidtForm
                    handlePost={handlePost}
                    contentId={contentId}
                />
                {isEditing ? (
                    <CommentEditForm />
                ) : (
                    <>
                        {comments?.map((comment) => (
                            <CommentCard
                                userName={comment.user_id.user_name}
                                userId={comment.user_id._id}
                                content={comment.content}
                                setIsEditing={setIsEditing}
                                key={comment._id}
                            />
                        ))}
                    </>
                )}
            </Card>
        </>
    );
}

export default Comments;
