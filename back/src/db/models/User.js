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
    static async findByEmail({ email }) {
        const user = await UserModel.findOne({ email });
        return user;
    }
    static async findAll() {
        const users = await UserModel.find({});
        return users;
    }

    static async updatePassword({ email, fieldToUpdate, newValue }) {
        const filter = { email: email };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updatedUser = await UserModel.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updatedUser;
    }
}

export { User };
