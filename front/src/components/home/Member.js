import React, { useState } from "react";
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
  const member = {
    garam: {
      name: "송가람",
      position: "프론트엔드",
      quote: "리액트 정신 안차리지",
    },
    sangwon: {
      name: "이상원",
      position: "백엔드",
      quote: "어..네..해볼께요..🥕",
    },
    noori: {
      name: "노누리",
      position: "백엔드",
      quote: "이게 외 않되???????",
    },
    minyeong: {
      name: "안민영",
      position: "프론드엔드",
      quote: "무서워.. 또 혼난다혼난다",
    },
    aerim: {
      name: "김애림",
      position: "프론드엔드",
      quote: "이게 왜 되는 거에요..?",
    },
    beomgi: {
      name: "소범기",
      position: "데이터분석",
      quote: "전 이만 가보겠습니다.",
    },
  };

  return (
    <div className="member-container">
      <div className="member-background">
        <div className="member-sizer"></div>

        <MemberTooltip
          title={
            <React.Fragment>
              <MemberCard
                name={member.noori.name}
                position={member.noori.position}
                quote={member.noori.quote}
              />
            </React.Fragment>
          }
        >
          <span id="member-1">span</span>
        </MemberTooltip>

        <MemberTooltip
          title={
            <React.Fragment>
              <MemberCard
                name={member.garam.name}
                position={member.garam.position}
                quote={member.garam.quote}
              />
            </React.Fragment>
          }
        >
          <span id="member-2">span</span>
        </MemberTooltip>

        <MemberTooltip
          title={
            <React.Fragment>
              <MemberCard
                name={member.aerim.name}
                position={member.aerim.position}
                quote={member.aerim.quote}
              />
            </React.Fragment>
          }
        >
          <span id="member-3">span</span>
        </MemberTooltip>

        <MemberTooltip
          title={
            <React.Fragment>
              <MemberCard
                name={member.sangwon.name}
                position={member.sangwon.position}
                quote={member.sangwon.quote}
              />
            </React.Fragment>
          }
        >
          <span id="member-4">span</span>
        </MemberTooltip>

        <MemberTooltip
          title={
            <React.Fragment>
              <MemberCard
                name={member.minyeong.name}
                position={member.minyeong.position}
                quote={member.minyeong.quote}
              />
            </React.Fragment>
          }
        >
          <span id="member-5">span</span>
        </MemberTooltip>

        <MemberTooltip
          title={
            <React.Fragment>
              <MemberCard
                name={member.beomgi.name}
                position={member.beomgi.position}
                quote={member.beomgi.quote}
              />
            </React.Fragment>
          }
        >
          <span id="member-6">span</span>
        </MemberTooltip>
      </div>
    </div>
  );
}

export default Member;
