import * as Api from "../../api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/userAction";

const GoogleLoading = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    const googleLogin = async () => {
        try {
            const { data } = await Api.post("oauth/google", { accessToken });
            const jwtToken = data.token;
            sessionStorage.setItem("userToken", jwtToken);
            dispatch(loginUser(data));
            navigate("/", { replace: true });
        } catch (e) {
            console.log("OAuth 에러", e);
        }
    };
    googleLogin();

    return <div>로딩중...</div>;
};

export default GoogleLoading;
