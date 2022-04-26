// boardgame 데이터 저장하는 파일
import fs from "fs";
import { Boardame } from "./db/models/BoardGame";

const insertData = (req, res, next) => {
    fs.readFile(
        "/Users/nowgnas/projects/board-game-recommendation-project/back/src/dataset.json",
        (err, json) => {
            if (err) {
                return console.log(err);
            }
            const jsonData = JSON.parse(json);
            jsonData.data.forEach(async (element) => {
                const item = {
                    index: element.index,
                    unNamed: element["Unnamed: 0"],
                    gameId: element.ID,
                    gameName: element.Name,
                    year: element.Year,
                    rank: element.Rank,
                    averageRating: element.Average,
                    bayesAverage: element["Bayes average"],
                    userRated: element["Users rated"],
                    url: element.URL,
                    thumbnail: element.Thumbnail,
                    minPlayer: element.minplayers,
                    maxPlayer: element.maxplayers,
                    minAge: element.minage,
                    playingTime: element.playingtime,
                    minPlayingTime: element.minplaytime,
                    maxPlayingTime: element.maxplaytime,
                    complexityAverage: element["Complexity Average"],
                    domains: element.Domains,
                    image: element.image,
                    description: element.description,
                    recommendId: element.RecommendID,
                };
                const insertData = await Boardame.insert({ item });
                console.log(insertData);
            });
        }
    );
};

export { insertData };
