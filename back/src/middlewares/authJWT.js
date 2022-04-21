import { verify } from "../utils/jwt-utils";

const authJWT = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const result = verify(token);
    console.log(result);

    if (result.ok) {
      req.currentUserId = result.id;
      next();
    } else {
      res.status(401).json({
        ok: false,
        message: result.message,
      });
    }
  } else {
    console.log("No verified access token");
    res.status(400).send("This page for logged in user");
  }
};

export { authJWT };
