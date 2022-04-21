import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { userAuthService } from "../services/userService";

const userAuthRouter = Router();

// 회원가입
userAuthRouter.post("/user/register", async (req, res, next) => {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }

        const user_name = req.body.user_name;
        const email = req.body.email;
        const password = req.body.password;
        const phone_number = req.body.phone_number;

        const createdUser = await userAuthService.addUser({
            user_name,
            email,
            password,
            phone_number,
        });

        if (createdUser.errorMessage) {
            throw new Error(createdUser.errorMessage);
        }

        res.status(200).json(createdUser);
    } catch (error) {
        next(error);
    }
});

export { userAuthRouter };
