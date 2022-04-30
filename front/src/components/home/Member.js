import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import MemberCard from "./MemberCard";
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
                <MemberCard />
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
