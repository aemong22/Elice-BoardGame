import { Boardame } from "../db";

class boardGameService {
  static async getAllBoardGames() {
    const boardGames = await Boardame.findAllBoardGames();
    return boardGames;
  }

  static async getGameByPlayer({ player }) {
    const games = await Boardame.findByPlayer({ player });
    return games;
  }
}

export { boardGameService };
