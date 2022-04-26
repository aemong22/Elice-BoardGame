import { BoardGameModel } from "../schemas/boardgame";
class Boardame {
  static async insert({ item }) {
    // insert 시에만 사용
    const userToken = await BoardGameModel.create(item);
    return userToken;
  }

  static async findAllBoardGames() {
    const boardgames = await BoardGameModel.find({});
    return boardgames;
  }
}

export { Boardame };
