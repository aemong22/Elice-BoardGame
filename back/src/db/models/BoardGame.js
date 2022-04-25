import { BoardGameModel } from "../schemas/boardgame";
class Boardame {
  static async insert({ item }) {
    const userToken = await BoardGameModel.create(item);
    return userToken;
  }

  static async updateRefresh({ _id, refresh_token }) {
    // _id와 refresh token update, 없으면 추가
    const update = await TokenModel.updateOne(
      { _id },
      { _id, refresh_token },
      { upsert: true }
    );
    return update;
  }
}

export { Boardame };
