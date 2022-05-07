import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from "@mui/material";
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

export default function Confirm({ open, handleClose, handleDelete, title }) {
    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent sx={{ bgcolor: "#F3F0EC" }}>
                    <DialogTitle
                        id="alert-dialog-title"
                        style={{
                            color: "#4C3C2E",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <img
                            style={{
                                width: "5%",
                                marginRight: "10px",
                            }}
                            src="/image/monster.png"
                            alt="몬스터 아이콘"
                        />
                        {title}
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
                        <Button onClick={() => handleDelete()} autoFocus>
                            확인
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}
