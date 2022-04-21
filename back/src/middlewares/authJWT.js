import { verify } from "../utils/jwt-utils";

const authJWT = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const result = verify(token);

    if (result.ok) {
      req.id = result._id;
      next();
    } else {
      res.status(401).json({
        ok: false,
        message: result.message,
      });
    }
  }
};

export { authJWT };
