import { Container, Button, Box, Grid } from "@mui/material";
import { TitleWrite, Write, MyButton, MyButton2 } from "./CommunityStyle";

function WriteForm({ title, setTitle, content, setContent }) {
    return (
        <>
            <Grid
                sx={{
                    width: "100%",
                    marginBottom: "20px",
                }}
            >
                <TitleWrite
                    value={title}
                    required
                    maxRows={1}
                    placeholder="제목을 입력하세요"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>

            <Grid
                sx={{
                    width: "100%",
                    marginBottom: "20px",
                }}
            >
                <Write
                    value={content}
                    required
                    minRows={20}
                    maxRows={20}
                    placeholder="내용을 입력하세요"
                    onChange={(e) => setContent(e.target.value)}
                />
            </Grid>
        </>
    );
}

export default WriteForm;
