import * as React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const RegisterBtn = ({ handleOpen, setOpen }) => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 340,
    height: 60,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 5,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(200px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#A98E64",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 130,
      height: 50,
      borderRadius: 30 / 1,
      backgroundImage: `url("/public/image/getstarted.png")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 1,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <FormControlLabel
      control={<IOSSwitch sx={{ m: 1 }} defaultChecked onClick={handleOpen} />}
    />
  );
};

export default RegisterBtn;
