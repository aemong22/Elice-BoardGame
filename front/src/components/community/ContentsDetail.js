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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#716F6F",
            darker: "#F4F2EF",
        },
        warning: {
            main: "#CD5642",
            darker: "#A44636",
        },
        neutral: {
            main: "#64748B",
            contrastText: "#fff",
        },
    },
});

function ContentsDetail({ setIsEditing, isEditable, handleDelete, contents }) {
    const navigate = useNavigate();
    const { title, content, createdAt, author } = contents;
    const [open, setOpen] = useState(false);

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
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >
                                    <DialogContent sx={{ bgcolor: "#F3F0EC" }}>
                                        <DialogTitle
                                            id="alert-dialog-title"
                                            sx={{ color: "#4C3C2E" }}
                                        >
                                            {"게시글을 삭제하시겠습니까?"}
                                        </DialogTitle>
                                        <DialogActions>
                                            <Button
                                                variant="text"
                                                color="warning"
                                                autoFocus
                                                onClick={handleClose}
                                            >
                                                취소
                                            </Button>
                                            <Button
                                                onClick={() => handleDelete()}
                                                autoFocus
                                            >
                                                확인
                                            </Button>
                                        </DialogActions>
                                    </DialogContent>
                                </Dialog>
                            </>
                        )}
                    </CardActions>
                </Card>
            </ThemeProvider>
        </>
    );
}

export default ContentsDetail;
