import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";
import { Token } from "../db";

const secret = JWT_SECRET_KEY;

exports.sign = (user) => {
  const payload = {
    id: user._id,
  };
  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: "30m",
  });
};

exports.verify = (token) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      ok: true,
      id: decoded.id,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};

exports.refresh = () => {
  return jwt.sign({}, secret, {
    algorithm: "HS256",
    expiresIn: "14h",
  });
};

exports.refreshVerify = async (token, user_id) => {
  try {
    // refresh token 가져오기
    const refresh_token = await Token.getToken({ user_id });
    if (token === refresh_token) {
      try {
        jwt.verify(token, secret);
        return true;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
