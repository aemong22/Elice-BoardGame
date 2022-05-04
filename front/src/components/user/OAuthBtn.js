import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import "./user.css";

const OAuthBtn = () => {
    const onClick = () => {
        const protocol = window.location.protocol;
        const hostName = window.location.hostname;
        const port = window.location.port;
        let url =
            protocol + "//" + hostName + (port ? ":" + port : "") + "/oauth";
        window.location.href =
            `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=` +
            url +
            "&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
    };
    return (
        <Button className="sns-login" onClick={onClick}>
            <GoogleIcon className="google-login-icon" />
            Google
        </Button>
    );
};

export default OAuthBtn;
