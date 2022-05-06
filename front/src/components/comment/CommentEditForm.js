import TextField from "@mui/material/TextField";

function CommentEdidtForm() {
    return (
        <form onSubmit={handleEdit}>
            <TextField
                helperText="Please enter your comment"
                id="demo-helper-text-aligned"
                label="Comment"
            />
            <MyButton type="submit">완료</MyButton>
            <MyButton2 onClick={() => navigate(`/community`)}>취소</MyButton2>
        </form>
    );
}

export default CommentEdidtForm;
