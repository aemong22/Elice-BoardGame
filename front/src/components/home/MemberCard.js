import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

function MemberCard({ name, position, quote, src }) {
    return (
        <Card
            sx={{
                width: 250,
                borderRadius: "15px",
                bgcolor: "#F4F2EF",
                opacity: 0.95,
            }}
        >
            <CardHeader />
            <CardContent align="center">
                <Avatar
                    sx={{
                        bgcolor: red[500],
                        minWidth: 100,
                        minHeight: 100,
                        mb: "20px",
                    }}
                    aria-label="profile"
                    alt={name}
                    src={src}
                />

                <Typography variant="h5" color="text.secondary">
                    {name}
                </Typography>
                <Typography
                    sx={{ mb: "15px" }}
                    variant="h6"
                    color="text.secondary"
                >
                    {position}
                </Typography>
                <Typography
                    sx={{ mb: "15px" }}
                    variant="body1"
                    color="text.secondary"
                >
                    한마디 : {quote}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MemberCard;
