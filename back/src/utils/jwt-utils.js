import { redisClient } from "./redis";
import { promisify } from "util";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

exports.sign = (user) => {
  const payload = {
    id: user.id,
  };
  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: "1h",
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

exports.refreshVerify = async (token, userId) => {
  const getAsync = promisify(redisClient.get).bind(redisClient);

  try {
    const data = await getAsync(userId); // refresh token 가져오기
    if (token === data) {
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

// module.exports = {
//   sign: (user) => {
//     const payload = {
//       id: user._id,
//     };
//     return jwt.sign(payload, secret, {
//       algorithm: "HS256",
//       expiresIn: "1h",
//     });
//   },

//   verify: (token) => {
//     let decoded = null;
//     try {
//       decoded = jwt.verify(token, secret);
//       return {
//         ok: true,
//         _id: decoded._id,
//       };
//     } catch (error) {
//       return {
//         ok: false,
//         message: error.message,
//       };
//     }
//   },

//   refresh: () => {},
// };
