import { boardGameService } from "../services/boardGameService";
import fs from "fs";
class boardgameController {
    static async findAllGames(req, res, next) {
        try {
            const allBoardGame = await boardGameService.findAllGames();
            res.status(200).json(allBoardGame);
        } catch (error) {
            next(error);
        }
    }

    static async findRecentlyGames(req, res, next) {
        try {
            const recentlyGames = await boardGameService.findRecentlyGames();
            res.status(200).json(recentlyGames);
        } catch (error) {
            next(error);
        }
    }

    static async findByCondition(req, res, next) {
        try {
        } catch (error) {}
    }

    // insert data
    static async insertData(req, res, next) {
        try {
            fs.readFile(
                "/Users/nowgnas/projects/board-game-recommendation-project/back/src/dataset.json",
                (err, json) => {
                    const jsonData = JSON.parse(json);
                    jsonData.data.forEach(async (element) => {
                        const item = {
                            index: element.index,
                            un_named: element["Unnamed: 0"],
                            game_id: element.ID,
                            game_name: element.Name,
                            year: element.Year,
                            rank: element.Rank,
                            average_rating: element.Average,
                            bayes_average: element["Bayes average"],
                            user_rated: element["Users rated"],
                            url: element.URL,
                            thumbnail: element.Thumbnail,
                            min_player: element.minplayers,
                            max_player: element.maxplayers,
                            min_age: element.minage,
                            playing_time: element.playingtime,
                            min_playing_time: element.minplaytime,
                            max_playing_time: element.maxplaytime,
                            complexity_average: element["Complexity Average"],
                            domains: element.Domains,
                            image: element.image,
                            description: element.description,
                        };
                        const insert = await boardGameService.insertBoardgame({
                            item,
                        });
                    });
                }
            );
        } catch (error) {}
    }
}

export { boardgameController };
