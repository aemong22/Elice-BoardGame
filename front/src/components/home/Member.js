import * as React from "react";
import { styled } from "@mui/material/styles";
// import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./Member.css";

const MemberTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
  },
}));

function Member() {
  return (
    <div className="member-container">
      <div className="member-background">
        <div className="member-sizer"></div>
        <div className="member-1st-floor">
          <MemberTooltip
            title={
              <React.Fragment>
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
                    <Typography
                      sx={{ mb: "20px" }}
                      variant="h6"
                      color="text.secondary"
                    >
                      프론트엔드
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      한마디 : 리액트 정신 안차리지
                    </Typography>
                  </CardContent>
                </Card>
              </React.Fragment>
            }
          >
            <span id="member-1">span</span>
          </MemberTooltip>
          <span id="member-2">span</span>
          <span id="member-3">span</span>
        </div>
        <div className="member-2nd-floor">
          <span id="member-4">span</span>
          <span id="member-5">span</span>
          <span id="member-6">span</span>
        </div>
      </div>
    </div>
  );
}

export default Member;
