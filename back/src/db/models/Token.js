import { TokenModel } from "../schemas/token";

class Token {
  static async create({ newUserToken }) {
    const token = await TokenModel.create(newUserToken);
    return token;
  }

  static async getToken() {
    const userToken = await TokenModel.find({});
    return userToken;
  }
}

export { Token };
