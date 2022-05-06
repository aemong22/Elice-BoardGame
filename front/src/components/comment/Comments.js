import { Card, CardHeader } from "@mui/material";
import CommentCard from "./CommentCard";

function Comments({ comments }) {
    return (
        <>
            <Card sx={{ width: "100%" }}>
                <CardHeader title="댓글" />
                {comments?.map((comment) => (
                    <CommentCard comment={comment} />
                ))}
            </Card>
        </>
    );
}

export default Comments;
