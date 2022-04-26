// boardgame 데이터 저장하는 파일
import fs from "fs";
import { Boardame } from "./db/models/BoardGame";

const insertData = (req, res, next) => {
    fs.readFile(
        "/Users/nowgnas/projects/board-game-recommendation-project/back/src/recently.json",
        (err, json) => {
            if (err) {
                return console.log(err);
            }
            const jsonData = JSON.parse(json);
            jsonData.data.forEach(async (element) => {
                console.log(element.index);
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
                const insertData = await Boardame.insert({ item });
            });
        }
    );
};

export { insertData };
