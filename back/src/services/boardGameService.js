import { Boardame } from "../db";

class boardGameService {
  static async getAllBoardGames() {
    const boardGames = await Boardame.findAllBoardGames();
    return boardGames;
  }
}

export { boardGameService };
