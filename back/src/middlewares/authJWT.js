import { verify } from "../utils/jwt-utils";

const authJWT = (req, res, next) => {
  // access token 검증
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const result = verify(token);

    if (result.ok) {
      req.currentUserId = result.id;
      next();
    } else {
      // token이 expired된 경우
      // refresh token을 사용한 refresh가 필요하다
      res.status(401).json({
        ok: false,
        message: result.message, // jwt가 만료되었다면 메세지는 'jwt expired'입니다.
      });
    }
  } else {
    console.log("No verified access token");
    res.status(400).json("This page for logged in user");
  }
};

export { authJWT };
