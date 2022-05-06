import { BoardGameModel } from "../db/schemas/boardgame";
import { FavoriteModel } from "../db/schemas/favorite";

class boardGameService {
    // 정렬 type 설정
    static sortType({ sortField }) {
        switch (sortField) {
            case "rank":
                return { rank: 1 };
            case "rating":
                return { bayes_average: -1 };
            case "userRated":
                return { user_rated: -1 };
            default:
                return null;
        }
    }

    static async favoriteGame({ userId, _id }) {
        const favorite = await FavoriteModel.findOne({
            userId,
            boardgame: { $in: [_id] },
        });
        return favorite !== null;
    }

    // pagination을 위한 함수
    static async offsetPatinate(findFunc, aggregator, args) {
        const { size, currentPage } = args;
        const someGames = await findFunc();
        const total = await aggregator();

        let totalPage = Math.ceil(total / size);
        return {
            someGames,
            totalPage,
        };
    }

    static async findGames({ user, query, sortType = null, page, perPage }) {
        // total page 계산
        const aggregator = async () =>
            await BoardGameModel.countDocuments(query);

        // 조건에 따른 보드게임 조회, pagination
        const findFunc = async () =>
            await BoardGameModel.find(query)
                .sort(this.sortType({ sortField: sortType }))
                .skip(perPage * (page - 1))
                .limit(perPage);

        const errorMessage =
            findFunc.length === 0 ? "조건에 맞는 보드게임이 없습니다." : null;

        // favorite 조회
        let { someGames, totalPage } = await this.offsetPatinate(
            findFunc,
            aggregator,
            { size: perPage, currentPage: page }
        );

        // favorite 필드 추가
        const games = someGames.map(async (value) => {
            const favorite = await this.favoriteGame({
                userId: user,
                _id: value._id,
            });

            const valueAdd = { ...value };
            valueAdd._doc.favorite = favorite;
            return valueAdd._doc;
        });
        const prom = await Promise.all(games);

        return { totalPage, games: prom, errorMessage };
    }

    // 최신 게임 전체 조회(보드게임 메인 페이지 default 조회)
    static async findByRecentlyGames({ user, sortType, page, perPage }) {
        const query = {
            year: { $gte: 2020 },
        };

        const { totalPage, games, errorMessage } = await this.findGames({
            user,
            sortType,
            query,
            page,
            perPage,
        });

        if (games.length === 0) return { errorMessage };

        return { totalPage, games };
    }

    // 상세 페이지 보드게임 조회 game_id로 조회
    // favorite 부분 리팩토링 필요
    static async findByGameId({ user, gameId }) {
        const game_id = Number(gameId);
        const game = await BoardGameModel.findOne({ game_id });

        if (game.recommend_id.length === 0)
            game.recommend_id = "연관된 보드게임이 없습니다.";

        const recommend_ids = await BoardGameModel.find({
            game_id: { $in: game.recommend_id },
        });

        const favorite = await this.favoriteGame({
            userId: user,
            _id: game._id,
        });

        const games = { ...game };
        games._doc.favorite = favorite;

        if (!games) return { errorMessage: "game id가 존재하지 않습니다." };

        return { games: games._doc, recommend_ids };
    }

    // player 기준 범위 안 보드게임 조회
    static async findByPlayer({ user, playerCount, sortType, page, perPage }) {
        // 인원 수 조회 option
        const query = {
            $and: [
                {
                    $nor: [
                        { min_player: { $gt: playerCount } },
                        { max_player: { $lt: playerCount } },
                    ],
                },
                { year: { $lt: 2020 } },
            ],
        };

        const { totalPage, games, errorMessage } = await this.findGames({
            user,
            query,
            sortType,
            page,
            perPage,
        });

        if (games.length === 0) return { errorMessage };

        return { totalPage, games };
    }

    // 연령별 기준 보드게임 조회
    static async findByAge({ user, age, sortType, page, perPage }) {
        const query = {
            $and: [{ min_age: { $lte: age } }, { year: { $lt: 2020 } }],
        };

        const { totalPage, games, errorMessage } = await this.findGames({
            user,
            query,
            sortType,
            page,
            perPage,
        });

        if (games.length === 0) return { errorMessage };

        return { totalPage, games };
    }

    // theme 기준 정렬
    static async findByTheme({ user, theme, sortType, page, perPage }) {
        const query = {
            $and: [{ year: { $lt: 2020 } }, { theme: { $in: [theme] } }],
        };
        const { totalPage, games, errorMessage } = await this.findGames({
            user,
            query,
            sortType,
            page,
            perPage,
        });

        if (games.length === 0) return errorMessage;

        return { totalPage, games };
    }

    // 시간 기준 정렬
    static async findByTime({ user, time, sortType, page, perPage }) {
        const query = {
            $and: [
                { year: { $lt: 2020 } },
                {
                    $nor: [
                        { min_playing_time: { $gt: time } },
                        { max_playing_time: { $lt: time } },
                    ],
                },
            ],
        };

        const { totalPage, games, errorMessage } = await this.findGames({
            user,
            query,
            sortType,
            page,
            perPage,
        });

        if (games.length === 0) return { errorMessage };

        return { totalPage, games };
    }

    static async findByComplexity({
        user,
        complexity,
        sortType,
        page,
        perPage,
    }) {
        const query = {
            $and: [
                { year: { $lt: 2020 } },
                {
                    complexity_average: {
                        $gte: Math.floor(complexity),
                        $lt: Math.floor(complexity) + 1,
                    },
                },
            ],
        };
        const { totalPage, games, errorMessage } = await this.findGames({
            user,
            query,
            sortType,
            page,
            perPage,
        });

        if (games.length === 0) return { errorMessage };

        return { totalPage, games };
    }

    // keyword 기준 보드게임 조회
    static async search({ keyword, page, perPage }) {
        const query = {
            $or: [
                // 문자열 포함 조회
                { theme: { $regex: keyword, $options: "i" } },
                { game_name: { $regex: keyword, $options: "i" } },
            ],
        };
        const { totalPage, games, errorMessage } = await this.findGames({
            user,
            query,
            page,
            perPage,
        });

        if (games.length === 0) return { errorMessage };

        return { totalPage, games };
    }

    // 보드게임 랜덤 조회
    static randomBoardGame({ index }) {
        const randomGame = BoardGameModel.findOne({ index });
        return randomGame;
    }
}

export { boardGameService };
