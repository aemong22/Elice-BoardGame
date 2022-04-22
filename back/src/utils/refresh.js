import { sign, verify, refreshVerify } from "./jwt-utils";
import { User } from "../db";
import jwt from "jsonwebtoken";

const refresh = async (req, res) => {
  // access token이 살아있는지 확인하고 만료되면 다시 발급
  if (req.headers.authorization && req.headers.refresh) {
    const authToken = req.headers.authorization.split(" ")[1];
    const refreshToken = req.headers.refresh;

    // access는 expired여야 한다
    const authResult = verify(authToken);

    // access token을 디코딩해서 user의 정보를 가져온다
    const decoded = jwt.decode(authToken);

    // 디코딩 결과가 없으면 권한 없음을 반환
    if (decoded === null) {
      res.status(401).json({
        ok: false,
        message: "No authorized",
      });
    }

    let user = null;
    try {
      user = await User.findByUserId({ _id: decoded.id });
    } catch (error) {
      return {
        ok: false,
        message: error.message,
      };
    }

    // access token이 디코딩 되면 user_id를 가져와 refresh token을 검증
    const refreshResult = refreshVerify(refreshToken, decoded.id);

    // 재발급을 위해서는 access token이 만료되엉야 함
    if (authResult.ok === false && authResult.message === "jwt expired") {
      // access token이 만료되고 refresh도 만료되면 새로 로그인
      if (refreshResult.ok === false) {
        res.status(401).json({
          ok: false,
          message: "No authorized",
        });
      } else {
        //   access token만료, refresh 남아있는 경우 access token 발급
        const newAccessToken = sign(user);

        res.status(200).json({
          ok: true,
          data: {
            accessToken: newAccessToken,
            refreshToken,
          },
        });
      }
    } else {
      // access token이 만료되지 않은 겨우 refresh 필요 없음
      res.status(400).json({
        ok: false,
        message: "Acess token is not expired",
      });
    }
  } else {
    //   access token 또는 token이 헤더에 없는 경우
    res.status(400).json({
      ok: false,
      message: "Access token and refresh token are need for refresh",
    });
  }
};

export { refresh };
