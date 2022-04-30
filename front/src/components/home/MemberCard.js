import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

function MemberCard() {
  return (
    <Card
      sx={{
        maxWidth: 320,
        borderRadius: "15px",
        bgcolor: "#F4F2EF",
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
        >
          G
        </Avatar>
        <Typography variant="h5" color="text.secondary">
          송가람
        </Typography>
        <Typography sx={{ mb: "20px" }} variant="h6" color="text.secondary">
          프론트엔드
        </Typography>
        <Typography variant="body1" color="text.secondary">
          한마디 : 리액트 정신 안차리지
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MemberCard;
