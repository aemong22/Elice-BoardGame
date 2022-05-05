import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Button, Box, Grid } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import * as Api from "../../api";
import { UserStateContext } from "../../App";

function ContentAddForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (window.confirm("게시글을 등록 하겠습니까?")) {
                await Api.post("communitycontents/create", {
                    title,
                    content,
                });
                navigate(`/community`);
            }
        } catch (error) {
            alert("게시글 등록에 실패하였습니다.", error);
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: "80px" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    marginTop: "70px",
                    textAlign: "center",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Grid
                        sx={{
                            width: "100%",
                            height: "80px",
                            marginBottom: "20px",
                        }}
                    >
                        <TextareaAutosize
                            placeholder="제목을 입력하세요"
                            style={{
                                width: "99%",
                                height: "90%",
                            }}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>

                    <Grid>
                        <TextareaAutosize
                            minRows={1}
                            placeholder="내용을 입력하세요"
                            style={{ width: "99%", height: "500px" }}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Grid>

                    <Grid>
                        <Grid>
                            <Button type="submit">등록</Button>
                            <Button
                                variant="secondary"
                                onClick={() => navigate(`/community`)}
                            >
                                취소
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default ContentAddForm;
