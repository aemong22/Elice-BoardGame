import * as React from "react";
import { styled } from "@mui/material/styles";
// import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import "./Member.css";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

function Member() {
  return (
    <div className="member-container">
      <div className="member-background">
        <div className="member-sizer"></div>
        <div className="member-1st-floor">
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Tooltip with HTML</Typography>
                <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
              </React.Fragment>
            }
          >
            <span id="member-1">span</span>
          </HtmlTooltip>
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
