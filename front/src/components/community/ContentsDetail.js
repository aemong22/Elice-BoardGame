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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Confirm from "../Confirm";

const theme = createTheme({
    palette: {
        primary: {
            main: "#A88E66",
            darker: "#67573F",
        },
    },
});

function ContentsDetail({ setIsEditing, isEditable, handleDelete, contents }) {
    const navigate = useNavigate();
    const { title, content, createdAt, author } = contents;
    const [open, setOpen] = useState(false);
    const confirmTitle = "게시글을 삭제하실 건가요?";
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Card sx={{ minWidth: 275 }}>
                    <CardHeader
                        action={
                            <Button
                                size="small"
                                onClick={() => navigate("/community")}
                                color="primary"
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
                                <IconButton onClick={() => handleClickOpen()}>
                                    <DeleteIcon />
                                </IconButton>
                                <Confirm
                                    open={open}
                                    handleClose={handleClose}
                                    handleDelete={handleDelete}
                                    title={confirmTitle}
                                />
                            </>
                        )}
                    </CardActions>
                </Card>
            </ThemeProvider>
        </>
    );
}

export default ContentsDetail;
