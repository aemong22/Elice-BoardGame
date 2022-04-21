import { UserModel } from "../schemas/user";

class User {
    static async create({ newUser }) {
        const user = await UserModel.create(newUser);
        return user;
    }
    static async findByUserName({ user_name }) {
        const user = await UserModel.findOne({ user_name });
        return user;
    }
}

export { User };
